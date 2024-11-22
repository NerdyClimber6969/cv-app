import './App.css'
import EditSection from './Component/EditSidePanel/EditSection.jsx';
import { useContext } from 'react';
import { PersonalDetailsContext, EducationsContext, ExperiencesContext } from './Context/Provider.jsx';

function App() {
  const { personalDetails } = useContext(PersonalDetailsContext);
  const { educations } = useContext(EducationsContext);
  const { experiences } = useContext(ExperiencesContext);

  return (
      <div className="app">
        <div className='editSide'>
          <EditSection
            header="Personal Details"
            type="personalDetails"
            items={personalDetails}
          />
          <EditSection
            header="Education Background"
            type="educations"
            items={educations}
          />
          <EditSection
            header="Working Experience"
            type="experiences"
            items={experiences}
          />
        </div>
        
        <div className='resume'>
          {
            educations.map((education) => (
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