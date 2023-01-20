import { useEffect,useState } from "react";

function Botcollection() {
    const[bot, setBot] = useState([])


    useEffect(function() {
        fetch("http://localhost:8001/bots").then((response)=>response.json).then((data)=>{
            console.log(data)
            setBot(data)
        })
    },[])
}
export default Botcollection