let inputs = process.argv.slice(2);

if (inputs.length === 0) {
  process.stdout.write('No numbers have been provided\n');
  return false;
};

inputs.map((x) =>{
  if (parseInt(x) === NaN) {
    process.stdout.write("Non number value has been provided\n");
    process.exit();
  };

  if (parseInt(x) < 0) {
    process.stdout.write("A negative number has been provided\n");
    process.exit();
  };


});


for (let i of process.argv.slice(2)){
  let time = parseInt(i) * 1000;
  setTimeout(()=>{process.stdout.write('\x07');},time)
};