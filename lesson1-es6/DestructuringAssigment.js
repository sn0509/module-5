//Sao chép giá trị để tạo ra biếng mới//
//Cú pháp: //
//Đối với mảng sử dụng let[các biến]//
//Đối với mảng sử dụng let{các thuộc tính}//

let a = [1,2];
let [b,c] = a;
console.log(a);
console.log(b);
console.log(c);

let obja = {id : 1, name : "Tý"};
let {id, name} = obja;
console.log(obja);
console.log(id);
console.log(name);