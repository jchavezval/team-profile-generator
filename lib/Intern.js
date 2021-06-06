const Employee = require('./Employee');

// intern class
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.title = 'Intern';
    }
    getSchool(){return this.school}
    getTitle(){return this.title}
}

module.exports = Intern