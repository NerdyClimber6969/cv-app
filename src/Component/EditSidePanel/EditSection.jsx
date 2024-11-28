import { useState, useContext } from "react";
import { ResumeContext, ResumePreviewContext } from '../../Context/Provider.jsx';
import EditSectionItem from "./EditSectionItem.jsx";
import resumeItemObj from "../../ResumeItemObj/ResumeItemObj.jsx";
import forms from "../Form/Forms.jsx";
import "../../style/EditSection.css"

function EditSection({header, items, type}) {
    const SelectedForm = forms[type];

    const [isAdding, setIsAdding] = useState(false);
    const [sectionOpen, setSectionOpen] = useState(false);
    const [editId, setEditId] = useState(null); 
    const [newItem, setNewItem] = useState(null);

    const { resumeItems, setResumeItems } = useContext(ResumeContext);
    const { resumeItemsPreview, setResumeItemsPreview } = useContext(ResumePreviewContext);

    function updateResumePreview(updatedItem) {
        const newPreview = {
            ...resumeItemsPreview, 
            [type]: resumeItemsPreview[type].map((item) => (
                item.id === editId ? updatedItem : item
            )),
        };
        setResumeItemsPreview(newPreview);
        
        return;
    };

    function handleClose() {
        setResumeItemsPreview(resumeItems);
        setEditId(null);
        setIsAdding(false);
        return;
    };

    function handleSave(e) {
        e.preventDefault();
        setResumeItems(resumeItemsPreview);
        setEditId(null);
        setIsAdding(false);
        return;
    };

    function handleAdd() {
        setIsAdding(true);
        const newItemToAdd = new resumeItemObj[type]();
        setNewItem(newItemToAdd);
        setEditId(newItemToAdd.id);
        setResumeItemsPreview({
            ...resumeItemsPreview,
            [type]: [...resumeItemsPreview[type], newItemToAdd]
        });
        
    };

    return (
        <div className={"editSection " + type}>
            <button onClick={() => setSectionOpen(!sectionOpen)}>
                <h2>{header}</h2>
                <div>icon</div>
            </button>

            <div className={sectionOpen ? "editItemContainer open" : "editItemContainer"}>
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

                {isAdding ? (
                    <SelectedForm
                        item={newItem}
                        updatePreview={updateResumePreview}
                        onSave={handleSave}
                        onClose={() => setIsAdding(!isAdding)}
                        key={newItem.id}
                    />
                ) : (
                    <button 
                        className="btn add"
                        onClick={handleAdd}
                    > 
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};

export default EditSection;