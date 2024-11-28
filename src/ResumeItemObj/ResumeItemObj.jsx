class Item {
    constructor(location) {
        this.id = crypto.randomUUID();
        this.loaction = location;
    };
}

export class PersonalInfo extends Item {
    constructor(firstName="", lastName="", phoneNumber="", email="", location="") {
        super(location);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    };
}

export class Education extends Item {
    constructor(school="", degree="", startDate="", endDate="", location="") {
        super(location);
        this.school = school;
        this.degree = degree;
        this.startDate = startDate;
        this.endDate = endDate;
    };
}

export class Experience extends Item {
    constructor(company="", position="", startDate="", endDate="", duties="", location="") {
        super(location);
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duties = duties;
    };
}

export default {
    "personalInfo": PersonalInfo,
    "education": Education,
    "experience": Experience,
};