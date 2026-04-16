// import des fonctions à tester depuis math.js
import { randFloatSpread, mapLinear, lerp, clamp, randFloat } from '../src/math.js';

// tests du sujet

describe('randFloatSpread', () => {

  // it = un test unitaire
  it('randFloatSpread(1) <= 1 returns true', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1); // résultat <= 1
  });

  it('randFloatSpread(1) >= -1 returns true', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1); // résultat >= -1
  });
});

describe('mapLinear', () => {

  it('mapLinear(1,2,3,4,5) returns 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3); // égalité exacte
  });

  it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471); // égalité approx
  });
});

describe('lerp', () => {

  it('lerp(1,3,20) returns 41', () => {
    expect(lerp(1, 3, 20)).toBe(41); // égalité exacte
  });

  it('lerp(1.3,-7,2) returns -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3); // égalité approx
  });
});

// tests supplémentaires

describe('clamp', () => {

  it('clamp(5, 0, 10) returns 5', () => {
    expect(clamp(5, 0, 10)).toBe(5); // valeur dans la plage
  });

  it('clamp(-1, 0, 10) returns 0', () => {
    expect(clamp(-1, 0, 10)).toBe(0); // valeur sous le min
  });

  it('clamp(15, 0, 10) returns 10', () => {
    expect(clamp(15, 0, 10)).toBe(10); // valeur au dessus du max
  });
});

describe('randFloat', () => {

  it('randFloat(0, 1) returns value >= 0', () => {
    expect(randFloat(0, 1)).toBeGreaterThanOrEqual(0); // valeur >= min
  });

  it('randFloat(0, 1) returns value <= 1', () => {
    expect(randFloat(0, 1)).toBeLessThanOrEqual(1); // valeur <= max
  });
});