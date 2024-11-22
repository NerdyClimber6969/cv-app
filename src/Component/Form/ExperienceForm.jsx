import { useState } from "react";
import Input from "./Input.jsx";

function ExperienceForm({item, updatePreview, onSave, onClose}) {
    const [experienceData, setExperienceData] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newExperienceData = {...experienceData, [name]: value};
        setExperienceData(newExperienceData);
        updatePreview(newExperienceData);
        return;
    };

    return (
        <form
            className="experiencesForm"
        >
            <Input 
                type="text"
                name="company"
                value={experienceData.company}
                labelText="Company"
                placeholder="e.g. ABC Company Ltd."
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="position"
                value={experienceData.position}
                labelText="Position"
                placeholder="Junior Engineer"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    value={experienceData.startDate}
                    labelText="Start Date"
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleFormUpdate(e)}
                />
                <Input
                    type="text"
                    name="endDate"
                    value={experienceData.endDate}
                    labelText="End Date"
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleFormUpdate(e)}
                />
            </div>
            <Input
                type="textarea"
                name="jobDescription"
                value={experienceData.jobDescription}
                labelText="Job Description"
                placeholder="Enter your job duties"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="buttonContainer">
                <button type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default ExperienceForm;