// Reverse Words in a String

// 빡구현
function reverseWords(s) {
    /* words : 단어들을 저장할 배열
     * word : 현재 단어를 저장할 변수 */
    let words = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (word.length > 0) {
                /* 1. 단어가 있다면 words 배열에 추가
                 * 2. 단어 변수를 초기화 */
                words.push(word);
                word = '';
            }
        } else {
            // 현재 문자를 단어에 추가
            word += s[i];
        }
    }

    if (word.length > 0) {
        // 마지막 단어 추가
        words.push(word);
    }

    // words 배열을 거꾸로 조합하여 결과 문자열 생성
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i > 0) {
            // 단어사이에 공백 추가
            result += ' ';
        }
    }

    return result;
}

// 내장함수 사용
function reverseWordsBuiltIn(s) {
    /* 1. 문자열을 공백(' ')을 기준으로 나누어 배열로 변환한다.
     *    이 과정에서 연속된 공백은 빈 문자열('') 요소로 배열에 포함될 수 있다.
     * 2. filter 함수를 사용하여 배열에서 빈 문자열('')이 아닌 요소만 선택한다.
     *    이는 입력 문자열에 여러 공백이 연속으로 있는 경우를 처리하기 위함이다.
     * 3. reverse 함수로 배열의 요소 순서를 거꾸로 뒤집는다. 이로써 단어의 순서가 역순이 된다.
     * 4. join(' ') 함수를 사용하여 배열의 모든 요소를 공백 한 칸을 기준으로 합쳐 하나의 문자열로 변환한다.
     *    결과적으로, 단어들의 순서는 역순이 되며, 단어 사이에는 하나의 공백만 존재하게 된다. */
    return s.split(' ').filter(word => word !== '').reverse().join(' ');
}

// 투포인터 사용
function reverseWordsTwoPointer(s) {
    /* words : 문자열 앞뒤 공백 제거 후 공백을 기준으로 단어 분리
     * left : 포인터 초기화 (0번째 인덱스를 가리킴)
     * right : 포인터 초기화 (배열의 마지막 인덱스를 가리킴) */
    const words = s.trim().split(/\s+/);
    let left = 0, right = words.length - 1;

    while (left < right) {
        // 두개의 포인터가 가리키는 단어 교환
        let temp = words[left];
        words[left] = words[right];
        words[right] = temp;

        // 포인터 이동
        left++;
        right--;
    }

    // 뒤집힌 단어(배열)을 문자열로 변환하여 반환
    return words.join(' ');
}

let s = "the sky is blue"; // "blue is sky the"
let s2 = "  hello world  " // "world hello"

// 빡구현 실행
console.log('reverseWords(s) : ', reverseWords(s));
console.log('reverseWords(s2) : ', reverseWords(s2));
// 내장함수 실행
console.log('reverseWordsBuiltIn(s) : ', reverseWordsBuiltIn(s));
console.log('reverseWordsBuiltIn(s2) : ', reverseWordsBuiltIn(s2));
// 투포인터 실행
console.log('reverseWordsTwoPointer(s2) : ', reverseWordsTwoPointer(s));
console.log('reverseWordsTwoPointer(s2) : ', reverseWordsTwoPointer(s2));