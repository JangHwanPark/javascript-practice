/**
 * 순열 함수는 배열의 모든 원소를 사용하여 만들 수 있는 모든 가능한 배열(순서가 중요)을 생성.
 * [1, 2, 3]의 모든 순열을 출력\
 */
function permutations(array, currentIndex) {
    if (currentIndex === array.length - 1) {
        console.log(array.join(" "));
        return;
    }

    for (let i = currentIndex; i < array.length; i++) {
        [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
        permutations(array, currentIndex + 1);
        [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
    }
}

const array = [1, 2, 3];
permutations(array, 0);