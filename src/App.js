
import { useState, useEffect } from 'react';
import './App.css';
import Botarmy from './component/Botarmy';
import Botcollection from './component/Botcollection';

function App() {
  const [botarmy, setbotarmy] = useState([]);
  const[bots, setBots] = useState([])

  useEffect(function() {
      fetch("https://api.jsonbin.io/v3/b/63cd71e4ace6f33a22c58449").then((response)=>response.json()).then((data)=>{
          setBots(data)
          
          
      })
  },[])


  return (
    <div>
      <Botarmy botarmy={botarmy} setbotarmy={setbotarmy} bots={bots} setBots={setBots} />
      <Botcollection botarmy={botarmy} setbotarmy={setbotarmy} bots={bots} />
    </div>
    
  );
}

export default App;
