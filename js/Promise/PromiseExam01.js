const promiseExam = new Promise(() => {
  // 비동기 작업의 대표적인 예시인 네트워크 작업을 흉내내기 위한
  // setTimeout 함수 생성
  setTimeout(() => {
    console.log("비동기 작업중")
    const data = {name: 'name'}
    console.log(data)
  }, 1000)
})

const promiseFulfilled = new Promise((resolve, reject) => {
  setTimeout(() => {
    const 결과물 = {name: name};
    console.log("네트워크 요청 성공")
    resolve(결과물)
  })
})

const promiseRejected = new Promise((resolve, reject) => {
  // reject 는 비동기 함수의 실패를 나타내는 함수
  const data = null;
  if (data) {
    console.log("네트워크 연결 성공")
    resolve(data)
  } else {
    console.log("네트워크 연결 실패")
    reject(data)
  }
})

// 비동기 작업 대기
console.log(promiseExam)

// 비동기 작업 성공
setTimeout(() => {
  console.log(promiseFulfilled)
}, 2000)

// 비동기 작업 실패
setTimeout(() => {
  console.log(promiseRejected)
}, 2000)