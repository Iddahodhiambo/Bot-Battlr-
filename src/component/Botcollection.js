import { useEffect,useState } from "react";
import Botcard from "./Botcard";

function Botcollection({botarmy, setbotarmy}) {
    const[bots, setBots] = useState([])

    useEffect(function() {
        fetch("http://localhost:3000/bots").then((response)=>response.json()).then((data)=>{
            setBots(data)
            
            
        })
    },[])
    let botcards = bots.map(bot=>(<Botcard
        key = {bot.id}
        botData = {bot}
        botarmy={botarmy} 
        setbotarmy={setbotarmy}
        />))
    
       return(
       <div>
        {botcards}
       </div>
       )
       
       
     
    
    
}
export default Botcollection