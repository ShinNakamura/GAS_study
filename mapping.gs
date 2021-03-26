/**
 * ES2015からJSでも本物のマップが使えるようになった
 */
function mapping() {
  let mbr = new Map();
  mbr.set(1, "John");
  mbr.set(2, "Ken");

  // chain set
  mbr.set(3, "Mary")
     .set(4, "Sally");

  // get
  console.log(mbr.get(1));

  // has
  console.log(mbr.has(2));

  // construction
  let guest = new Map([
    [100, "Eli"],
    [101, "Marco"]
  ]);

  // loop
  for (let [num, name] of guest.entries()) {
    console.log(`guest map has ${num}:${name}`);
  }

  // .entries は省略可能
  for (let [num, name] of mbr) {
    console.log(`mbr map has ${num}:${name}`);
  } 
}
