// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("occupationString", () => {

  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

      // set expect statement to equal an array with a sentence about each person with their name capitalized.
      expect(occupationString(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

    })
  })
  // Note: running Jest produces desired Red message that function is not defined



// b) Create the function that makes the test pass.

  //create a function called occupationString
const occupationString = (array) => {
  // create a return array
  let final = []
  // create an array to push names into
  let nameArray = []
  // create a string to convert from the names array
  let nameString = ""
  // iterate over the original array
  for (let i=0; i < array.length; i++){
  // split the value, accessed at name, into an array, for each index
    let upcaseNames = array[i].name.split(" ")
  //   iterate over the array that contains the person's full name
    for (let i=0; i < upcaseNames.length; i++){
  //uppercase index 0, of each index, and slice the rest of the word to add to index 0
      upcaseNames[i] = upcaseNames[i].charAt(0).toUpperCase() + upcaseNames[i].slice(1)
  // push each uppercased name into the names array
      nameArray.push(upcaseNames[i])
  // rejoin the array into a string for proper display
      nameString = nameArray.join(" ")
    }
  // push a string interpolation using the name string and occupation string, into the final array
    final.push(`${nameString} is ${array[i].occupation}.`)
  // reset the array to an empty array so it doesn't repeate info
    nameArray = []
  }
 // return the final array. wow, that's a lot of pseudocoding lol
  return final
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("numainders", () => {

  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]

    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

      // set expect statement to equal an array of only the REMAINDERS of the numbers when divided by 3.
      expect(numainders(hodgepodge1)).toEqual([2, 0, -1, 0 ])
      expect(numainders(hodgepodge2)).toEqual([2, 1, -1 ])

    })
  })
  // Note: running Jest produces desired Red message that function is not defined



// b) Create the function that makes the test pass.

// create a function called numainders
const numainders = (array) => {
// create a return array
  let outputs = []
// iterate over input array
  for (let i=0; i< array.length; i++){
// check each index for data type of number
    if (typeof array[i] === "number"){
// push remainder of number after being divided by 3
      outputs.push(array[i] % 3)
    }
  }
// return array
  return outputs
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("sumOfAcube", () => {

  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125

    it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

      // set expect statement to equal a number that's the sum of all the numbers cubed.
      expect(sumOfAcube(cubeAndSum1)).toEqual(99)
      expect(sumOfAcube(cubeAndSum2)).toEqual(1125)

    })
  })
  // Note: running Jest produces desired Red message that function is not defined



// b) Create the function that makes the test pass.

// create a function called sumOfAcube
const sumOfAcube = (array) => {
// create a return number set to 0
  let num = 0
// iterate over the array
  for (let i=0; i< array.length; i++){
// add the cubed number to the return num
    num += array[i]**3
  }
// return the num  
  return num
}
