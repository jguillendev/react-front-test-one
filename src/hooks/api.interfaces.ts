export interface IApiListItem {
  name: string;
  url: string;
}
export interface IApiListResult {
  count: number;
  next: string;
  previous: string;
  results: Array<IApiListItem>;
}

export interface IApiDetailsResult {
  name: string;
}

export enum ApiSources {
  none = "none",
  people = "people",
  planets = "planets",
  starships = "starships",
}
