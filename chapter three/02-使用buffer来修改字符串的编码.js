let user = 'hello';
let pass = '123456';
let authstring = user + ':'+ pass;
let buf = Buffer.from(authstring);
let encoded = buf.toString('base64');
console.log(encoded);  //aGVsbG86MTIzNDU2



