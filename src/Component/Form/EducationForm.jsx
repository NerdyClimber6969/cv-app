import { useState } from "react";
import Input from "./Input.jsx";

function EduactionForm({item, updatePreview, onSave, onClose}) {
    const [education, setEducation] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newEducation = {...education, [name]: value};
        setEducation(newEducation);
        updatePreview(newEducation);
        return;
    };

    return (
        <form 
            className="form education"
        >
            <Input
                type="text"
                name="school"
                labelText="School"
                value={education.school}
                placeholder="e.g. University of Hong Kong"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="degree"
                labelText="Degree"
                value={education.degree}
                placeholder="e.g. Bachelor of Science"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    labelText="Start Date"
                    value={education.startDate}
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleFormUpdate(e)}
                />
                <Input
                    type="text"
                    name="endDate"
                    labelText="End Date"
                    value={education.endDate}
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleFormUpdate(e)}
                />
            </div>
            <div className="buttonContainer">
                <button className="btn save" type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button className="btn close" type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default EduactionForm;