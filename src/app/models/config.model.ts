
export interface IConfigUrl {
  swapiUrl: string;
}

export interface IResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}
