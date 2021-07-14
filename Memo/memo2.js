//filter
const animals = ["dog","cat","snake"];;
const newAnimals = animals.filter((value,index,array) => {
  console.log(value, index,array);
  return value === "cat";
})
console.log(newAnimals); // ["cat"] （返り値は配列。falseだったら空配列[]）

// filter isEven
function isEven(num){
  return num % 2 === 0;
}
const numbers = [1,2,5,10,20,25,50];
const evens = numbers.filter(isEven);
console.log(evens); //[2,10,20,50]

//filter 文字列検索
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const filterItems = (items, query)=>{
  return items.filter((item)=>item.includes(query));
};
filterItems(fruits, "ap"); //["apple","grapes"]

//filter object　これがよく使われる
const animals = [
  {emoji: "🐼", canFly: false},
  {emoji: "🦉", canFly: true},
  {emoji: "🐯", canFly: false},
  {emoji: "🕊", canFly: true},
];
const birds = animals.filter((animal)=>animal.canFly);
console.log(birds);
// [{emoji: "🦉", canFly: true},{emoji: "🕊", canFly: true}]

//find（配列の反復メソッド）
const animals = [
  {emoji: "🐼", animal: "panda"},
  {emoji: "🦉", animal: "hukurou"},
  {emoji: "🐯", animal: "tiger"},
  {emoji: "🕊", animal: "bird"},
];
const result = animals.find((animal)=>{
  return value.animal === "tiger"; //発見次第反復終了、見つからなければ undefined
});
console.log(result); //{emoji: "🐯", animal: "tiger"},

//その他メソッド
// some: 該当が少なくとも一つあればtrue
// includes(): 特定の要素が配列に含まれてるかをbooleanでチェック。文字列にも使える。
const name = "myprotein";
console.log(name.includes("my")); //true
console.log(name.includes("pro")); //true
console.log(name.includes("MY")); //大文字なので false
console.log(name.toUpperCase().includes("MY")); //true

//join
// 全配列要素を連結した文字列を作成。引数に何も指定しなければ間まで区切られる
const monkeys = ["🙈", "🙉", "🙊"];
console.log(monkeys.join());
// output: "🙈,🙉,🙊"
console.log([1, 2, 3].join("")); //区切りなし
// output: "123"
console.log([1, 2, 3].join(" / "));
// output: "1 / 2 / 3"

//べき乗演算子
console.log(4 ** 3);
console.log(Math.pow(4,3));

//インクリメント演算子
let x = 1;
console.log(x++); // 1
console.log(x); // 2 (+1する前の値を返す)

let y = 1;
console.log(++y); // 2
console.log(y); // 2 (+1した前の値を返す)

//厳密等価演算子(===)
console.log(1 === 1); //true
console.log(1 === "1"); //false 型が違うから

//等価演算子(==)
console.log(1 === 1); //true
console.log(1 === "1"); //true バグになりやすいので使わない

// AND演算子
//左辺がtrueの時は右辺を、falseの時は左辺を返す（短絡評価）
console.log(true && "😏"); // "😏"
console.log(false && "😏"); // false

// Falsyな値たち
// false, null, undefined, 0, NaN, ""

// Immutable: 一度値を作成したらその値事態を変更できない特性のこと
// spread構文などの非破壊メソッドを使ってImmutableに開発することが推奨されている
