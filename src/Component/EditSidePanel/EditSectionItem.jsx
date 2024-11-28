function EditSectionItem({item, onClick}) {
    const displayName =  (
        item.school || 
        item.company || 
        item.firstName + " " +item.lastName
    );

    return (
        <button 
            className="editItem"
            onClick={() => onClick(item.id)}
        >
            <h3>{displayName}</h3>
            <img className="editIcon"></img>
        </button>
    );
};

export default EditSectionItem;