import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)

  console.log('UseState Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {/* after initial render if we set the state with the same old value...component wont re render */}
      <button onClick={() => setCount(0)}>Count to 0</button>
      {/* after the component has been "re-render" and if we set the same value...component will render "just one more time" */}
      <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  )
}

// --------------useState and render
/*
the setter function from a useState hook will cause the component to re-render.

the exception is when we update a state hook to the same value as the current value

same value after the initial render ? The component will not render

same value after "re-render" ? React will render that specific component one more time and then  bails out from any 
subssequesnt renders

*/
