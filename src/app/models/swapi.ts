export interface SwapiResponse {
    count: number;
    next: string; //url
    previous: string; //url
    results: SWPerson[];
}

export interface SWPerson {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; //url
    films: string[]; //urls
    species: string[]; //urls
    vehicles: [];
    starships: [];
    created: Date;
    edited: Date;
    url: string;
}
