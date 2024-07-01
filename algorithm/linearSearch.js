function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

let arr = [5, 3, 8, 6, 2, 7];
let target = 6;

console.log(linearSearch(arr, target))