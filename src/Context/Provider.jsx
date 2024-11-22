import { useState, createContext } from "react";
import resumeData from '../resumeData.jsx';

export const PersonalDetailsContext = createContext(null);
export const EducationsContext = createContext(null);
export const ExperiencesContext = createContext(null);

function Provider({children}) {
    const [personalDetails, setPersonalDetails] = useState(resumeData.personalDetails);
    const [educations, setEducations] = useState(resumeData.educations);
    const [experiences, setExperiences] = useState(resumeData.experiences);

    return (
        <PersonalDetailsContext.Provider value={{personalDetails, setPersonalDetails}}>
            <EducationsContext.Provider value={{educations, setEducations}}>
                <ExperiencesContext.Provider value={{experiences, setExperiences}}>
                    {children}
                </ExperiencesContext.Provider>
            </EducationsContext.Provider>
        </PersonalDetailsContext.Provider>
    );
};

export default Provider;

