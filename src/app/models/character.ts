/**
 * A person within the Star Wars universe
 * Generated with https://app.quicktype.io/?l=ts
 */
export interface Character {
    /**
     * The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle
     * of Yavin).
     */
    birth_year: string;
    /**
     * The ISO 8601 date format of the time that this resource was created.
     */
    created: Date;
    /**
     * the ISO 8601 date format of the time that this resource was edited.
     */
    edited: Date;
    /**
     * The eye color of this person.
     */
    eye_color: string;
    /**
     * An array of urls of film resources that this person has been in.
     */
    films: any[];
    /**
     * The gender of this person (if known).
     */
    gender: string;
    /**
     * The hair color of this person.
     */
    hair_color: string;
    /**
     * The height of this person in meters.
     */
    height: string;
    /**
     * The url of the planet resource that this person was born on.
     */
    homeworld: string;
    /**
     * The mass of this person in kilograms.
     */
    mass: string;
    /**
     * The name of this person.
     */
    name: string;
    /**
     * The skin color of this person.
     */
    skin_color: string;
    /**
     * The url of the species resource that this person is.
     */
    species: any[];
    /**
     * An array of starship resources that this person has piloted
     */
    starships: any[];
    /**
     * The url of this resource
     */
    url: string;
    /**
     * An array of vehicle resources that this person has piloted
     */
    vehicles: any[];
}

export const characterStub: Character = {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/',
    films: [
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
        'http://swapi.dev/api/vehicles/44/',
        'http://swapi.dev/api/vehicles/46/'
    ],
    starships: [
        'http://swapi.dev/api/starships/39/',
        'http://swapi.dev/api/starships/59/',
        'http://swapi.dev/api/starships/65/'
    ],
    created: new Date('2014-12-10T16:20:44.310000Z'),
    edited: new Date('2014-12-20T21:17:50.327000Z'),
    url: 'http://swapi.dev/api/people/11/'
};
