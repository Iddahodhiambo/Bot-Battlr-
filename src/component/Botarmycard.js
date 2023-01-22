import React from 'react'
import { BsFillSuitHeartFill} from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";

export default function Botarmycard({botData, setbotarmy, botarmy, bots, setBots}) {
    const {name,health,damage,armor,catchphrase,avatar_url} = botData;

    function handleRemove() {
        setbotarmy(botarmy.filter((bot) => {
            if(bot.id !== botData.id){
                return bot
            }
        }))
    }

    function handledelete() {
        fetch(`https://api.jsonbin.io/v3/b/63cd71e4ace6f33a22c58449/${botData.id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then(data => console.log(data))

        //Update bots list
        setBots(bots.filter((bot)=> {
            if(bot.id !== botData.id){
                return bot
            }
        }))
    }

  return (
    <div className="collection" onClick={handleRemove}>
        <img className = "image" src={avatar_url} alt="my image"></img>
        <h1 id="name">{name}</h1>
        <p id ="binary">{catchphrase}</p>
        <hr />
        <div className="icons">
        <p id = "health"><BsFillSuitHeartFill/>{health}</p> 
        <p id = "damage"><BsLightning/>{damage}</p>  
        <p id = "arrmor"><BsShieldShaded/>{armor}</p>
        </div>
        <button className='btn' onClick={handledelete}>X</button>
   </div>
  )
}
