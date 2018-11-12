

function displayHelp(){
  console.log('这里是display函数')
}

function readfile(file){
  if(file){
    console.log('这里是readfile函数');
  }else{
    console.log('你没有传入参数');
    //退出程序时，指定状态码，表示程序没有执行成功
    process.exit(1);
  }


}

const args = {
  '-h':displayHelp,
  '-r':readfile
};
console.log(process.argv);

if(process.argv.length> 0){
  process.argv.forEach(function(arg,index){
    if(index > 1){
      args[arg]();
    }
  })
}
