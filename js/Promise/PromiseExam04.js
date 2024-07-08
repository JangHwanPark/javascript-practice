function getPromiseData() {
  const promiseFulfilled = new Promise((resolve, reject) => {
    setTimeout(() => {
      const 결과물 = {name: "name"};
      // 결과물이 있다면 resolve, 없다면 reject
      if (결과물) {
        console.log("네트워크 요청 성공")
        resolve(결과물)
      } else {
        console.log("네트워크 연결 실패")
        reject(결과물)
      }
    })
  })

  return promiseFulfilled;
}

// 프로미스 체인 (promise chaining)
// then 을 계속 연결해서 쓰는것
// 프로미스 체이닝을 사용하면 여러개의 비동기함수를 순차적으로 수행해야 할 때
// 코드를 깔끔하게 작성할 수 있음
getPromiseData()
  .then((결과물) => {
    console.log("결과물: " + JSON.stringify(결과물))
    // 리턴해줘야함
    return 결과물;
  })
  .then((리턴한결과물) => {
    console.log("리턴한결과물: " + JSON.stringify(리턴한결과물))
    return 리턴한결과물
  })
  .then((결과물) => getPromiseData())
  .then((결과물) => {
    console.log("결과물 :" + JSON.stringify(결과물))
    return '새롭게 Resolve 된 결과물'
  })
  .then(console.log)