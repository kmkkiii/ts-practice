// 以下コマンド実行でコンパイル
// $ npx tsc
// 以下コマンドで対象ファイルを実行
// $ node 対象ファイルのパス 

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('数値を入力してください:', (line) => {
//   // 文字列が入力されるとここが実行される
//   const num = Number(line);
//   console.log(num + 1000);
//   rl.close();
// })

// 2022.06.28
rl.question('名前を入力してください:', (name) => {
  // x && y xの真偽値がfalseの場合xを返し、trueならyを返す。
  // x || y xの真偽値がtrueの場合xを返し、falseならyを返す。
  // これらは短絡評価の特徴がある。
  const displayName = name || "名無し";
  console.log(`こんにちは、${displayName}さん`);
  rl.close();
})

// xがnull or undefined のときのみyを返し、それ以外の時はxを返す
// コンパイル後、jsファイルの実行コマンドの前に環境変数を宣言して渡す

const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);

// switch
rl.question('コマンドを入力してください:', (name) => {
  switch (name) {
    case "greet":
      console.log("こんにちは。");
      break;
    case "cat":
      console.log("あなたは猫派ですか？");
      console.log("私は犬派です。");
      break;
    default:
      console.log(`コマンド「${name}」を認識できませんでした。`);
  }
  rl.close();
})

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

const messages = {
  good: "0以上の数値が入力されました！",
  bad: "負の数値を入力しないでください！"
}

// プロパティ名を動的に設定
rl.question('数値を入力してください:', (line) => {
  const num =Number(line);
  console.log(messages[num >= 0 ? "good" : "bad"]);
  rl.close();
})

// スプレッド構文 ※プロパティのコピー
const obj1 = {
  bar: 456,
  baz: 789
};

const obj2 = {
  foo: 123,
  ...obj1
};

// オブジェクトの型
// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "Hello, world!"
// };

// type文 type 型名 = 型;
type FooBarObj = {
  foo: number;
  bar: string;
}

const obj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
}

// interface宣言 interface 型名 オブジェクト型
// Declaration Mergingを行う場合を除いて、type文で代用可能
// interface FooBarObj {
//   foo: number;
//   bar: string;
// }

// インデックスシグネチャ [キー名: string]: 型;
// プロパティ名が動的に決まる場合に用いる。型安全性が破壊される恐れがある。
type PriceData = {
  [key: string]: number;
}
const data: PriceData = {
  apple: 220,
  coffe: 120,
  bento: 500
};

// オプショナル(あってもなくてもいい)なプロパティ宣言 プロパティ名の後ろに？を付加する
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
}

// 読み取り専用プロパティ 再代入をコンパイルエラーとする
type MyObj2 = {
  readonly foo: number;
}

// typeof 型推論の結果を型として抽出・再利用したい場合に効果的
const num: number = 0;
type T = typeof num; // typeof 変数名
const foo: T = 123;

