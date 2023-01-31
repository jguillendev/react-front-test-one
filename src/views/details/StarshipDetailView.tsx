import { IDetailView } from "./details.interfaces";

interface IStarshipDetail {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  passengers: string;
}
export const StarshipDetailView = ({ data }: IDetailView<IStarshipDetail>) => {
  return (
    <section>
      <p>Name: {data.name}</p>
      <p>Model: {data.model}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Cost In Credits: {data.cost_in_credits}</p>
      <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
      <p>Passengers: {data.passengers}</p>
    </section>
  );
};
