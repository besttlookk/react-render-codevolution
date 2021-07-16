import React from 'react'

export const ChildTwo = ({ name = 'Amit' }) => {
  console.log('ChildTwo Render')
  return <div>ChildTwo component - {name}</div>
}

//  add additional export
// by default useMemo..does shallow comparision
export const MemoizedChildTwo = React.memo(ChildTwo)

/*
// ==================Question on optimization =======================================
1. When do i use same element reference technique and when do i use React.memo?

  Same element refernec:
      When our parent compoenet re-render because of "STATA" chnages in the parent component.
      This technique does not work if the parent component re-renders bcoz of changes inb its props.
      state change ? YES
      props chnage ? NO

  React.memo:
      When our child component is being asked to re-render due to changes in the parent's state which do not affect the child component props in anyway.
      If child component has no props: better to use "same element reference" technique..as it is provided automatically


2. If React.memo provides the optimization bt comparing the props, wht not wrap every single compoenet
with REact.memo?
        OR
    Why doesn't React just internally memoize every component and not expose React>memo to the developers?


    "Shallow comparision aren't free. They are O(props count). and they only buy something if is bails out.
    All comparision where we end up re-rendering are wasted. why would you expect always comparing to be faster?
    Considering many components always get differnet props."
    

// when we optimize the rendering one component, react will also skip rerendering that component's entire subtree bcoz its effectively stopping the default "render childern recursively" behavior of React.
*/
