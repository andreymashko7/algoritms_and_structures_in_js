const array = [1, 4, 5, 1, 2, 7, 5, 6, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

// console.log(linearSearch(array, 11));
// console.log("🚀 ~ file: linear-alg.js ~ line 7 ~ linearSearch ~ count", count);
