import { useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
