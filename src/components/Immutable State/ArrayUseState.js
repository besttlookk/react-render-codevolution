import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']
export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState)
  const handleClick = () => {
    // array value changes but not the reference
    // persons.push('Clark')
    // persons.push('Kent')
    // setPerson(persons)

    // making the copy of state array..to change the refernece
    const newPersons = [...persons]
    newPersons.push('Clark')
    newPersons.push('Kent')
    setPersons(newPersons)
  }
  console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  )
}

/*
========State inmmutability and render===================
Mutating an object or an array as state will not cause a re-render when used with the useState or useReducer hook.

To re-render, make copy of the existing state, modify as necessery and then pass the new state to the setter function or while returning from a reducer functionparent


*/
