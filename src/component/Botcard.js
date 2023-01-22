import React from "react";
import { BsFillSuitHeartFill} from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { BsLightning } from "react-icons/bs"


function Botcard({botData, botarmy, setbotarmy}) {

  const {name,health,damage,armor,catchphrase,avatar_url} = botData;

  function handleCardClick() {
    let checker = botarmy.find(bot => {
      return bot.id === botData.id
    })
    if (checker === undefined) {
      setbotarmy([...botarmy, botData])
    }else {
      setbotarmy([...botarmy])
    }
  }

   
   return(
    
    <div className="collection" onClick={handleCardClick}>
      <img className = "image" src={avatar_url} alt="my image"></img>
      <h1 id="name">{name}</h1>
      <p id ="binary">{catchphrase}</p>
      <hr />
      <div className="icons">
        <p id = "health"><BsFillSuitHeartFill/>{health}</p> 
        <p id = "damage"><BsLightning/>{damage}</p>  
        <p id = "arrmor"><BsShieldShaded/>{armor}</p>
      </div>
     </div>
    

   )
}
export default Botcard