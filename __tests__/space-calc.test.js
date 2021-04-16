import Age from "../src/js/space-calc";

describe("Age", () => {
  let age;
  beforeEach(() => {
    age = new Age();
  });

  test("should correctly return age in earth years", () => {
    age.earth = "30";
    expect(age.earth).toEqual("30");
  });
});
