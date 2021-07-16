import React, { useState } from 'react'

const initState = {
  fname: 'Bruce',
  lname: 'Wayne',
}
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState)
  const changeName = () => {
    // updating state in this way wont work bcoz we are adding the same object with same reference
    // this will not help re-render the component
    // when we use object as a state...refernece to the object must change for the component to re-redner after comparing old and new state
    // directly mutating the object wont work

    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // setPerson(person)

    // --changing the refernece of the state object
    const newPerson = { ...person }
    newPerson.fname = 'Clark'
    // newPerson.lname = 'Kent'
    setPerson(newPerson)
  }
  console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  )
}
