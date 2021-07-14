// template(ES6)
const name = "Tai"
const univ = "Augsburg Univ"

console.log(name + "of" + univ);
console.log(`${name}of${univ}`);

//条件（三項）演算子のメリット
// - 1行で書ける
// - if文だとletで書かなきゃいけない場合もconstで書ける（再代入不可）
const beverage = age >= 20 ? "Bier" : "juice";

//Rest parameters
/* 通常 */
function fn(a,b){
  console.log(a,b);
}
fn(1,2);

/* Rest parameters */
function fn(...args){
  console.log(args);
}
fn(1,2);fn(1,2,3,5,10);

function fn(a,b, ...args){
  console.log(a);
  console.log(b);
  console.log(args);
}

//Concat Syntax 連結
const num1 = [1,2]
const num2 = [3,4]
const num3 = [5,6]

const res1 = num1.concat(num2);
// const res2 = num2.concat(num2,num3);
const res2 = [].concat(num1,num2,num3);
console.log(res2); // [1,2,3,4,5,6]

//Array spread Syntax （concatと同じだが現場ではこちらがよく使われる）
const res1 = [...num1, ...num2, ...num3];

const abs = ["A","B","C"];
const res = [1, ...abc, 2];
console.log(res); // [1,"A","B","C",2]
//concatとSpreadはどちらも元の配列を変更しないので非破壊的メソッドと呼ばれる。バグを避けるためにも好んで使われる

//破壊的なshiftを使わずに先頭を削除するには
const arr = [1,2,3]
//bad
arr.shift();
//good
const newArr = arr.slice(1);
console.log(arr); // [1,2,3]
console.log(newArr); // [2,3]

//破壊的なpushを使わずに配列末尾に追加
const arr = [1,2,3]
//bad
arr.push(1);
//good
const newArr = [...arr, 1];

//破壊的なpopを使わずに配列末尾を削除するには
const arr = [1,2,3]
//bad
arr.pop();
//good
const newArr = arr.slice(0, -1); //-1は最後の要素までという意味

//sort,reverseのいい使い方（spread)
const num1 = [2,1,3,4];
[...num1].sort(); //[1,2,3,4]
const num2 = [1,2,3,4];
[...num2].reverse(); //[4,3,2,1]

//Copy object
const ohj1 = {name: "Emma", univ: "MIT"}
const clone = { ...obj1, univ: "Stanford"}
console.log(clone); // {name: "Emma", univ: "Stanford"}

//Deep copy
//shallow copyは値の予測が難しくなるため使わないほうがいい
const obj = {
  nest: {name: "Charlie"},
};
const clone = {
  ...obj,
  nest: { ...obj.nest},
};

//forEach（コールバックメソッド）
const animals = ["dog","cat","snake"];
animals.forEach((value, index) => {
  console.log(value, index);
})
//output
//dog,0
//cat,1
//snake,2

//map 配列の反復メソッド
//forEachと違って返り値がある（非破壊的）
const animals = ["dog","cat","snake"];
const newAnimals = animals.map((value, index) => {
  console.log(value, index);
  return value;
})
//outputは同じ

//mapで配列要素を加工
const animals = ["dog","cat","snake"];
const newAnimals = animals.map((value, index) => {
  console.log(value, index);
  return `${value}★`;
})
//output
//dog★
//cat★
//snake★

//map & object
const animals = [{pet:"dog"},{pet:"cat"},{pet:"snake"}];
const newAnimals = animals.map((value) => value)
//add property
const newAnimals2 = animals.map((value) => {
  return {...value, double: value.pet + value.pet};
})


