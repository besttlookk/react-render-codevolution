import React, { useState } from 'react'

export const OptimizedParentOne = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log('OptimizedParentOne Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {children}
    </div>
  )
}

/*
// ==================Same element reference ====================
Component can change its state but not props.

React automatically provides the optimization.

React looks at OptParentOne component 

convert button and children prop

re.render is caused by a state chnage in OptParentOne

Component has no mean of directly changing the props.[children is a props]

children props couldn't have changed

Make use of the React element that was previously created

previous render, will skip render phase for the childOne component

*/

/*
To avoid "unnecessary renders" where child component goes through the render phase but not the commit phase, 
we can extract the expensive child component and instaed pass it down as props to the parent component.
Whenever there is a re-render caused by a change in the state of the parent component, react will optimize the re-render for us by knowing that props has to referencing the same element befroe and after the render


*/
