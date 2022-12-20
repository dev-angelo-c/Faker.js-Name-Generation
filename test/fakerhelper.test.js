const {
  faker
} = require('@faker-js/faker');

const expect = require("chai").expect;

let generateDogs = function () {
  let dogs = [];
  while (dogs.length < 5) {
    dogs.push({
        breed: faker.animal.dog(),
        name: faker.name.firstName(),
        description: faker.hacker.adjective()
      }

    )
  }
  return dogs;
}

describe("Should build five owners", () => {

  let owners = [];

  while(owners.length < 5){
    owners.push({
      name: faker.name.fullName(),
      address: faker.address.streetAddress(true),
      address2: "",
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCodeByState(),
      phone: faker.phone.number()
    })
  }
  console.log(" OWNERS: ")
  console.log(JSON.stringify(owners))
  return owners;
})

describe("Build some vets", () => {

  let vets = [];

  while(vets.length < 5){
    vets.push({
      name: faker.name.fullName("Dr."),
      address: faker.address.streetAddress(true),
      address2: "",
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCodeByState(),
      phone: faker.phone.number()
    })
  }

  console.log("VETS:");
  console.log(JSON.stringify(vets));

})

describe.only("Build a fake schedule", () => {
  
    let threeWeeks = [];
    
    function pushMoreDays(){
      let tenDays = [];
      while(tenDays.length < 10){
        tenDays.push(faker.date.soon(30));
      }
      return tenDays;
    }
    
    while(threeWeeks.length < 3){
      threeWeeks.push({[threeWeeks.length + 1] : pushMoreDays()});
    }

    console.log(JSON.stringify(threeWeeks));
    return threeWeeks;
    
})