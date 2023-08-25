import React from 'react'
import Typical from 'react-typical'

function Title() {
  return (
    <h4 className='text-center' style={{color: '#4655df'}}>
                <Typical
                steps={["Coin Tracker", 2000, "सिक्का ट्रैकर", 2000, "Moneda Rastreador", 2000, "Traqueur de Pièces", 2000, "硬币 追踪器", 2000]}
                loop={Infinity}
                wrapper="span"
              />
    </h4>
  )
}

export default Title