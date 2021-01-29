import React, { useState, useEffect } from 'react'

function UseEffectCounterOne() {
  const [count, setCount] = useState(0)

  // executed after every render.
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return(
    <div>
      <button onClick = { () => setCount(prevCount => prevCount + 1) }>Click { count } times</button>
    </div>
  )
}

export default UseEffectCounterOne