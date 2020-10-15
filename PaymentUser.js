class PaymentUser extends User {
    constructor(name, age, location, CardName, CVV, CardNumber, Expire) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.CardName =CardName;
    this.CVV = CVV;
    this.CardNumber = CardNumber;
    this.Expire = Expire;
    }

}

module.exports=PaymentUser