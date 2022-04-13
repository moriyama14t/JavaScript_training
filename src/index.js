/**
 * const let等の変数宣言
 *
 */

//letについて
let val2 = "let変数";
console.log(val2);

//letは上書き可能
val2 = "let上書き可能";
console.log(val2);

// const

const val3 = "const変数";
console.log(val3);

//const変数上書き不可;
//val3 = "const変数上書き不可";
console.log(val3);

//　const変数再宣言不可
// const val3 = "const変数上書き不可";
console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "ジャケ",
  age: 28
};
console.log(val4);
val4.name = "JAKE";
val4.address = "HIROSHIMA";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";
val5.push("monkey");
val5[4] = "66666";

//letは再宣言不可能
// let val2 = "let変数を再宣言";
console.log(val2);

// varについて
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数上書き可能";
console.log(val1);

// var変数は再宣言可能
var val1 = "vars祭宣言しました";
console.log(val1);

/**
 * テンプレート文字列
 */

const name = "ジャケえ";
const age = 28;
//『私の名前はジャケえです。年齢は28歳です』

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です";
console.log(message1);

//テンプレート文字列を使用した方法
const message2 = `私の名前は${name}です。年齢は${age}歳です`;
console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
function func1(str) {
  return str;
}
// //違う書き方
// const func1 = function(str){
//   return str;
// }
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};

//return省略可能
//const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name4: "ジャケえ",
  age4: 28,
  address: "愛知"
};

const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message3);

//オブジェクトの中身を取り出す
const { name4, age4 } = myProfile;
const message4 = `私の名前は${name4}です。年齢は${age4}歳です`;
console.log(message3);

const myProfile2 = ["ジャケえ2", 282, "愛知2"];
const message5 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です`;

console.log(message5);

const [name2, age2] = myProfile2;
const message6 = `私の名前は${name2}です。年齢は${age2}歳です`;

console.log(message6);

/**
 * デフォルト値,引数
 */

//nameの後に＝でデフォルト設定
const sayHello = (name = "山盛") => console.log(`こんにちわ${name}`);
sayHello("ジャケえ");
sayHello();

/**
 * スプレッド構文　...
 */

//配列の展開
const arr1 = [1, 2, 3];
console.log(arr1);
//↓配列の中身を順番に出力する
console.log(...arr1);

const summuryFunc = (num1, num2) => console.log(num1 + num2);

summuryFunc(arr1[0], arr1[1]);
//↓配列の中身を順番に処理する
summuryFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(...arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(...arr6);
const arr7 = [...arr4, ...arr5];
console.log(...arr7);

/**
 * mapやfilterを使った処理
 */

const nameArr = ["田中", "山田", "山盛"];

for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

//2つ目の引数には０から数字が入ってくる
const nameArr2 = nameArr.map((name, index) => {
  console.log(index);
  return name;
});
console.log(nameArr2);

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr);

/**
 * 三項演算子
 */

//ある条件？　条件がtrueの時:ある条件がfalseの時
const val9 = 1 < 0 ? "trueです" : "falseです";

//論理演算子
// 「||」は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額が未設定です";
console.log(fee);

// 「＆＆」は左側がtrueなら右側を返す
const num7 = null;
const fee7 = num7 || "金額が未設定です";
console.log(fee7);
