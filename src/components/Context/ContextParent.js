/*
---------------------Ways to cause a re-render
Compoenet calls useState setter function or useReducer dispatch function

if parent component re-renders

"react context"

*/

import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log('ContextParent Render')
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {/* <ChildA /> */}

        {/* by just memoized childA...only comsume component will re-render */}
        {/* since childA doesnot re-render..child B as no reson to re-render */}
        <MemoizedChildA />

        {/* Context and Same element technique */}
        {/* {children} */}
      </CountProvider>
    </>
  )
}
