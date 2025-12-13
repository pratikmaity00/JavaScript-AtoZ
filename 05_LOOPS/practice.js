//1. print 1-10
for (let i = 1; i < 11; i++) {
  // console.log(i);
}
// 2. 10-1
for (let i = 10; i > 0; i--) {
  // console.log(i);
}
// 3. even number 1-20
for (let i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    continue;
  }
  // console.log(i);
}
// 4. odd number 1-15
for (let i = 1; i < 16; i++) {
  if (i % 2 == 0) {
    continue;
  }
  // console.log(i);
}
// 5. table of 5
for (let i = 1; i < 11; i++) {
  let table = 5 * i;
  // console.log(`5*${i} = `table);
}
// 6. sum of number 1-100
let sum = 0;
for (let i = 1; i < 101; i++) {
  sum = sum + i;
}
// console.log(sum);

// 7. print 1-50 divisible by 3
for (let i = 1; i < 51; i++) {
  if (i % 3 === 0) {
    // console.log(i);
  }
}

// 8. user input for a number wheather each number from 1 to that is even or odd
let val = 10;
for (let i = 1; i < val; i++) {
  if (i % 2 === 0) {
    // console.log(`${i} is even`);
  } else {
    // console.log(`${i} is odd`);
  }
}

// 9. count how many numbers b/w 1-100 are divisible by both 3 and 5

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i);
  }
}

// 10. stop at first multiple of 7
for (let i = 1; i < 101; i++) {
  // console.log(i);
  if (i % 7 === 0) {
    break;
  }
}

// 11. skip number divisible by 3
for (let i = 1; i < 21; i++) {
  if (i % 3 === 0) {
    continue;
  }
  // console.log(i);
}

// 12. print first 5 odd number only o/p - 1,3,5,7,9
let count = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  if(count === 5) break;
}
