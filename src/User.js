class User {
  // User code here
  constructor(username, password, age){
    this.username = username,
    this.password = password,
    this.age = age,
    this.loggedIn = false;
  }

  //
  login(password){
    if(password == this.password){
      this.loggedIn = true;
      console.log("User has been logged in ");
    }else{
      throw new Error("Username or Incorrect password");
    }
  }

  //logout method
  logout(){
    this.loggedIn = false;
  }
}

module.exports = User
