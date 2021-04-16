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
    expect(age.jupiterAge()).toEqual(2.5295109612141653)
  })
  test("should correctly return years left on Earth", () => {
    expect(age.earthAgeExpectancy()).toEqual(48)
  })
  
  
  
});
