import './App.css'
import EditSection from './Component/EditSidePanel/EditSection.jsx';
import { useContext } from 'react';
import { ResumeContext, ResumePreviewContext } from './Context/Provider.jsx';

function App() {
  const { resume } = useContext(ResumeContext)
  const { resumePreview } = useContext(ResumePreviewContext)
  
  return (
      <div className="app">
        <div className='editSide'>
          <EditSection
            header="Personal Details"
            type="personalDetails"
            items={resume.personalDetails}
          />
          <EditSection
            header="Education Background"
            type="educations"
            items={resume.educations}
          />
          <EditSection
            header="Working Experience"
            type="experiences"
            items={resume.experiences}
          />
        </div>
        
        <div className='resumePreview'>
          {
            resumePreview.educations.map((education) => (
              <div
                key={education.id}
              >
                {education.school}
              </div>
            ))
          }
        </div>
      </div>
  );
};

export default App;