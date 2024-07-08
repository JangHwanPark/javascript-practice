function getPromiseData() {
  const promiseFulfilled = new Promise((resolve, reject) => {
    setTimeout(() => {
      const 결과물 = {name: name};
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

// 비동기 함수 호출
const promise = getPromiseData();

setTimeout(() => {
  console.log(promise)
}, 2000)