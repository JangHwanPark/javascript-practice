// 496. Next Greater Element I
const nextGreaterElement = function(nums1, nums2) {
    /**
     * _map - 결과를 저장할 맵(해시 테이블)
     * stack - 빈 스택
     * result - 결과 배열
     */
    const _map = new Map();
    const stack = [];
    const result = [];

    // nums2를 순회하면서 각 요소에 대한 '다음 더 큰 요소' 찾기
    for (let num of nums2) {

        // 현재 요소가 스택의 맨 위 요소보다 크면 '다음 더 큰 요소'를 찾은 것
        while (stack.length > 0 && num > stack[stack.length - 1]) {

            // 스택에서 요소를 꺼내고, 해당 요소에 대한 '다음 더 큰 요소'로 현재 요소를 맵에 저장
            _map.set(stack.pop(), num);
        }

        // 현재 요소를 스택에 삽입
        stack.push(num);
    }

    // 스택에 남은 요소들에 대해 '다음 더 큰 요소'가 없으므로 -1로 설정
    while (stack.length) {
        _map.set(stack.pop(), -1);
    }

    // nums1의 각 요소에 대해 맵에서 '다음 더 큰 요소'를 조회하여 결과 배열에 추가
    for (let num of nums1) {
        result.push(_map.get(num));
    }

    return result;
};

// 최적화
const nextGreaterElementSolution = function(nums1, nums2) {
    /**
     * _map - nums2의 요소에 대한 "다음 더 큰 요소"를 저장
     * result - 결과 초기화
     * indexMap - nums1 요소의 인덱스 매핑
     */
    const _map = new Map();
    /**
     * Array 생성자 사용하여 결과값을 초기화 할때
     * const result = new Array(nums1.length).fill(-1);
     */
    // Array.from 메소드를 사용해 결과값 초기화
    const result = Array.from({length: nums1.length}, () => -1);
    const indexMap = new Map();

    nums1.forEach((num, index) => indexMap.set(num, index));

    const stack = [];
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const top = stack.pop();
            if (indexMap.has(top)) result[indexMap.get(top)] = num;
        }

        if (indexMap.has(num)) stack.push(num);
    }

    return result;
};

/**
 * 입력: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * 출력: [-1,3,-1]
 * - nums2 = [1,3,4,2]에서 4에 밑줄이 그어져 있습니다 . 다음으로 더 큰 요소가 없으므로 답은 -1입니다.
 * - nums2 = [ 1 ,3,4,2]에서 1에 밑줄이 그어져 있습니다. 다음으로 큰 요소는 3입니다.
 * - nums2 = [1,3,4, 2 ]에서 2에 밑줄이 그어져 있습니다. 다음으로 더 큰 요소가 없으므로 답은 -1입니다.
 */
let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2));
console.log(nextGreaterElementSolution(nums1, nums2));

/**
 * 입력: nums1 = [2,4], nums2 = [1,2,3,4]
 *  출력: [3,-1]
 *  설명: nums1의 각 값에 대해 다음으로 큰 요소는 다음과 같습니다.
 * - nums2에서 2에 밑줄이 그어져 있습니다. = [1, 2,3,4 ]. 다음으로 큰 요소는 3입니다.
 * - nums2 = [1,2,3, 4 ]에서 4에 밑줄이 그어져 있습니다. 다음으로 더 큰 요소가 없으므로 답은 -1입니다.
 */
let nums3 = [2,4], nums4 = [1,2,3,4];
//nextGreaterElement(nums3, nums4);