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
  <div style={navStyle}>
    <NavbarLink style={{color: 'red'}} to="/home">Home</NavbarLink>
    <NavbarLink to="/home">Reviews</NavbarLink>
    <NavbarLink to="/home">Top 100s</NavbarLink>
    <NavbarLink to="/home">About</NavbarLink>
  </div>
)

export default Navbar
