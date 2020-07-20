import * as StarWarsActions from './star-wars.actions';

describe('StarWars', () => {
  it('should create an instance', () => {
    expect(new StarWarsActions.LoadLoadCharacters()).toBeTruthy();
  });
});
