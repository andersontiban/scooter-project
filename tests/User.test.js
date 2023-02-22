const User = require('../src/User')

// User class property test
describe("User class test properties", ()=>{
    let user1 = new User("anderson", "tiban", 19);
    // test username
    test("username", ()=>{
        expect(user1.username).toBe("anderson");
    })
    // test password
    test("password", ()=>{
        expect(user1.password).toBe("tiban");
    })
    // test age
    test("age", ()=>{
        expect(user1.age).toBe(19);
    })


})
//User class method test
describe("User class test methods", ()=>{
    let user1 = new User("anderson", "tiban", 19);
    // test login
    test("login method", ()=>{
        user1.login(user1.password);
        expect(user1.loggedIn).toBe(true);
    })
    // test logout
    test("logout method",()=>{
        user1.logout()
        expect(user1.loggedIn).toBe(false)
    })


})










