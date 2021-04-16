import Age from './../src/space-calc.js';
describe("Age", () => {
  test("should correctly return age in earth years", () => {
    const age = new Age(earth, mercury, venus, mars, jupiter);
    expect(age);
    expect(age.earth).toReturn();
  });


});
