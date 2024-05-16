import { div } from 'react';
import appStyle from './css/App.module.css';
import Header from './Header';

function App() {
  return (
    <div className={appStyle.body}>
    <Header/>
    </div>
  );
}

export default App;
