let commandLineArgs = process.argv.splice(2)
let times = commandLineArgs.map(x => x*1000) 
console.log(times)
for (time of times){
  if (isNaN(time)|| time < 0 ) {

  } else {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, time
  )}
};