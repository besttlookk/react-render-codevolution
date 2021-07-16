import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [count, setCount] = useState(0)

  console.log('Parent Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  )
}

// when a state value is after re-render...only parent component will render one more time but not tha parent componant

/*
// =-----------------------------Parent - child and render
WHen a parent component renders, React will recursievely render all of its child components.[but if child component does not have any change...it will not go into commit phase...it only goes through redner phase..and then bail out]
UNNECESSARY RENDERS: Where the child componet goes through the render phase but not the commit phase

New state same as old after initial render? both prenent and child d not render.

New state same as old state after re-render ? Parent re-renders one mor time but child neve re-renders

*/
