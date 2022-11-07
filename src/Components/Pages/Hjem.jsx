import React from 'react'
import { NavLink } from "react-router-dom";
import "./hjem.scss"

export const Hjem = () => {
  return (
      <section>
        <h1>A page full of web</h1>
        <NavLink to="goals">Verdensmåls-API</NavLink>
      </section>
  )
}
