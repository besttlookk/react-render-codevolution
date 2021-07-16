import React from 'react'

export const ChildFive = ({ name, person }) => {
  console.log('ChildFive Render')
  return (
    <div>
      Hello {name} {person.fname}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
