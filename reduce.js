// Reduce
// iterates, callback function
// reduces to a single value - number, array, pbject
// 1st parameter ("acc") - total of all calculations
// 2nd parameter ("curr") - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100},
  { name: "peter", age: 25, position: "designer", salary: 300},
  { name: "susy", age: 30, position: "the boss", salary: 400},
  { name: "anna", age: 35, position: "intern", salary: 10},
]

const monthlyTotal = staff.reduce((total,person)=>{
  console.log(total);
  console.log(person.salary);
  total *= person.salary;
  return total;
}, 20)

console.log(monthlyTotal)
