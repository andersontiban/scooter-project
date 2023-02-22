const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      "location1" : [],
      "location2" : [],
      "location3" : []
    }
    this.registeredUsers = {};
  }

  //registerUser method
  registerUser(username, password, age){
    //If username is already registered than throw error,
    //if user not registered and is over 18 then register the user
    if (!(username in this.registeredUsers) &&  age >= 18){
      this.registeredUsers[username] = password;
      console.log("The user has been registered");
    }else{
      throw new Error("already registered or too young to register")
    }  
  }
  //login method calls on user method login 
  loginUser(user, password){
    if (user.username in this.registeredUsers){
      user.login(password);
    } else{
      throw new Error("Username not found");
    }
  }

  //logout method
  logoutUser(user){
    if(user.username in this.registeredUsers){
      user.logout();
      console.log("user is logged out");
    }else{
      throw new Error("no suh user is logged in error");
    }
  }

  //create scooter method
  createScooter(station){
    if(station in this.stations){
      let scooter = new Scooter(station)
      this.stations[scooter.station].push(scooter);
      console.log("Created new scooter");
      return scooter;
    }else{
      throw new Error("no such station");
    }
  }
  //rentScooter method
  rentScooter(scooter, user){

    let location  = scooter.station;
    let scooterSerial = scooter.serial;
    let listLength = scootApp.stations[location].length;

    for(let i = 0; i < listLength; i++){
      if(this.stations[location][i]["serial"] == scooterSerial){
    
        this.stations[location].splice(i,1);
        break;
      }
    }


    //console.log(this.stations[location][0]);
    
    //console.log(this.stations[location][0]["serial"])
    
  }



}
let scootApp = new ScooterApp();

let scooter1 = scootApp.createScooter("location1");
let scooter2 = scootApp.createScooter("location1");

//console.log(scootApp.stations);
//console.log(scootApp.stations["location1"].length);

let user1 = new User("anderson", "tiban", 19);

scootApp.rentScooter(scooter1, user1);

//scootApp.registerUser(user1.username, user1.password, user1.age);

//scootApp.loginUser(user1, user1.password);







module.exports = ScooterApp
