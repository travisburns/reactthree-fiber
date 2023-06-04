import React, { useRef, useEffect, useState } from 'react'


function Clicker({increment,  keyName, color}) {


    const [click, setClick] = useState(parseInt(localStorage.getItem('keyName') ?? 0))
    const buttonRef = useRef()
    
    
    const clickCount = () => {
        setClick((prevState) =>  prevState + 1)
    }
    
    useEffect(()=> {
        return () => 
        {
            localStorage.removeItem('keyName')
        }
        
    }, [])


    useEffect(() => 
    {
        localStorage.setItem('keyName', click)
    }, 
    
    [click]
    
    )

    const buttonClick = () => {
        setClick(click + 1)
        increment()
    }
    
    return (
    
    <div>
    <div style={{color}}>Count: {click}</div>
    <button ref={buttonRef} onClick={clickCount} className='clicker' > count </button>  
    
    </div>
  )
}

export default Clicker
