import { PersonalInfo, Education, Experience } from "./ResumeItemObj";

const examplePersonalInfo = new PersonalInfo(
    "Peter", 
    "Chan", 
    "12345678", 
    "peterchan@gmail.com", 
    "Hong Kong"
);

const exampleEducation = new Education(
    "University of Hong Kong", 
    "Bachelor of Science", 
    "11/2020", 
    "11/2024", 
    "Hong Kong"
);
const exampleExperience = new Experience(
    "ABC Company Ltd.", 
    "Junior Engineer", 
    "11/2020", 
    "11/2024", 
    "ABC", 
    "Hong Kong"
);

const exampleItems =  {
    personalInfo: [examplePersonalInfo],
    education: [exampleEducation],
    experience: [exampleExperience],
};


export default exampleItems