class Scooter{
  static nextSerial = 0;
  // scooter code here
  constructor(station){
    this.station = station,
    this.user = null,
    this.serial = Scooter.nextSerial,
    this.charge = 100,
    this.isBroken = false;
    Scooter.nextSerial++;
  }
  //rent method
  rent(){
    if(this.charge > 20 && !this.isBroken){
      this.station = null;
      //this.user = 
    }else{
      throw new Error("Scooter needs to charge");
    }
  }
}

const scoot1 = new Scooter("location1");
scoot1.rent();


module.exports = Scooter
