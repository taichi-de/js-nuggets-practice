// Map Method

const people = [
  {
    name: 'bob',
  age:20,
  position:"developer"
  },
  {
    name: 'anna',
    age:25,
    position:"designer"
  },
  {
    name:"suzy",
    age:30,
    position:"the boss"
  }
]

const getAges = (person) => person.age *2;

const ages = people.map(getAges);
console.lpg(ages);

const newPeople = people.map((item)=>{
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  }
})
console.log(newPeople);

const names = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names;
