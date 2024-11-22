import Input from "./Input.jsx";
import { useContext } from "react";
import { ExperiencesContext } from "../../Context/Provider.jsx";

function ExperienceForm({onClose, content={}}) {
    const { experiences, setExperiences } = useContext(ExperiencesContext);

    function handleUpdate(id, field, value) {
        setExperiences(experiences.map((experience) => (
            experience.id === id ? {...experience, [field]: value} : experience
        )));

        return;
    };

    return (
        <form
            className="experiencesForm"
        >
            <Input 
                type="text"
                name="company"
                value={content.company}
                labelText="Company"
                placeholder="e.g. ABC Company Ltd."
                onChange={(e) => handleUpdate(content.id, "company", e.target.value)}
            />
            <Input
                type="text"
                name="position"
                value={content.position}
                labelText="Position"
                placeholder="Junior Engineer"
                onChange={(e) => handleUpdate(content.id, "position", e.target.value)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    value={content.startDate}
                    labelText="Start Date"
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleUpdate(content.id, "startDate", e.target.value)}
                />
                <Input
                    type="text"
                    name="endDate"
                    value={content.endDate}
                    labelText="End Date"
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleUpdate(content.id, "endDate", e.target.value)}
                />
            </div>
            <Input
                type="textarea"
                name="jobDescription"
                value={content.jobDescription}
                labelText="Job Description"
                placeholder="Enter your job duties"
                onChange={(e) => handleUpdate(content.id, "jobDescription", e.target.value)}
            />
            <button 
                type="button"
                onClick={onClose}
            >
                Close
            </button>
        </form>
    );
};

export default ExperienceForm;