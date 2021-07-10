const menu = [
  {
    name: "pancakes",
    category: "breakfast"
  },
  {
    name: "burger",
    category: "lunch"
  },
  {
    name: "steak",
    category: "dinner"
  }
]

const categories = ["all", ...new Set (menu.map((item)=>item.category))];
console.log(categories);

const result = document.querySelector(".result");
result.innerHTML = categories.map((category)=>{
  return `<button>${category.name}</button>`;
})
.join('');
