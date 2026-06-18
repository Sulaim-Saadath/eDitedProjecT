import React from 'react'
import { useSelector } from 'react-redux'

export default function UserInfo() {
    let data = useSelector(state => state.user)
  return (
    <div>
      <h1> UserName: {data.username}, Balanc: {data.balance}</h1>
    </div>
  )
}
