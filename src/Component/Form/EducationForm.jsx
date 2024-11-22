import Input from "./Input.jsx";
import { useContext } from "react";
import { EducationsContext } from "../../Context/Provider.jsx";

function EduactionForm({onClose, content={}}) {
    const { educations, setEducations} = useContext(EducationsContext);

    function handleUpdate(id, field, value) {
        setEducations(educations.map((education) => (
            education.id === id ? {...education, [field]: value} : education
        )));
        
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
                value={content.school}
                placeholder="e.g. University of Hong Kong"
                onChange={(e) => handleUpdate(content.id, "school", e.target.value)}
            />
            <Input
                type="text"
                name="degree"
                labelText="Degree"
                value={content.degree}
                placeholder="e.g. Bachelor of Science"
                onChange={(e) => handleUpdate(content.id, "degree", e.target.value)}
            />
            <div className="dateContainer">
                <Input
                    type="text"
                    name="startDate"
                    labelText="Start Date"
                    value={content.startDate}
                    placeholder="e.g. 11/2020"
                    onChange={(e) => handleUpdate(content.id, "startDate", e.target.value)}
                />
                <Input
                    type="text"
                    name="endDate"
                    labelText="End Date"
                    value={content.endDate}
                    placeholder="e.g 11/2024"
                    onChange={(e) => handleUpdate(content.id, "endDate", e.target.value)}
                />
            </div>
            <button 
                type="button"
                onClick={onClose}
            >
                Close
            </button>
        </form>
    );
};

export default EduactionForm;