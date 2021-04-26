export default class Age {
  constructor(earthAge) {
    this.earth = earthAge;
    this.earthAgeExpectancy = 78;
  }
  earthAge() {
    return this.earth;
  }
  mercuryAge() {
    return this.earth / 0.24;
  }
  venusAge() {
    return this.earth / 0.62;
  }
  marsAge() {
    return this.earth / 1.88;
  }
  jupiterAge() {
    return this.earth / 11.86;
  }
  timeOnEarth() {
    return this.earthAgeExpectancy - this.earth;
  }
  timeOnMercury() {
    return (this.earthAgeExpectancy - this.earth) / 0.24;
  }
  timeOnVenus() {
    return (this.earthAgeExpectancy - this.earth) / 0.62;
  }
  timeOnMars() {
    return (this.earthAgeExpectancy - this.earth) / 1.88;
  }
  timeOnJupiter() {
    return (this.earthAgeExpectancy - this.earth) / 11.86;
  }
  newEarthAge() {
    return this.earth - this.earthAgeExpectancy;
  }
  newMercuryAge() {
    return (this.earth - this.earthAgeExpectancy) / 0.24;
  }
  newVenusAge() {
    return (this.earth - this.earthAgeExpectancy) / 0.62;
  }
}
