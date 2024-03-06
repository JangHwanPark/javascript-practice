/**
 * Built-in Function
 * 프로그래밍에서 제공하는 내장함수 (프로그래밍 언어의 표준 라이브러리의 일부로 재공되고,
 * 개발자가 별도로 정의(만들지 않고)하지 않고 바로 사용할 수 있다.
 */
async function arrayJsonData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json();
}

arrayJsonData()
    .then(jsonData => {
        console.log(jsonData)
    })
    .catch(error => console.error("에러발생!! : ", error));