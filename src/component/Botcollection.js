import { useEffect,useState } from "react";
import Botcard from "./Botcard";

function Botcollection({botarmy, setbotarmy, bots}) {
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