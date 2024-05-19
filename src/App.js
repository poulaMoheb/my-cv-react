import { div } from 'react';
import appStyle from './css/App.module.css';
import SideContainer from './components/SideContainer';
function App() {
  return (
    <div className={appStyle.body}>
      <SideContainer position={true}/>
      <SideContainer position={false}/>
    </div>
  );
}

export default App;
