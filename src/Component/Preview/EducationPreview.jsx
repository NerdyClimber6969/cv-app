function EducationPreview({item}) {
    return (
        <div className="previewItem">
            <h3>{item.school}</h3>
            <div className="infoGroup date">
                <p>{item.startDate + " - " + item.endDate}</p>
            </div>
            <div className="infoGroup other">
                <p>{item.degree}</p>
            </div>
        </div>
    );
};

export default EducationPreview;