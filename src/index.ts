// 以下コマンド実行でコンパイル
// $ npx tsc
// 以下コマンドで対象ファイルを実行
// $ node 対象ファイルのパス 

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


// FizzBuzz
for (let i=1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 ===0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}