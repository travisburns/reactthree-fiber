import React, { useEffect, useState } from 'react'


function Clicker({ keyName, color}) {


    const [click, setClick] = useState(parseInt(localStorage.getItem('keyName') ?? 0))
  
    
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
    
    return (
    
    <div>
    <div style={{color}}>Count: {click}</div>
    <button onClick={clickCount} className='clicker' > count </button>  
    
    </div>
  )
}

export default Clicker
