const User = require('./User')

class FreeUser extends User {
    constructor (name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}
}
module.exports = FreeUser

//Klassen FreeUser nedarver parent klassen, Users attributter, dvs. navn, alder, lokation.