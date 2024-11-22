import { useState } from "react";

function EditSectionItem({EditForm, content}) {
    const [editing, setEditing] = useState(false);

    const editSectionItem = editing ? (
        <EditForm
            onClose={() => setEditing(false)}
            content={content}
        />
    ) : (
        <button 
            className="sectionItem"
            onClick={() => setEditing(true)}
        >
            <h3>{content.displayName}</h3>
            <img className="editIcon"></img>
        </button>
    ) 

    return editSectionItem;
};

export default EditSectionItem;