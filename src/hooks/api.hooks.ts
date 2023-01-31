import { useState, useEffect } from "react";

export const useApiList = <T>(source: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/${source}`)
      .then(async (result) => {
        const _data = await result.json();
        setData(_data);
      })
      .catch((ex) => {
        setError(`Error cargando ${source}`);
        console.log("ex", ex);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [source]);

  return {
    data,
    isLoading,
    error,
  };
};
