import { useState } from "react"
import Person from "./Person"
import BbcSection from "./BbcSection"

import Counter from "./Counter"

const App = () => {
  // persons is the value
  // setPersons is the function to update persons

  const [persons, setPersons] = useState([
    { name: 'Dave', age: 33 },
    { name: 'Karen', age: 45 },
    { name: 'Steve', age: 40 },
  ])

  const handleClick = (index) => {
    // ... spread operator
    // copy the state array so we can change it
    let arr = [...persons]
    // changed the copied array
    arr.splice(index, 1)
    // update state with our new changed array
    setPersons(arr)
  }

  return (
    <div>
      <div>
        <h1>my react project</h1>
        {/* persons is the array we are iterating through */}
        {/* person is the parameter to access each individual item */}
        {persons.map((person, index) => {
          return <Person 
          key={index} 
          name={person.name} 
          age={person.age}
          handleClick={() => handleClick(index)}
          />
        })}
      </div>
      <Counter />
    </div>
  )
}

export default App