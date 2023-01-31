import { IDetailView } from "./details.interfaces";

interface IPlanetDetail {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
}
export const PlanetDetailView = ({ data }: IDetailView<IPlanetDetail>) => {
  return (
    <section>
      <p>Name: {data.name}</p>
      <p>Rotation Period: {data.rotation_period}</p>
      <p>Orbital Period: {data.orbital_period}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Climate: {data.climate}</p>
      <p>Gravity: {data.gravity}</p>
    </section>
  );
};
