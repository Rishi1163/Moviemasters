import React, { useCallback, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState({
    isLoading: true,
    isError: false,
    isIdle: false,
  });

  const setError = useCallback(() => {
    setStatus({
      isError: true,
      isLoading: false,
      isIdle: false,
    });
  }, [setStatus]);

  const setLoading = useCallback(() => {
    setStatus({
      isError: false,
      isLoading: true,
      isIdle: false,
    });
  }, [setStatus]);

  const setIdle = useCallback(() => {
    setStatus({
      isError: false,
      isLoading: false,
      isIdle: true,
    });
  }, [setStatus]);

  return {
    ...status,
    setError,
    setLoading,
    setIdle,
  };
};

export default useStatus;