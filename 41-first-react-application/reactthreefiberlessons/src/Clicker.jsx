import React, { useEffect, useState } from 'react'


function Clicker() {
  
    const [click, setClick] = useState(0)
  
    
    const clickCount = () => {
        setClick((prevState) =>  prevState + 1)
    }
    
    
    return (
    
    <div>
    <button onClick={clickCount} className='clicker' > count </button>  
    <p>Count: {click}</p>
    </div>
  )
}

export default Clicker
