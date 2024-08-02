function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return -1
  } else {
    let temp1 = 0;
    let temp2 = 0;

    for (let i = 0; i < arr1.length; i++) {
      temp1 += arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
      temp2 += arr2[i];
    }

    if (temp1 < temp2) {
      return -1;
    } else if (temp1 > temp2) {
      return 1;
    } else {
      return 0;
    }
  }
}

const arr1 = [49, 13, 13];
const arr2 = [70, 11, 2];
//console.log(solution(arr1, arr2))
console.log(solution([1, 2, 3], [4, 5, 6])); // Expected output: -1
console.log(solution([10, 20, 30], [5, 25, 30])); // Expected output: 1
console.log(solution([1, 1, 1], [1, 1, 1])); // Expected output: 0
console.log(solution([1, 2], [1, 2, 3])); // Expected output: -1
console.log(solution([1, 2, 3], [1, 2])); // Expected output: -1

function reduceSolution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return -1;
  }

  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (sum1 < sum2) {
    return -1;
  } else if (sum1 > sum2) {
    return 1;
  } else {
    return 0;
  }
}
