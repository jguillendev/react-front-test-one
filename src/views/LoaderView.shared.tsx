import React from "react";
import { PropsWithChildren } from "react";
import { useApiList } from "../hooks/api.hooks";
import { ApiSources, IApiDetailsResult } from "../hooks/api.interfaces";

type ILoaderView = {
  source: ApiSources;
  apiSource: string;
};

export const LoaderView = ({
  source,
  apiSource,
  children,
}: PropsWithChildren<ILoaderView>) => {
  const { isLoading, data, error } = useApiList<IApiDetailsResult>(apiSource);
  return (
    <section className="p8-4">
      {isLoading && <h1 className="title">Cargando</h1>}

      {error && <h1 className="title">Ups sucedio un error</h1>}

      {data &&
        React.cloneElement(children as JSX.Element, {
          source: source,
          payload: data,
        })}
    </section>
  );
};
