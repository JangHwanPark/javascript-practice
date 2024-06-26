function notTwoPointer(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) return [i, j]
        }
    }
}

function twoPointerSum(arr, target) {
    let i = 0; // 시작 포인터
    let j = arr.length - 1; // 끝 포인터

    while (i < j) {
        let sum = arr[i] + arr[j];

        // 목표값에 도달한 경우, 인덱스 쌍을 반환
        if (sum === target) return [i, j];

        // 합이 목표값보다 작은 경우, 시작 포인터를 오른쪽으로 이동
        else if (sum < target) i++;

        // 합이 목표값보다 큰 경우, 끝 포인터를 왼쪽으로 이동
        else j--;
    }

    // 조건을 만족하는 쌍을 찾지 못한 경우
    return [-1, -1];
}

// 예제 사용
const targetArr = [1, 2, 3, 4, 5];
const target = 9;
console.log('notTwoPointer :', notTwoPointer(targetArr, target)); // 출력: [3, 4]
console.log('twoPointerSum :', twoPointerSum(targetArr, target)); // 출력: [3, 4]