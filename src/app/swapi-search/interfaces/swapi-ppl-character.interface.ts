export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string; // url
  films: string[]; // urls
  vehicles: string[]; // urls
  species: string[]; // urls
  starships: string[]; // urls
  created: string; // iso date string
  edited: string; // iso date string
  url: string;
}
