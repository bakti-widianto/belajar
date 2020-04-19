//membuat indexprime
// function indexPrime(param1) {
//   var index = 0;
//   var count = 2;
//   while (index < param1) {
//     if (Prime(count) == true) {
//       index++

//     }else if (Prime(count) == false){

// }
//     count++
// console.log(count)
//   }
//   return count-1
// }

// //console.log(10)

// function Prime(param1) {
//   for (i = 2; i < param1; i++) {
//     if (param1 % i === 0) {

//       return false
//     }
//   }
//   return true
// }

// console.log(indexPrime(4)); //result => 7
// console.log(indexPrime(500)); //result => 3571
// console.log(indexPrime(37786)); //result => 450881



function indexPrime(param1) {
  let index = 0;
  let count = 2;

  while (index < param1) {
    let prime = true;
    for (i = 2; i < count; i++) {
      if (count % i === 0) {

        prime = false;
      }
    }
    if (prime == true) {
      index++
    }

    count++
  }
  return count - 1
}

console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result => 450881


