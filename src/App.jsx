import './style/App.css'
import EditSection from './Component/EditSidePanel/EditSection.jsx';
import PreviewSection from './Component/Preview/PreviewSection.jsx';
import { useContext } from 'react';
import { ResumeContext, ResumePreviewContext } from './Context/Provider.jsx';

function App() {
  const { resumeItems } = useContext(ResumeContext)
  const { resumeItemsPreview } = useContext(ResumePreviewContext)
  
  return (
      <div className="app">
        <div className='editSectionContainer'>
          <EditSection
            header="Personal Details"
            type="personalInfo"
            items={resumeItems.personalInfo}
          />
          <EditSection
            header="Education Background"
            type="education"
            items={resumeItems.education}
          />
          <EditSection
            header="Working Experience"
            type="experience"
            items={resumeItems.experience}
          />
        </div>
        
        <div className='previewSectionContainer'>
          <div className='resumePreview'>
            <PreviewSection
              header="Education Background"
              items={resumeItemsPreview.education}
              type="education"
            />
            <PreviewSection
              header="Working Experience"
              items={resumeItemsPreview.experience}
              type="experience"
            />
          </div>
        </div>
      </div>
  );
};

export default App;