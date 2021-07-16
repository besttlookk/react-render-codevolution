import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

// NOTE: even if only childC se chnagig...since it is includes in childB and childA(which has nothing to do with context value)
// that is simply bcoz when the parents component re-renders...child component recursively re-renders...irirespctive of props or context Value.
// there is a few ways to obtimize the context

// when rthe context provider is in the parent component and the paresnt component's state updates, every child componet re-rendes and not just the component consuming the context value
export const ChildA = () => {
  console.log('Child A Render')
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
  console.log('Child B Render')
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  )
}

export const ChildC = () => {
  const count = useContext(CountContext)
  console.log('Child C Render')
  return (
    <>
      <div>Child C - Count = {count}</div>
    </>
  )
}
