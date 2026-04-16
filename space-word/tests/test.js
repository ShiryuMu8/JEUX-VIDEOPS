// On importe les fonctions
const game = require('../script.js');

// – getRandomInt(-42, 42) < 43 returns true
test('nb1 : getRandomInt plage de valeurs', () => {
    const min = -42;
    const max = 42;
    const resultat = game.getRandomInt(min, max);
    expect(resultat).toBeLessThan(43);
});

// – getRandomInt(42, 42) returns 42
test('nb2 : getRandomInt bornes identiques', () => {
    const min = 42;
    const max = 42;
    const resultat = game.getRandomInt(min, max);
    const attendu = 42;
    expect(resultat).toBe(attendu);
});

// – rectIntersect(1,1,2,1,4,1,1,2) returns false
test('nb3 : rectIntersect sans collision', () => {
    const resultat = game.rectIntersect(1, 1, 2, 1, 4, 1, 1, 2);
    const attendu = false;
    expect(resultat).toBe(attendu);
});

// – rectIntersect(1,1,5,2,4,1,1,2) returns true
test('nb4 : rectIntersect avec collision', () => {
    const resultat = game.rectIntersect(1, 1, 5, 2, 4, 1, 1, 2);
    const attendu = true;
    expect(resultat).toBe(attendu);
});

// – circleIntersect(3,2,1,6,1,1.5) returns false
test('nb5 : circleIntersect sans collision', () => {
    const resultat = game.circleIntersect(3, 2, 1, 6, 1, 1.5);
    const attendu = false;
    expect(resultat).toBe(attendu);
});

// – circleIntersect(3,2,1,3,-2,4) returns true
test('nb6 : circleIntersect avec collision', () => {
    const resultat = game.circleIntersect(3, 2, 1, 3, -2, 4);
    const attendu = true;
    expect(resultat).toBe(attendu);
});

// – timeToString(123456789) returns "17:36:78"
test('nb7 : timeToString valeur normale', () => {
    const ms = 123456789;
    const resultat = game.timeToString(ms);
    const attendu = "17:36:78";
    expect(resultat).toBe(attendu);
});

// – timeToString("toto") returns "NaN:NaN:NaN"
test('nb8 : timeToString avec erreur de type (string)', () => {
    const input = "toto";
    const resultat = game.timeToString(input);
    const attendu = "NaN:NaN:NaN";
    expect(resultat).toBe(attendu);
});

// 5 TESTS UNITAIRES SUPPLEMENTAIRES

// – getRandomInt(0, 0) returns 0
test('nb9 : getRandomInt avec bornes à zéro', () => {
    const min = 0;
    const max = 0;
    const resultat = game.getRandomInt(min, max);
    const attendu = 0;
    expect(resultat).toBe(attendu);
});

// – rectIntersect(0,0,1,1,1,1,2,2) returns false
test('nb10 : rectIntersect sans collision avec des rectangles éloignés', () => {
     const resultat = game.rectIntersect(0, 0, 1, 1, 2, 2, 2, 2); 
     const attendu = false;
     expect(resultat).toBe(attendu);
});

// – rectIntersect(0,0,2,2,1,1,2,2) returns true
test('nb11 : rectIntersect avec collision partielle', () => {
    const resultat = game.rectIntersect(0, 0, 2, 2, 1, 1, 2, 2);
    const attendu = true;
    expect(resultat).toBe(attendu);
});

// – circleIntersect(0,0,1,1,1,1) returns true
test('nb12 : circleIntersect avec collision parfaite', () => {
    const resultat = game.circleIntersect(0, 0, 1, 1, 1, 1);
    const attendu = true;
    expect(resultat).toBe(attendu);
});

// – timeToString(0) returns "00:00:00"
test('nb13 : timeToString avec zéro milliseconde', () => {
    const ms = 0;
    const resultat = game.timeToString(ms);
    const attendu = "00:00:00";
    expect(resultat).toBe(attendu);
});