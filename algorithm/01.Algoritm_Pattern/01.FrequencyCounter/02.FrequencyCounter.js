function validAnagram(arr1, arr2) {
    // arr1과 arr2의 길이가 다르면 false 반환
    if (arr1.length !== arr2.length) return false;

    // 빈도수를 정의할 객체 생성 (counter1, 2)
    let counter1 = {};
    let counter2 = {};

    // 배열1, 2의 길이만큼 for 루프를 돌면서 요소를 각 객체의 키값에 넣고 +1씩 빈도수를 더해준다.
    for (let i = 0; i < arr1.length; i++) counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
    for (let i = 0; i < arr2.length; i++) counter2[arr2[i]] = (counter2[arr2[i]] || 0) + 1;

    // 배열1의 길이만큼 for 루프를 돌면서 배열1의 요소가 배열2의 요소와 같은지 확인
    for (let i = 0; i < arr1.length; i++) {
        if (counter1[arr1[i]] !== counter2[arr1[i]]) return false;
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true