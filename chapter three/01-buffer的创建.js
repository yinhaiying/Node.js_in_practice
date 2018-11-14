
//接收数组
let arr = [1,2,3]
let buf1 = Buffer.from(arr);
console.log(buf1);  //<Buffer 01 02 03>

//接收字符串
let str = 'hello';
let buf2 = Buffer.from(str);
console.log(buf2);// <Buffer 68 65 6c 6c 6f>


let buf3 = Buffer.alloc(10);
console.log(buf3);//<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf3.length);// 10


//buffer转化为其他编码格式
let str2 = 'helloworld';
let buf4 = Buffer.from(str2);
console.log(buf4.toString());// helloworld
console.log(buf4.toString('base64'));//aGVsbG93b3JsZA==
console.log(buf4.toString('hex'));//68656c6c6f776f726c64

