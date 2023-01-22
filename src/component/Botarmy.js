import React from 'react'
import Botarmycard from './Botarmycard'

function Botarmy({botarmy, setbotarmy, bots, setBots}) {

    let armycards = botarmy.map(bot => {
        return <Botarmycard key={bot.id} botData={bot} setbotarmy={setbotarmy} botarmy={botarmy} bots={bots} setBots={setBots}  />
    })

  return (
    <div className={botarmy.length === 0 ? 'empty' : 'botarmy'}>
        {armycards}
    </div>
  )
}

export default Botarmy