function myFunction() {
  const obj = {x:1, y:"aaa",z:null};
  console.log(JSON.stringify(obj));

  const jstring = `{"x":1, "y":"aaa", "z":null}`;
  const jobj = JSON.parse(jstring);
  x = jobj.x;
  console.log(x);
  y = jobj["y"];
  console.log(y);
}
