/*
  以下コマンド実行でコンパイル
  $ npx tsc
  以下コマンドで対象ファイルを実行
  $ node 対象ファイルのパス 
*/

import { LargeNumberLike } from "crypto";

// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('数値を入力してください:', (line) => {
//   // 文字列が入力されるとここが実行される
//   const num = Number(line);
//   console.log(num + 1000);
//   rl.close();
// })

// 2022.06.28
// rl.question('名前を入力してください:', (name) => {
//   // x && y xの真偽値がfalseの場合xを返し、trueならyを返す。
//   // x || y xの真偽値がtrueの場合xを返し、falseならyを返す。
//   // これらは短絡評価の特徴がある。
//   const displayName = name || "名無し";
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// })

// xがnull or undefined のときのみyを返し、それ以外の時はxを返す
// コンパイル後、jsファイルの実行コマンドの前に環境変数を宣言して渡す

// const secret = process.env.SECRET ?? "default";
// console.log(`secretは${secret}です`);

// switch
// rl.question('コマンドを入力してください:', (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは。");
//       break;
//     case "cat":
//       console.log("あなたは猫派ですか？");
//       console.log("私は犬派です。");
//       break;
//     default:
//       console.log(`コマンド「${name}」を認識できませんでした。`);
//   }
//   rl.close();
// })

// FizzBuzz
// for (let i=1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 ===0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const messages = {
//   good: "0以上の数値が入力されました！",
//   bad: "負の数値を入力しないでください！"
// }

// プロパティ名を動的に設定
// rl.question('数値を入力してください:', (line) => {
//   const num =Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close();
// })

// スプレッド構文 ※プロパティのコピー
// const obj1 = {
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   foo: 123,
//   ...obj1
// };

// オブジェクトの型
// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "Hello, world!"
// };

// type文 type 型名 = 型;
// type FooBarObj = {
//   foo: number;
//   bar: string;
// }

// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello, world!"
// }

// interface宣言 interface 型名 オブジェクト型
// Declaration Mergingを行う場合を除いて、type文で代用可能
// interface FooBarObj {
//   foo: number;
//   bar: string;
// }

// インデックスシグネチャ [キー名: string]: 型;
// プロパティ名が動的に決まる場合に用いる。型安全性が破壊される恐れがある。
// type PriceData = {
//   [key: string]: number;
// }
// const data: PriceData = {
//   apple: 220,
//   coffe: 120,
//   bento: 500
// };

// オプショナル(あってもなくてもいい)なプロパティ宣言 プロパティ名の後ろに？を付加する
// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// }

// 読み取り専用プロパティ 再代入をコンパイルエラーとする
// type MyObj2 = {
//   readonly foo: number;
// }

// typeof 型推論の結果を型として抽出・再利用したい場合に効果的
// const num: number = 0;
// type T = typeof num; // typeof 変数名
// const foo: T = 123;

// 部分型関係 -> 構造的部分型 プロパティの包含関係により発生する
// foo, bar以外のプロパティを持っていても、いなくてもいい
// type FooBar = {
//   foo: string;
//   bar: number;
// }
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// }

// const obj: FooBarBaz = {
//   foo: "hi",
//   bar: 1,
//   baz: false
// };
// const obj2:FooBar = obj;

// 型引数を持つ型 -> ジェネリック型
// type User<T> = {
//   name: string;
//   child: T;
// }

// 同じ型の　mother, fatherプロパティを持ち、さらにchildプロパティを持つ
// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// const obj: Family<number, string> = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// };

// 部分型関係による型引数の制約
// type HasName = {
//   name: string;
// };

// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }

// オプショナルな型引数
// 省略可能な型引数。この型が省略された場合のデフォルト値として扱われる。
// オプショナルな型引数のあとにオプションでない型引数を宣言することはできない。後ろにまとめる必要あり。
// extendsとオプショナルな型開発は両方同時に使うこともできる。
// type Animal = {
//   name: string;
// }

// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child
// }


// 配列 型[]
// const arr: number[] = [1, 10, 100];

// 配列 Array<T>
// const arr2: Array<{
//   name: string;
// }> = [
//   {name: "山田さん"},
//   {name: "田中さん"},
//   {name: "鈴木さん"}
// ];


// readonly配列型 内容を書き換えられない配列型
// readonly T[] or ReadonlyArray<T>
// const arr: readonly number[] = [1, 10, 100];


// for of文ループ for (const 変数 of 式)
// const arr = [1, 10, 100];

// for (const elm of arr) {
//   console.log(elm);
// }


// タプル型 要素数が固定された配列型
// 要素数が固定されている代わりに配列のそれぞれの要素に異なる型を与えることができる
// let tuple: [string, number] = ["foo", 0];
// ラベルを付けることもできる。
// type User = [name: string, age: number];


// 分割代入 パターン = 式
// const {foo, bar} = obj; // objのfooプロパティを変数fooに、objのbarプロパティを変数barに代入する

// const foo = obj.foo;
// const bar = obj.bar;

// プロパティ名: 変数名
// const {
//   foo,
//   bar: barVar,
//   "foo bar": fooBar
// } = obj;

// const foo = obj.foo;
// const barVar = obj.bar;
// fooBar = obj["foo bar"];
// ※分割代入で宣言された変数には型注釈がつけられず、型推論によって決められる。

// ネストしたパターン
// プロパティ: パターン
// const nested = {
//   num: 123,
//   obj: {
//     foo: "hello",
//     bar: "world"
//   }
// }
// const {num, obj: {foo}} = nested;
// console.log(num);
// console.log(foo);

// 配列の分割代入
// const arr = [1, 2, 4, 8, 16, 32];
// const [first, second, third] = arr;

// オブジェクトと配列を混ぜたパターン
// const {arr: [foo]} = obj; // obj.arr[0]が変数fooに入っている

// const[{name}] = arr; // arr[0].nameが変数nameに入っている

// 空白を用いて要素をスキップできる
// const arr = [1, 2, 4, 8, 16, 32];
// const[, foo, , bar, , baz] = arr;
// タプル型での例
// const tuple: [string, number] = ["uhyo", 26];
// const [myName, age] = tuple;

// 分割代入のデフォルト値
// 変数にundefinedが入るとき代わりにデフォルト値が入る
// type Obj = {foo?: number};
// const obj1: Obj = {};
// const obj2: Obj = {foo: -1234};
// const {foo = 500} = obj1; // 500
// const {foo: bar = 500} = obj2; // -1234

// ネスとしたパターンのデフォルト値 パターン = 式
// type NestedObj = {
//   obj?: {
//     foo: number
//   }
// };
// const nested1: NestedObj = {
//   obj: {foo: 123}
// };
// const nested2: NestedObj = {};
// const {obj: {foo: foo1} = {foo: 500}} = nested1; // foo1に123が代入される
// const {obj: {foo: foo2} = {foo: 500}} = nested2; // foo2に500が代入される

// restパターン(...変数名) 配列パターンにおいても同様
// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// };
// const {foo, ...restObj} = obj;
// console.log(foo); //123
// console.log(restObj); // 分割代入されたオブジェクトの残りのプロパティを全て持つ新たなオブジェクト


// 組み込みオブジェクト
// Date -> Temporalが主流になるかも。後で調べる。
// 正規表現
// Map, Set
// WeakMap, WeakSet キーとしてオブジェクトしか許容しない


/*
 プリミティブでもプロパティがあるように見えるのは、
 プロパティアクセスのたび、一時的にオブジェクトが作成されているから
*/

// P130 3.8 力試し
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo, 26, 1
John Smith, 17, 0
Mary Sue, 14, 1
`;

// ここから
const arr: string[] = data.split("\n");
console.log(arr);
const users: User[] = [];

for (const elm of arr) {
  if (elm === "") {
    continue;
  }
  const [name, ageString, premiumUserString] = elm.split(",");
  // console.log(typeof(premiumUserString));
  const age = Number(ageString);
  // const premiumUser = premiumUserString === "1";
  const premiumUser = Number(premiumUserString) === 1;

  users.push({name, age, premiumUser});
}
console.log(users);
// ここまで

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}はプレミアムユーザーです。)`);
  } else {
    console.log(`${user.name} (${user.age}はプレミアムユーザーではありません。)`);
  }
}