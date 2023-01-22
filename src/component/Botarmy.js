import React from 'react'
import Botarmycard from './Botarmycard'

function Botarmy({botarmy}) {

    let armycards = botarmy.map(bot => {
        return <Botarmycard key={bot.id} botData={bot} />
    })

  return (
    <div className={botarmy.length === 0 ? 'empty' : 'botarmy'}>
        {armycards}
    </div>
  )
}

export default Botarmy