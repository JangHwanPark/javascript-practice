/**
 * Car 생성자 함수는 차량에 대한 정보를 나타내는 객체를 생성.
 * @constructor
 * @param {string} type - 차량의 유형 (예: 스포츠카).
 * @param {string} brand - 차량의 브랜드 (예: benz).
 * @param {string} model - 차량의 모델명 (예: AMG GT).
 * @param {string} displacement - 차량의 배기량 (예: "2,999~3,982cc").
 * @param {string} price - 차량의 가격 범위 (예: "1.556억원 ~ 2,474억원").
 */
function Car(type, brand, model, displacement, price) {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.price = price;
}

/**
 * BankAccount 생성자 함수는 은행 계좌 정보를 관리하는 객체를 생성.
 * @constructor
 * @param {string} accountNumber - 계좌 번호.
 * @param {string} owner - 계좌 소유자 이름.
 * @param {number} balance - 계좌의 초기 잔액.
 */
function BankAccount(accountNumber, owner, balance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;

    /**
     * 지정된 금액을 계좌에 입금합니다.
     * @param {number} amount - 입금할 금액.
     */
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} 입금. 새로운 밸런스는 ${this.balance} "."`)
        }
    }

    /**
     * 지정된 금액을 계좌에서 출금합니다.
     * @param {number} amount - 출금할 금액.
     */
    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} 출금. 잔액은 ${this.balance} "."`);
        } else {
            console.log("금액이 부족합니다.");
        }
    }
}

/**
 * ShoppingCart 생성자 함수는 쇼핑 카트 정보를 관리하는 객체를 생성합니다.
 * @constructor
 */
function ShoppingCart() {
    this.products = [];

    /**
     * 쇼핑 카트에 상품을 추가합니다.
     * @param {Object} product - 상품 객체. 상품 객체는 {name: string, price: number} 형태입니다.
     */
    this.addProduct = function(product) {
        this.products.push(product);
        console.log(`${product.name} 상품을 장바구니에 추가했습니다.`);
    }

    /**
     * 쇼핑 카트 내 상품들의 총 가격을 계산합니다.
     * @return {number} 쇼핑 카트 내 상품들의 총 가격.
     */
    this.getTotal = function() {
        return this.products.reduce((total, product) => total + product.price, 0)
    }
}

/**
 * Car 인스턴스 생성
 */
const benz = new Car("스포츠카", "benz", "AMG GT", "2,999~3,982cc", "1.556억원 ~ 2,474억원");
console.log(benz);

/**
 * BankAccount 인스턴스 생성
 */
const myAccount = new BankAccount("123456789", "John Doe", 10000);

// 입금
myAccount.deposit(5000);
console.log(`입금 후 잔액: ${myAccount.balance}원`);

// 출금
myAccount.withdraw(3000);
console.log(`출금 후 잔액: ${myAccount.balance}원`);

// 부족한 금액 출금 시도
myAccount.withdraw(15000);

/**
 * ShoppingCart 인스턴스 생성
 */
const myCart = new ShoppingCart();

// 상품 추가
myCart.addProduct({name: "노트북", price: 1000000});
myCart.addProduct({name: "스마트폰", price: 800000});

// 총 가격 계산
console.log(`쇼핑 카트 내 상품들의 총 가격: ${myCart.getTotal()}원`);