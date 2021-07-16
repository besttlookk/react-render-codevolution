import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  // with every re-render, different object is made...so Childfive cpmonent will always re-renser..even if person oject is not changing.
  // same is true for functions too.
  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {/* <MemoizedChildFive name={name} person={person} /> */}
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}

      {/* <MemoizedChildFive name={name} handleClick={handleClick} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  )
}
