var  start = 100;

for (i=2; i<= start; i++){
  if (i%2===1 && (i%3!==0 || i===3) && (i%5!==0 || i === 5)&& (i%7!==0 || i === 7)){
    console.log(i);
  }
  else if (i%2 === 0 && i <= 2 && i >= 2){
    console.log(i);
  }
}