// Abstract class: A class that cannot be directly instantiated and is meant to be used as a base class for other classes.
// kind of like a partial blueprint for other classes. It can contain abstract methods that must be implemented by derived classes.

// base class
class Payment {
    constructor(protected amount: number, protected account: number) {}
    isPaymentValid(amount:number){
        return this.amount > 0;
    }
}

class CreditCardPayment extends Payment {
    constructor(amount: number, account: number, private cardNumber: string) {
        super(amount, account);
    }
}

