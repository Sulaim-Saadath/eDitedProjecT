import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Child1() {
    let context = useContext(UserContext);
  return (
    <div>
      <h1>Hello {context}</h1>
    </div>
  )
}
