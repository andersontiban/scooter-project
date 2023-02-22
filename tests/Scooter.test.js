const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    let scooter = new Scooter("location1");
    let user = new User("anderson", "tiban", "19");
    // edit this to be a real test!
    expect(typeof scooter).toEqual("object");
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  let scooter = new Scooter("location1");
  let user = new User("anderson", "tiban", "19");

  //rent method
  test("rent method", ()=>{
    scooter.rent()
    expect(scooter.station).toBe(null);
  })

  //dock method
  test("dock method", ()=>{
    scooter.dock("location1");
    expect(scooter.station).toBe("location1");
    
  })

  //requestRepair method
  test("request repair", ()=>{
    scooter.requestRepair();
    expect(scooter.isBroken).toBe(false);
  })

  //charge method
  test("charge method", ()=>{
    scooter.recharge();
    expect(scooter.charge).toBe(100);
  })

})
