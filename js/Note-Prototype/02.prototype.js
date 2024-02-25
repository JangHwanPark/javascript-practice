// constructor.js의 BankAccount 프로토타입 변경
function BankAccount(accountNumber, owner, balance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

// 입금 메서드를 프로토타입에 추가
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} 입금. 새로운 밸런스는 ${this.balance}원.`);
    }
};

// 출금 메서드를 프로토타입에 추가
BankAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} 출금. 잔액은 ${this.balance}원.`);
    } else {
        console.log("금액이 부족합니다.");
    }
};

// constructor.js의 ShoppingCart 프로토타입 변경
function ShoppingCart() {
    this.products = [];
}

// 상품 추가 메서드를 프로토타입에 추가
ShoppingCart.prototype.addProduct = function(product) {
    this.products.push(product);
    console.log(`${product.name} 상품을 장바구니에 추가했습니다.`);
};

// 총 가격 계산 메서드를 프로토타입에 추가
ShoppingCart.prototype.getTotal = function() {
    return this.products.reduce((total, product) => total + product.price, 0);
};