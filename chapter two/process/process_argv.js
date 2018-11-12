

function displayHelp(){
  console.log('这里是display函数')
}

function readfile(){
  console.log('这里是readfile函数');

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
