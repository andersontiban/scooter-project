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
    }else{
      throw new Error("Scooter needs to charge");
    }
  }

  //dock method
  dock(station){
    this.station = station;
    this.user = null;
  }

  // recharge method
  async recharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
  }

  async requestRepair(){
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds
    this.isBroken = false;
    console.log("Repair completed");
  }
}





module.exports = Scooter
