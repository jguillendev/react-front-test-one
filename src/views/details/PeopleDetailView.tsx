import { IDetailView } from "./details.interfaces";

interface IPeopleDetail {
  name: string;
  height: string;
}
export const PeopleDetailView = ({ data }: IDetailView<IPeopleDetail>) => {
  return (
    <section>
      <p>Name: {data.name}</p>
      <p>Height: {data.height}</p>
    </section>
  );
};
