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

    scooter.rent();

    for(let i = 0; i < listLength; i++){
      if(this.stations[location][i]["serial"] == scooterSerial){
        //assign user to scooter
        if(scooter.user == !null){
          throw new Error("Scooter already rented");
        }else{
          scooter.user = user;
        }
        //remove scooter from station list
        console.log("Scooter is rented");
        this.stations[location].splice(i,1);
        break;
      }
    }
    
  }
  //dockScooter method
  dockScooter(scooter, station){
    //check if scooter docked && if station exist
    if(!(station in this.stations)){
      throw new Error("No such station");
    } else if(scooter.station == station){
      throw new Error("Scooter already at station");
    }
    //docks and add scooter to location list
    scooter.dock(station)
    this.stations[station].push(scooter);
    console.log("Scooter is docked");
  }

  //print method
  print(){
    console.log(this.registeredUsers);
    console.log(this.stations);
  }

}

let scootApp = new ScooterApp();

let scooter1 = scootApp.createScooter("location1");
let scooter2 = scootApp.createScooter("location1");


let user1 = new User("anderson", "tiban", 19);

scootApp.rentScooter(scooter1, user1);

scootApp.dockScooter(scooter1, "location1")



scootApp.registerUser(user1.username, user1.password, user1.age);
scootApp.print();

//scootApp.loginUser(user1, user1.password);







module.exports = ScooterApp
