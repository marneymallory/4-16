import Age from "../src/js/space-calc";

describe("Age", () => {
  let age;
  beforeEach(() => {
    age = new Age(30);
  });

  test("should correctly return age in earth years", () => {
    expect(age.earthAge()).toEqual(30);
  });
  test("should correctly return age in Mercury years", () => {
    expect(age.mercuryAge()).toEqual(125);
  });
  test("should correctly return age in Venus years", () => {
    expect(age.venusAge()).toEqual(48.38709677419355);
  });
  test("should correctly return age in Mars years", () => {
    expect(age.marsAge()).toEqual(15.957446808510639);
  });
  test("should correctly return age in Jupiter years", () => {
    expect(age.jupiterAge()).toEqual(2.5295109612141653);
  });
  test("should correctly return years left on Earth", () => {
    expect(age.timeOnEarth()).toEqual(48);
  });
  test("should correctly return years left on Mercury", () => {
    expect(age.timeOnMercury()).toEqual(200);
  });
  test("should correctly return years left on Venus", () => {
    expect(age.timeOnVenus()).toEqual(77.41935483870968);
  });
  test("should correctly return years left on Mars", () => {
    expect(age.timeOnMars()).toEqual(25.531914893617024);
  });
  test("should correctly return years left on Jupiter", () => {
    expect(age.timeOnJupiter()).toEqual(4.0472175379426645);
  });
  test("should correctly return years lived past life expectancy on Earth", () => {
    age = new Age(80);
    expect(age.newEarthAge()).toEqual(2);
  });
  test("should correctly return years lived past life expectancy on Mercury", () => {
    age = new Age(80);
    expect(age.newMercuryAge()).toEqual(8.333333333333334);
  });
  test("should correctly return years lived past life expectancy on Venus", () => {
    age = new Age(80);
    expect(age.newVenusAge()).toEqual(3.2258064516129035);
  });
  test("should correctly return years lived past life expectancy on Mars", () => {
    age = new Age(80);
    expect(age.newMarsAge()).toEqual(1.06382979);
  });
});
