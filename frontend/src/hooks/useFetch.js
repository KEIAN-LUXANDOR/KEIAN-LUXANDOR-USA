import { useEffect, useState } from 'react';

// Loads data once per `key` and reports { data, loading, error }.
// Example: const { data, loading } = useFetch(() => fetchProducts('rings'), 'rings');
export default function useFetch(loader, key) {
  const [state, setState] = useState({ key: undefined, data: null, error: null });

  useEffect(() => {
    let cancelled = false;
    loader()
      .then((data) => {
        if (!cancelled) setState({ key, data, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ key, data: null, error });
      });
    return () => {
      cancelled = true;
    };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const loading = state.key !== key;
  return {
    data: loading ? null : state.data,
    error: loading ? null : state.error,
    loading,
  };
}