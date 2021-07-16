import React, { useState } from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {/* version one: without "memoization" */}
      {/* (When no props is passed through <childTwo /> component or passing): 
        If state changes in parent component: child componenet will also re-render.[even if child component has nothing to do with that change]
        If on state change...parenet component will re-render just one more time but not the clild component.
        
        NOTE: child component re-render not bcoz its props is changing..its bcoz parent component is r-rendering
          React does not care if props chnage..it will always re-render child component if parent re-render
      */}
      {/* <ChildTwo /> */}
      {/* <ChildTwo name={name} /> */}

      {/* version two: with "memoization" */}
      {/* we have to tell react only to re-render this child when its props chnages : using useMemo */}
      {/* with this..on changing the count child compoenet wont re-render */}
      <MemoizedChildTwo name={name} />
    </div>
  )
}
