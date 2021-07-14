//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

function addList(user){
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers(){
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json();
  return users;
}

async function listUsers(){
  const users = await getUsers();
  //DOM操作
  users.forEach(addList);
}

//Event
window.addEventListener("load", listUsers); //windowが先に読み込まれる
button.addEventListener("click", listUsers);

