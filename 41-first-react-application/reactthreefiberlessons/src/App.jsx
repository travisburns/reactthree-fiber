import { useState } from 'react'
import Clicker from './Clicker'



export default function App({children}) {
  
  const [hasClicker, setHasClicker] = useState(true)
  const [click, setClick] = useState(0)

  


const toggleClickerClick = () => {
  setHasClicker(!hasClicker)
}

const increment = () => {
  setCount(count + 1)
}
  
  return <>
  {children}

  <div>Total Count: {click }</div>

  <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' } clicker </button>
  { hasClicker && <>
    <Clicker increment={increment} keyName="countA" color={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`} />
    <Clicker increment={increment} keyName="countB" color={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`}/>
    <Clicker increment={increment} keyName="countC" color={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`}/>
  </>}
  
  
  </>
   
}




