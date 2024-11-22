import { useState } from "react";
import Input from "./Input.jsx";

function EduactionForm({item, updatePreview, onSave, onClose}) {
    const [educationData, setEducationData] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newEducationData = {...educationData, [name]: value};
        setEducationData(newEducationData);
        updatePreview(newEducationData);
        return;
    };

    return (
        <form 
            className="educationsFrom"
        >
            <Input
                type="text"
                name="school"
                labelText="School"
                value={educationData.school}
                placeholder="e.g. University of Hong Kong"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="degree"
                labelText="Degree"
                value={educationData.degree}
                placeholder="e.g. Bachelor of Science"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    labelText="Start Date"
                    value={educationData.startDate}
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleFormUpdate(e)}
                />
                <Input
                    type="text"
                    name="endDate"
                    labelText="End Date"
                    value={educationData.endDate}
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleFormUpdate(e)}
                />
            </div>
            <div className="buttonContainer">
                <button type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default EduactionForm;