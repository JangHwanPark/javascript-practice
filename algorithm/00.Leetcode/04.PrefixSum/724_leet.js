// Find Privot Index
function pivotIndex(nums) {
    /* totalArraySum : 전체 배열의 합을 계산
     * sumLeft : 왼쪽 합을 0으로 초기화 */
    let totalArraySum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;

    /* 배열의 길이만큼 순회하며 연산
     * 1. rightSum : 오른쪽 합은 전체 합에서 왼쪽 합과 현재 요소를 뺀 값
     * 2. 피벗 인덱스를 찾은 경우 해당 인덱스 반환
     * 3. 왼쪽 합 업데이트 */
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalArraySum - leftSum - nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }

    // 피벗 인덱스가 없다면 -1반환
    return -1;
}

// 똑같은 PrefixSum (41ms)
function pivotIndexForEach(nums) {
    /* leftSum : 왼쪽 합을 0으로 초기화
     * rightSum : 오른쪽 합을 0으로 초기화 */
    let leftSum = 0;
    let rightSum = 0;

    /* 전체 배열의 합을 계산 : reduce대신 forEach를 사용
     * nums배열을 순회하며 rightSum에 요소의 값을 더한다. */
    nums.forEach(currentValue => rightSum += currentValue);
    console.log(rightSum)
    /* 배열을 순회하며 피벗 인덱스를 찾는다.
     * 1. rightSum에서 현재 요소의 값을 빼서 오른쪽 부분의 합을 업데이트
     * 2. 피벗 인덱스를 찾으면 해당 인덱스를 반환
     * 3. 왼쪽 합 업데이트 */
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }

    // 피벗 인덱스가 없다면 -1반환
    return -1;
}

let nums = [1,7,3,6,5,6];
console.log('pivotIndex : ', pivotIndex(nums));
console.log('pivotIndexForEach : ', pivotIndexForEach(nums));