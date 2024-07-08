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

// 비동기함수의 의미있는 사용
// 비동기 작업이 성공적으로 완료되었다면 그에따른 처리 필요
// 실패했다면 적절한 오류를 출력해야한다.
// 프로미스 객체를 사용하여 간단히 처리할 수 있다.
// then(), catch(), finally()

// then 은 콜백함수를 인자로 받는다.
// 비동기 작업이 완료될때까지 기다렸다가 프로미스가 fulfilled 상태로 바뀌면
// then 내부에 전달해준 콜백함수를 호출하고 콜백함수는 매개변수를 전달받는데
// 매개변수는 프로미스의 결과물을 담고있다. (resolve 함수에 전달해준 값)
getPromiseData()
  // 비동기 작업 성공시 then 함수의 콜백함수가 실행된다.
  .then((프로미스의Resolve) => {
    console.log("완료" + JSON.stringify(프로미스의Resolve))
    // catch 인자로는 에러를 받는다.
    // 비동기 작업 실패시 catch 절로 이동해서 인자로 받은 에러를 출력한다.
  })
  .catch((에러) => {
    console.log(에러)
  })
  // 비동기 성공시 : then -> finally
  // 비동기 실패시 : catch -> finally
  .finally(() => {
    console.log("얘는 성공 실패 상관없이 무조건 실행됨(마무리 작업)")
  })