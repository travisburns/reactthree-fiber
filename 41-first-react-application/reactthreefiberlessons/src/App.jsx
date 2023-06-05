import {useEffect, useMemo, useState } from 'react'
import Clicker from './Clicker'
import People from './People'



export default function App({clickersCount, children}) {
  
//   const [hasClicker, setHasClicker] = useState(true)
//   const [click, setClick] = useState(0)

  


// const toggleClickerClick = () => {
//   setHasClicker(!hasClicker)
// }

// const increment = () => {
//   setCount(count + 1)
// }
  


//   const colors =  useMemo(()=> {
//     const colors = {}

//  for(let i =0; i < clickersCount; i++) 
//   colors.push (`hsl(${ Math.random() * 360 }deg, 100%, 70%)`)

//   return colors
//   }, [])

// const tempArray = [...Array(clickersCount)]

// tempArray.map((value, index)=> {

// })

//   return <>
//   {children}

//   <div>Total Count: {click }</div>

//   <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' } clicker </button>
//   { hasClicker && <>
//     { [...Array(clickersCount)].map((value, index) => 
//     {
//         <Clicker 
//         key={ index }
//         increment={increment} 
//         keyName={`count${index}`} 
//         color={colors [index] } 
//         />
//     }) }
//     {/* <Clicker increment={increment} keyName="countB" color={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`}/>
//     <Clicker increment={increment} keyName="countC" color={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`}/> */}
//   </>}
  
const [people, setPeople] = useState([])

const getPeople = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await response.json()
  setPeople(result)
}

useEffect(()=> 
{
  getPeople()
}, [])


return (
<div>
  <h2>People</h2>
  <ul>
  {people.map((person)=> <li key={person.id}>{person.name}</li>) }
  </ul>
</div>
)
  // </>
   
}




