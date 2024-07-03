function enviromentOuter() {
  let a = 10; // 환경 레코드에 저장됨
  let aa = 20;

  function enviromentInner() {
    let b = 20; // 환경 레코드에 저장됨
    console.log(a + aa); // 외부 환경 참조
  }

  enviromentInner();
}

enviromentOuter();