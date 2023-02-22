const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("scooter app class", ()=>{
    let scooter = new Scooter("location1");
    let user = new User("anderson", "tiban", 19);
    let scootApp = new ScooterApp();
    // register user
    test("register user method", ()=>{
        scootApp.registerUser(user.username, user.password, user.age);
        expect(scootApp.registeredUsers).toHaveProperty(user.username);
    })

    // log in
    test("login method", ()=>{
        scootApp.loginUser(user, user.password);
        expect(user.loggedIn).toBe(true);
    })

    // log out
    test("logout method", ()=>{
        scootApp.logoutUser(user);
        expect(user.loggedIn).toBe(false);
    })

    // rent scooter

    // dock scooter


})

