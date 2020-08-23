// tslint:disable: variable-name
import { ICharacter } from '../interfaces/swapi-ppl-character.interface';

export class Character implements ICharacter {

  readonly name: string;
  readonly height: string;
  readonly mass: string;
  readonly hair_color: string;
  readonly skin_color: string;
  readonly eye_color: string;
  readonly birth_year: string;
  readonly gender: string;
  readonly homeworld: string;
  readonly films: string[];
  readonly vehicles: string[];
  readonly species: string[];
  readonly starships: string[];
  readonly created: string;
  readonly edited: string;
  readonly url: string;

  constructor(iCharacter: ICharacter) {
    this.name = iCharacter.name;
    this.height = iCharacter.height;
    this.mass = iCharacter.mass;
    this.hair_color = iCharacter.hair_color;
    this.skin_color = iCharacter.skin_color;
    this.eye_color = iCharacter.eye_color;
    this.birth_year = iCharacter.birth_year;
    this.gender = iCharacter.gender;
    this.homeworld = iCharacter.homeworld;
    this.films = Array.isArray(iCharacter.films) ? iCharacter.films : null;
    this.vehicles = Array.isArray(iCharacter.vehicles) ? iCharacter.vehicles : null;
    this.species = Array.isArray(iCharacter.species) ? iCharacter.species : null;
    this.starships = Array.isArray(iCharacter.starships) ? iCharacter.starships : null;
    this.created = iCharacter.created;
    this.edited = iCharacter.edited;
    this.url = iCharacter.url;
  }
}

