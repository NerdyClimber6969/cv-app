import { useState, createContext } from "react";
import { resumeData } from '../resumeData.jsx';

export const ResumeContext = createContext(null);
export const ResumePreviewContext = createContext(null);

function Provider({children}) {
    const [resume, setResume] = useState(resumeData);
    const [resumePreview, setResumePreview] = useState(resumeData);

    return (
        <ResumeContext.Provider value={{resume, setResume}}>
            <ResumePreviewContext.Provider value={{resumePreview, setResumePreview}}>
                    {children}
            </ResumePreviewContext.Provider>
        </ResumeContext.Provider>
    );
};

export default Provider;

