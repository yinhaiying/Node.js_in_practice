
//从命令行中读取数据
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {
  //输出
  process.stdout.write(text.toUpperCase());
});


