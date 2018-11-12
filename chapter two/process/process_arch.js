const arch = process.arch;
console.log(arch);  //x64
const platform = process.platform;
console.log(platform);  //win32
switch(arch){
  case 'x64':
    console.log('运行在64位电脑上');
    break;
  case 'ia32':
    console.log('运行在32位电脑上');
    break;
  default:
    throw new Error('Unsupported process.arch'+ arch);
}
