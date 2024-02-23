// Toán tử mở rộng.//
// Giúp mở rộng giá trị của mảng hoặc đối tượng.//
// Cú pháp dùng dấu ... + tên của mảng hoặc object.//
// JSON.parse(object) chuyển từ chuổi sang object.//
// JSON.stringify(obj) chuyển từ obj sang chuổi.//

let a = [1,2];
let b = [...a, 3, 4];
console.log(b);

let obja = {id : 1, name : "Thìn"};
let objb = {...obja, name: "Tý", age: 23};
let objc = {name: "Tý", ...obja,};

console.log(objb);
console.log(objc);
console.log("objc " + JSON.stringify(objc));