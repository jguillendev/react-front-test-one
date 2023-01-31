import { Link } from "react-router-dom";
import { ListView } from "../components/common";
import { useApiList } from "../hooks/api.hooks";
import { IApiListResult } from "../hooks/api.interfaces";

export const PlanetsPage = ({ viewName = "planets" }) => {
  const { isLoading, data, error } = useApiList<IApiListResult>("planets");
  return (
    <main>
      <Link to="/">regresar</Link>
      <h1 className="title">{viewName}</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : error ? (
        <h1>Sucedio algo {JSON.stringify(error)}</h1>
      ) : data ? (
        <ListView source={viewName} items={data.results} />
      ) : null}
    </main>
  );
};
