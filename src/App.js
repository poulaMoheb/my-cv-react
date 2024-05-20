import react from 'react';
import PersonalInformationView from './components/PersonalInformationView';
import Nav from './components/Nav';
import style from './css/App.module.css'
import EducationalInformation from './components/EducationalInformation';
import PracticalExperience from './components/PracticalExperience';
function App() {
  return (
    <>
    <Nav/>
    <div className={style.body}>
    <PersonalInformationView/>
    <EducationalInformation/>
    <PracticalExperience/>
    {/* <button className='primary'>Submit</button> */}
    </div>
    </>
  );
}

export default App;
