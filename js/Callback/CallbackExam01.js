function getData(callback) {
  setTimeout(function () {
    console.log('Data')
    callback('데이터 요청 성공');
  }, 1000);
}

getData((data) => {
  console.log(data);
});