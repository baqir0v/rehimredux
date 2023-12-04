import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cix, ustegel,rehimartir } from './saybolucu'

export function Saygac() {
  const count = useSelector((state) => state.sayci.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(ustegel())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(cix())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(rehimartir("rehim"))}>rehim</button>
      </div>
    </div>
  )
}