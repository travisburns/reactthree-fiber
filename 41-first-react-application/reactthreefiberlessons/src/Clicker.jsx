import React, { useEffect, useState } from 'react'


function Clicker() {
  
    const [click, setClick] = useState(parseInt(localStorage.getItem('click') ?? 0))
  
    
    const clickCount = () => {
        setClick((prevState) =>  prevState + 1)
    }
    
    useEffect(()=> {
        return () => 
        {
            localStorage.removeItem('click')
        }
        
    }, [])


    useEffect(() => 
    {
        localStorage.setItem('click', click)
    }, 
    
    [click]
    
    )
    
    return (
    
    <div>
    <button onClick={clickCount} className='clicker' > count </button>  
    <p>Count: {click}</p>
    </div>
  )
}

export default Clicker
