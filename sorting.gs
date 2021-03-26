/**
 * Arrayのsortは破壊的なので注意！
 */
function sorting() {
  let rows = [
    {name: "item pa", q: 100, price: 2980},
    {name: "item ab", q: 1100, price: 980},
    {name: "item xc", q: 100, price: 12980},
    {name: "item 1d", q: 5, price: 99980},
    {name: "item *e", q: 5, price: 6980}
  ];

  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  console.log("ASC q");
  console.log(rows.sort((a, b) => a.q - b.q));
  console.log("DESC q");
  console.log(rows.sort((a, b) => b.q - a.q));
  console.log("ASC q,price");
  console.log(rows.sort((a, b) => a.q - b.q || a.price - b.price));
  console.log("DESC q,price");
  console.log(rows.sort((a, b) => b.q - a.q || b.price - a.price));
}
