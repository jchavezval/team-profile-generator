const Employee = require('./Employee')

// manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
    getOfficeNumber(){return this.officeNumber}
    getTitle(){return this.title}
}

module.exports = Manager