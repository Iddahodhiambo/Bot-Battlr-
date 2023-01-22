
import { useState, useEffect } from 'react';
import './App.css';
import Botarmy from './component/Botarmy';
import Botcollection from './component/Botcollection';

function App() {
  const [botarmy, setbotarmy] = useState([]);
  const[bots, setBots] = useState([])

  useEffect(function() {
      fetch("http://localhost:3000/bots").then((response)=>response.json()).then((data)=>{
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
