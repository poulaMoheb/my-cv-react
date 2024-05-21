import react, { useEffect, useState } from 'react';
import PersonalInformationView from './components/PersonalInformationView';
import Nav from './components/Nav';
import style from './css/App.module.css'
import EducationalInformation from './components/EducationalInformation';
import PracticalExperience from './components/PracticalExperience';
import LivePreview from './components/LivePreview';
function App() {
  const [personalData,setPersonalData]=useState({
    name:'',
    profession:'',
    location:'',
    mail:'',
    phoneNum:'',
    gitHubURL:'',      
})
const [educationalData,setEducationalData]=useState([{
  id:'1',
  schoolName:'',
  degree:'',
  location:'',
  year:''
}])
const [practicalExperience,setPracticalExperience]=useState([{
  id:0,
  companyName:'',
  title:'',
  mainResponsibility:'',
  dateFrom:'',
  dateUntil:''

}])
const [viewed,setViewed]=useState(['empty','personalData','educationalData','practicalExperience'])
const [viewedNum,setViewedNum]=useState(0)
const [reset,setReset]=useState(false)


  return (
    <>
    <Nav reset={reset} set={setReset}/>
    <div className={style.body}>
          <div>
            <PersonalInformationView personalData={personalData} setPersonalData={setPersonalData} viewed={viewed} setViewed={setViewed} viewedNum={viewedNum} setViewedNum={setViewedNum} />
            <EducationalInformation educationalData={educationalData} setEducationalData={setEducationalData} viewed={viewed} setViewed={setViewed} viewedNum={viewedNum} setViewedNum={setViewedNum}/>
            <PracticalExperience practicalExperience={practicalExperience} setPracticalExperience={setPracticalExperience} viewed={viewed} setViewed={setViewed} viewedNum={viewedNum} setViewedNum={setViewedNum}/>
          </div>
          <LivePreview personalData={personalData} educationalData={educationalData} practicalExperience={practicalExperience}/>
    </div>
    </>
  );
}

export default App;
