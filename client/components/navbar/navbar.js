import React from 'react'
import { primaryColor, secondaryColor, flexBoxRowSpaceAround } from '../../styles'
import NavbarLink from './navbar-link'

const navStyle = {
  ...flexBoxRowSpaceAround,
  width: '100vw',
  height: '50px',
  marginTop: '15px',
  backgroundColor: primaryColor,
  color: secondaryColor,
}

const Navbar = () => (
  <div style={ navStyle }>
    <NavbarLink to="/">Home</NavbarLink>
    <NavbarLink to="/">Reviews</NavbarLink>
    <NavbarLink to="/">About</NavbarLink>
  </div>
)

export default Navbar
