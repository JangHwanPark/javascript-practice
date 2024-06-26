// 서울에서 김서방 찾기
function solution(seoul) {
    const ans = seoul.findIndex((seoul) => seoul === 'Kim');
    const result = `김서방은 ${ans}에 있다.`
    return result.toString();
}

let seoul = ["Jane", "Kim", "Hello"];
console.log(solution(seoul))
console.log("1")