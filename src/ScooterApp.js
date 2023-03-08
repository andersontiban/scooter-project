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

/*

Use template literals to improve string concatenation:
You can use template literals to improve string concatenation, making it easier to read and understand. For example, in the registerUser method, you can use template literals to concatenate the error message:

throw new Error(`${username} is already registered or too young to register`);

*/



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


/* 
Use object destructuring to simplify variable assignments:

You can use object destructuring to simplify variable assignments. For example, in the createScooter method, you can destructure the station property from the scooter object like this:

let { station } = scooter;

*/

  //rentScooter method
  rentScooter(scooter, user){
    let location  = scooter.station;
    let scooterSerial = scooter.serial;
    //You don't need this. Instead use a loop for an object
    let listLength = scootApp.stations[location].length;

    scooter.rent();
  

    
//REFACTOR HERE 
    //use a for-in loop instead of a for-loop because we a looping through an object
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

/*
Use for...of loop instead of for loop:
You can use the for...of loop to iterate over an array or any iterable object, making the code more concise and readable. For example, in the rentScooter method, you can replace the for loop with a for...of loop:

for (let scooter of this.stations[location]) {
  if (scooter.serial === scooterSerial) {
    // assign user to scooter
    if (scooter.user) {
      throw new Error("Scooter already rented");
    } else {
      scooter.user = user;
    }
    // remove scooter from station list
    console.log("Scooter is rented");
    this.stations[location].splice(this.stations[location].indexOf(scooter), 1);
    break;
  }
} */


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








module.exports = ScooterApp
