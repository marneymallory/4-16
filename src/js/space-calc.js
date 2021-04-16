export default class Age {
  constructor(earthAge) {
    this.earth = earthAge
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
}

