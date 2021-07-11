// Filter - returns a new array, can manipulate the size of new array(unlike map), returns based  on condition
//Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer"},
  { name: "peter", age: 25, position: "designer"},
  { name: "susy", age: 30, position: "the boss"},
  { name: "anna", age: 35, position: "intern"},
]

//filter
const youngPeople = people.filter((person)=>{
  // console.log(person);
  return person.age < 30;// = if(person < 30){return person}
})
console.log(youngPeople);
const developers = people.filter((person)=>person.position === "developer");
console.log(developers);

//no match
const seniorDevs = people.filter((person)=>person.position === "senior developer");
console.log(seniorDevs);

//find
const peter = people.find((person)=>person.name === "peter");
console.log(peter);

//no match
const oldPerson = people.find((person)=>person.age > 35);
console.log(oldPerson); //undefined

//multiple matches - first match
const randomPerson = people.find((person)=>person.age < 35);
console.log(randomPerson); // (anyone under 35)