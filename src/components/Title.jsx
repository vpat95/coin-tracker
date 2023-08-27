import React, { useMemo } from 'react'
import Typical from 'react-typical'

function Title() {

  const title = useMemo(() => (<Typical
    steps={["Coin Tracker", 2000, "सिक्का ट्रैकर", 2000, "Moneda Rastreador", 2000, "Traqueur de Pièces", 2000, "硬币 追踪器", 2000]}
    loop={Infinity}
    wrapper="span"
  />
  )
    , [])



  return (
    <h4 className='text-center' style={{ color: '#4655df', }}>
      {title}
    </h4>
  )
}

export default Title