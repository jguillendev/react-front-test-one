import { useParams } from "react-router-dom";
import { ApiSources } from "../hooks/api.interfaces";
import { PeopleDetailView } from "../views/details/PeopleDetailView";
import { PlanetDetailView } from "../views/details/PlanetsDetailView";
import { StarshipDetailView } from "../views/details/StarshipDetailView";
import { LoaderView } from "../views/LoaderView.shared";

interface IContentView {
  source?: ApiSources;
  payload?: any;
}
export const ContentView = ({ source, payload }: IContentView) => {
  switch (source) {
    case ApiSources.people:
      return <PeopleDetailView data={payload} />;
    case ApiSources.planets:
      return <PlanetDetailView data={payload} />;
    case ApiSources.starships:
      return <StarshipDetailView data={payload} />;
    default:
      return <section>Source Api ${source} Not Found</section>;
  }
};

export const DetailPage = () => {
  const { source, number } = useParams();
  const apiSource = `${source}/${number}`;

  return (
    <main>
      <div className="pt-4 pb-8">
        <p className="title">#{number} Details</p>
        <p className="text-2xl">{source}</p>
      </div>
      <LoaderView source={source as ApiSources} apiSource={apiSource}>
        <ContentView />
      </LoaderView>
    </main>
  );
};
