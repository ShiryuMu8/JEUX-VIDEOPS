// on importe les 3 fonctions à tester depuis math.js
import { randFloatSpread, mapLinear, lerp } from '../src/math.js';

// describe = groupe de tests pour une fonction
describe('randFloatSpread', () => {

  // it = un test unitaire
  it('randFloatSpread(1) <= 1 returns true', () => {
    // expect = on vérifie que le résultat est <= 1
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  });

  it('randFloatSpread(1) >= -1 returns true', () => {
    // expect = on vérifie que le résultat est >= -1
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  });
});

describe('mapLinear', () => {

  it('mapLinear(1,2,3,4,5) returns 3', () => {
    // toBe = vérifie une égalité exacte
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });

  it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
    // toBeCloseTo = vérifie une égalité approximative (nombres décimaux)
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });
});

describe('lerp', () => {

  it('lerp(1,3,20) returns 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  it('lerp(1.3,-7,2) returns -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
});