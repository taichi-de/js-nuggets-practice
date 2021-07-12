//Reduce - Objects

//cart example:
const cart = [
  { title: "Samsung Galaxy S7", price: 599, amount: 1},
  { title: "google pixel", price: 499, amount: 2},
  { title: "Xiaomi Redmi2", price: 699, amount: 4},
  { title: "Xiaomi Redmi3", price: 399, amount: 3},
]

let {totalItems, cartTotal} = cart.reduce(
  (total, cartItem) => {
    const {amount, price} = cartItem;
    // count items
    total.totalItems += amount
    // count sum
    total.cartTotal += amount * price;
  return total
}, {
  totalItem: 0,
  cartTotal: 0
});

cartTotal = parseFloat(cartTotal.toFixed(2)); //下二桁

console.log(totalItems,cartTotal);

const url = "";

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
}

fetchRepos()
