
import { useState } from 'react';
import './App.css';
import Botarmy from './component/Botarmy';
import Botcollection from './component/Botcollection';

function App() {
  const [botarmy, setbotarmy] = useState([]);


  return (
    <div>
      <Botarmy botarmy={botarmy} />
      <Botcollection botarmy={botarmy} setbotarmy={setbotarmy} />
    </div>
    
  );
}

export default App;
