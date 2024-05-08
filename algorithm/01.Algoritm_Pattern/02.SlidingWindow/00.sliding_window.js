function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) temp += arr[i + j];
        if (temp > max) max = temp;
    }
    return max;
}

function maxSubarraySumSlidingWindow(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) maxSum += arr[i];

    tempSum = maxSum;

    for (let i = 0; i < arr.length - num + 1; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

function maxSum(arr, k) {
    let n = arr.length;
    if (n < k) return null; // 배열의 크기가 k보다 작으면 null 반환

    // 초기 윈도우의 합을 계산
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    // 슬라이딩 윈도우를 이용해 나머지 배열 탐색
    let windowSum = maxSum;
    for (let i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k]; // 새 요소 추가하고, 가장 왼쪽 요소 제거
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// 예제 실행
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(maxSum(arr, k)); // 연속된 3개 요소의 최대 합 출력