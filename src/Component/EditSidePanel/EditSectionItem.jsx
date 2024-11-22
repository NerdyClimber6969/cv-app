function EditSectionItem({item, onClick}) {
    
    return (
        <button 
            className="editSectionItem"
            onClick={() => onClick(item.id)}
        >
            <h3>{item.displayName}</h3>
            <img className="editIcon"></img>
        </button>
    );
};

export default EditSectionItem;