class CreditCard {
    constructor(card_name, card_number, card_holder_name, expiry_date, cvv, issuing_bank, max_credit_limit, transactions, status) {
        this.card_name = card_name;
        this.card_number = card_number;
        this.card_holder_name = card_holder_name;
        this.expiry_date = expiry_date;
        this.cvv = cvv;
        this.issuing_bank = issuing_bank;
        this.max_credit_limit = max_credit_limit;
        this.transactions = transactions;
        this.status = status;
    }
}

let card = new CreditCard(
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
)

let card2 = new CreditCard(
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
)
console.log(card)
console.log(card2)