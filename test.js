const world = require('./');

describe('World', () => {

  test('Loads correctly', () => {
    expect(world).toBeTruthy();
  });

  test('Has the correct number of countries', () => {
    expect(world.features.length).toBe(241);
  });

});
