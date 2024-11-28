import itemPreview from "./ItemPreview.jsx";
import "../../style/Preview.css"

function PreviewSection({header, items, type}) {
    const SelectedItemPreview = itemPreview[type];

    return (
        <div className="previewSection">
            <h2>{header}</h2>
            <div className="previewItemContainer">
                {
                    items.map((item) => (
                        <SelectedItemPreview 
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PreviewSection;