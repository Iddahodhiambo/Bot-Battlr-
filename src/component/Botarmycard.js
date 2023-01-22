import React from 'react'
import { BsFillSuitHeartFill} from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";

export default function Botarmycard({botData}) {
    const {name,health,damage,armor,catchphrase,avatar_url} = botData;
  return (
    <div className="collection">
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
