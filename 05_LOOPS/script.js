//----------loops-----------------
// Types - for, while, do-while, foreach, forin

// for - know starting -> know ending -> how to go
for (let i = 1; i < 101; i++) {
//   console.log(i);
}

// while - know starting -> don't know ending(when to stop know) -> how to go
let j = 0;
while (j <= 5) {
//   console.log(j);
  j++;
}

// do-while
let k = 1;
do {
    // console.log(k);
    k++; 
}while(k<5);

// berak 
for(let count = 1; count<20;count++){
    // console.log(count);
    if(count === 8){
        break;
    }
}
//continue 
for(let count = 1; count<20;count++){
    if(count === 5){
        continue;
    }
    console.log(count); // 5 not print
}