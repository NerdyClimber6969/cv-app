import { useState, useContext } from "react";
import { emptyItem } from "../../resumeData.jsx";
import EditSectionItem from "./EditSectionItem.jsx";
import PersonalDetailsForm from "../Form/PersonalDetailsForm.jsx";
import EduactionForm from "../Form/EducationForm.jsx";
import ExperienceForm from "../Form/ExperienceForm.jsx";
import { ResumeContext, ResumePreviewContext } from '../../Context/Provider.jsx';

const forms = {
    "personalDetails": PersonalDetailsForm,
    "educations": EduactionForm,
    "experiences": ExperienceForm,
};

function EditSection({header, type, items}) {
    const SelectedForm = forms[type];

    const [isAdding, setIsAdding] = useState(false);
    const [sectionOpen, setSectionOpen] = useState(false);
    const [editId, setEditId] = useState(null); 
    const [newItem, setNewItem] = useState(null);

    const { resume, setResume } = useContext(ResumeContext);
    const { resumePreview, setResumePreview } = useContext(ResumePreviewContext);

    function updateResumePreview(updatedItem) {
        const newPreview = {
            ...resumePreview, 
            [type]: resumePreview[type].map((item) => (
                item.id === editId ? updatedItem : item
            )),
        };
        setResumePreview(newPreview);
        
        return;
    };

    function handleClose() {
        setResumePreview(resume);
        setEditId(null);
        setIsAdding(false);
        return;
    };

    function handleSave(e) {
        e.preventDefault();
        setResume(resumePreview);
        setEditId(null);
        setIsAdding(false);
        return;
    };

    function handleAdd() {
        setIsAdding(true);
        const newItemToAdd = emptyItem[type]();
        setNewItem(newItemToAdd);
        setEditId(newItemToAdd.id);
        setResumePreview({
            ...resumePreview,
            [type]: [...resumePreview[type], newItemToAdd]
        });
        
    };

    return (
        <div className={"editSection " + type}>
            <button onClick={() => setSectionOpen(!sectionOpen)}>
                <h2>{header}</h2>
                <div>icon</div>
            </button>

            <div className={sectionOpen ? "sectionItemsContainer open" : "sectionItemsContainer"}>
                {items.map((item) => (
                    item.id === editId ? (
                        <SelectedForm
                            item={item}
                            updatePreview={updateResumePreview}
                            onSave={handleSave}
                            onClose={handleClose}
                            key={item.id}
                        />
                    ) : (
                        <EditSectionItem
                            item={item}
                            onClick={setEditId}
                            key={item.id}
                        />                           
                    )
                ))}
            </div>
            
            {   
                isAdding ? (
                    <SelectedForm
                        item={newItem}
                        updatePreview={updateResumePreview}
                        onSave={handleSave}
                        onClose={() => setIsAdding(!isAdding)}
                        key={newItem.id}
                    />
                ) : (
                    <button 
                        className="addBtn"
                        onClick={handleAdd}
                    > 
                        Add
                    </button>
                )
            }
        </div>
    );
};

export default EditSection;