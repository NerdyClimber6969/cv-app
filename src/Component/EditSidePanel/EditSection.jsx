import { useState } from "react";
import EditSectionItem from "./EditSectionItem";
import PersonalDetailsForm from "../Form/PersonalDetailsForm";
import EduactionForm from "../Form/EducationForm";
import ExperienceForm from "../Form/ExperienceForm";

const forms = {
    "personalDetails": PersonalDetailsForm,
    "educations": EduactionForm,
    "experiences": ExperienceForm,
};

function EditSection({header, type, items}) {
    const SelectedForm = forms[type];

    const [formOpen, setformOpen] = useState(false);
    const [sectionOpen, setSectionOpen] = useState(false);
    
    return (
        <div className={"editSection " + type}>
            <button onClick={() => setSectionOpen(!sectionOpen)}>
                <h2>{header}</h2>
                <div>icon</div>
            </button>
            <div className={sectionOpen ? "sectionItemsContainer open" : "sectionItemsContainer"}>
                {items.map((item) => (
                    <EditSectionItem
                        EditForm={SelectedForm}
                        content={item}
                        key={item.id}
                    />
                ))}
            </div>
            {
                formOpen ? (
                    <SelectedForm onClose={() => setformOpen(!formOpen)}/>
                ) : (
                    <button 
                        className="addBtn"
                        onClick={() => setformOpen(!formOpen)}
                    > 
                        Add
                    </button>
                )
            }
        </div>
    );
};

export default EditSection;