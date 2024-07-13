const login = () => {
  setTimeout(() => {
    console.log('login');
    return 'login success';
  }, 1000);
}

const getData = (callback) => {
  setTimeout(() => {
    console.log('Data');
    callback('data request success');
  }, 1000);


const makePayment = (callback) => {
  setTimeout(() => {
    console.log('Payment');
    callback('payment success');
  }, 1000);
}

login('login success', (data) => {
  console.log(data);
  getData('data request success', (data) => {
    console.log(data);
    makePayment('payment success', (data) => {
      console.log(data);
    });
  });
})};