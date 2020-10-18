const User = require('./User')

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

/*Underklassen PaymentUser nedarver Users attributter, men i forlængelse af disse har denne også 
kreditkortdetaljer, da brugeren betaler for fordele, som endnu ikke er programmeret ind her.
Det kunne fx være funktioner, der øger PaymentUsers mængde af daglige swipes og muligheden for at superlike.
*/