import React from 'react'
import Button from './Button'

function Header( {title }) {

 const onClick = () => {
   console.log("clicked")
 }

  return (
    <header className="header">
        <h1 > {title}  Task Tracker</h1>
        <Button text="Add" color="green" onClick={onClick} />


      
    </header>
  )
}

export default Header
