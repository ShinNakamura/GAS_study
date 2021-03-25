/*
単に yield 文を使うだけではジェネレータは作れない。
function キーワードではなく function* キーワードを使う必要がある！
*/

function* iter_n() {
  for (const n of [1,2,3]) {
    yield n;
  }
}

function call_iter_n() {
  for (n of iter_n()) {
    console.log(n);
  }
}
