class Person {
    constructor(firstName, lastName, salary) {
        this.f = firstName;
        this.last = lastName;
        this.sal = salary;
    }

    writeInfo() {
        console.log(this.f, this.last, this.sal)
    }
}

class Student extends Person {
    constructor(first, last, sal) {
        super(first, last, sal)
    }

    write() {
        super.writeInfo()
    }

}

class Engineer extends Person {
    constructor(z, last, sal) {
        super(z, last, sal)
    }

    write() {
        super.writeInfo()
    }
}

const student = new Student("Bilal", "Fırtına", 1000);
student.write();


const bilal = new Engineer("Burak", "Fırtına", 15000);
bilal.write();