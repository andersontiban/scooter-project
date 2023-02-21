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

}
let scootApp = new ScooterApp();


let user1 = new User("anderson", "tiban", 19);


scootApp.registerUser(user1.username, user1.password, user1.age);

scootApp.loginUser(user1, user1.password);


console.log(user1.loggedIn);


let scooter1 = new Scooter("location1");
//console.log(scooter1);


module.exports = ScooterApp
