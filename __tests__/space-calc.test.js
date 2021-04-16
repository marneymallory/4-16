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
    expect(age.venusAge()).toEqual(48);
  });
  
});
