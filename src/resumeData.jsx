const resumeData = {
    personalDetails: [
        {   
            id: 0,
            firstName: "John",
            lastName: "Wick",
            phoneNumber: "12345678",
            email: "johnwick@gmail.com",
            displayName: `John Wick`,
        },
    ],

    educations: [
        {   
            id: 0,
            school: "University of Hong Kong",
            degree: "e.g. Bachelor of Science",
            startDate: "11/2020",
            endDate: "11/2024",
            displayName: "University of Hong Kong",
        },
    ],

    experiences: [
        {   
            id: 0,
            company: "ABC Company Ltd.",
            position: "Junior Engineer",
            startDate: "11/2020",
            endDate: "11/2024",
            jobDescription: "ABC",
            displayName: "ABC Company Ltd.",
        },
    ],
};

const emptyItem = {
    personalDetails: () => {
        return {
            id: crypto.randomUUID(),
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            displayName: "",
        }
    },
    educations: () => {
        return {
            id: crypto.randomUUID(),
            school: "a",
            degree: "b",
            startDate: "c",
            endDate: "d",
            displayName: "e",
        }
    },
    experiences: () => {
        return {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            jobDescription: "",
            displayName: "",
        }
    },
}; 

export { resumeData, emptyItem };