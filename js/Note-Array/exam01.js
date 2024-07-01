const array = []
for (let i = 1; i <= 1001; i++) array.push(i);

function linearSearch(array) {
  let cnt = 1;
  array.forEach((item) => {
    item === 200 ? console.log(item, cnt) : cnt++;
  })
}


function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1;
  console.log(start + end)
  while (start <= end ) {
    const mid = Math.floor((start + end) / 2);
    // const mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return - 1;
}

console.log(binarySearch(array, 3))