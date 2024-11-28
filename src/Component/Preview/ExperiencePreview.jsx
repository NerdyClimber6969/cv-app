function ExperiencePreview({item}) {
    return (
        <div className="previewItem">
            <h3>{item.company}</h3>
            <div className="infoGroup date">
                <p>{item.startDate + " - " + item.endDate}</p>
            </div>
            <div className="infoGroup other">
                <p>{item.position}</p>
                <p>{item.duties}</p>
            </div>
        </div>
    );
};

export default ExperiencePreview;