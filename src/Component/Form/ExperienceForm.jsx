import { useState } from "react";
import Input from "./Input.jsx";

function ExperienceForm({item, updatePreview, onSave, onClose}) {
    const [experience, setExperience] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newExperience = {...experience, [name]: value};
        setExperience(newExperience);
        updatePreview(newExperience);
        return;
    };

    return (
        <form
            className="form experience"
        >
            <Input 
                type="text"
                name="company"
                value={experience.company}
                labelText="Company"
                placeholder="e.g. ABC Company Ltd."
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="position"
                value={experience.position}
                labelText="Position"
                placeholder="Junior Engineer"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    value={experience.startDate}
                    labelText="Start Date"
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleFormUpdate(e)}
                />
                <Input
                    type="text"
                    name="endDate"
                    value={experience.endDate}
                    labelText="End Date"
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleFormUpdate(e)}
                />
            </div>
            <Input
                type="textarea"
                name="duties"
                value={experience.duties}
                labelText="Job Description"
                placeholder="Enter your job duties"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="buttonContainer">
                <button className="btn save" type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button className="btn close" type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default ExperienceForm;