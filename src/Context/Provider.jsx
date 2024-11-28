import { useState, createContext } from "react";
import exampleItems from '../ResumeItemObj/exampleItems.jsx';

export const ResumeContext = createContext(null);
export const ResumePreviewContext = createContext(null);

function Provider({children}) {
    const [resumeItems, setResumeItems] = useState(exampleItems);
    const [resumeItemsPreview, setResumeItemsPreview] = useState(exampleItems);

    return (
        <ResumeContext.Provider value={{resumeItems, setResumeItems}}>
            <ResumePreviewContext.Provider value={{resumeItemsPreview, setResumeItemsPreview}}>
                    {children}
            </ResumePreviewContext.Provider>
        </ResumeContext.Provider>
    );
};

export default Provider;

