export default class Age {
  constructor(earthAge) {
    this.earth = earthAge
    this.earthAgeExpectancy = 78
  }
  earthAge(){
    return this.earth
  }
  mercuryAge(){
    return this.earth /.24
  }
  venusAge(){
    return this.earth /.62
  }
  marsAge(){
    return this.earth /1.88
  }
  jupiterAge(){
    return this.earth /11.86
  }
  timeOnEarth(){
    return this.earthAgeExpectancy - this.earth
  }
  timeOnMercury(){
    return (this.earthAgeExpectancy - this.earth) /.24
  }
  timeOnVenus(){
    return (this.earthAgeExpectancy - this.earth) /.62
  }
  timeOnMars(){
    return(this.earthAgeExpectancy - this.earth) /1.88  
  }

  }


