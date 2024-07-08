fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => {
    console.log("네트워크 요청중")
    return data
  })
  // json 메소드도 프로미스를 반환함
  .then(data => {
    return data.json()
  })
  .then(data => {
    console.log(data)
    return data;
  })
  .catch(err => {
    console.error(err)
  })
  .finally(() => {
    console.log('마무리 작업?')
  })

function getFetchData() {
  console.log("getFetchData 함수 시작!")
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => {
      console.log("getFetchData 네트워크 요청중")
      return data
    })
    // json 메소드도 프로미스를 반환함
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log(data)
      return data;
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log('getFetchData 마무리 작업?')
    })
}

const promise = getFetchData();
console.log("이건 기본값(Pending): " + JSON.stringify(promise))

setTimeout(() => {
  console.log("이건 아마 결과 받아올듯?")
  console.log(promise)
}, 2000)