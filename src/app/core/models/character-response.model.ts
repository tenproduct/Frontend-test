export interface SWCharacterResponse {
  count: number;
  next: string;
  previous: string;
  results: SWCharacter[];
}

export interface SWCharacter {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: [];
  starships: [];
  created: Date;
  edited: Date;
  url: string;
}
