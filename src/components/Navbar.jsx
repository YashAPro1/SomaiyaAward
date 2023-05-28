import React from 'react'
import Nav from 'react-bootstrap/Nav';
import  logo from './kjsieit-logo.svg';
export default function Navbar() {
  return (
    <div>
      <Nav
      className='navbar'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <div className='nav'>


        <div style={{display:'flex',justifyContent:"center",alignItems:"center",marginBottom: "2rem"}}><img alt="logo" src={logo} style={{paddingTop: "2em",width:'35rem ',height:'7rem',borderRadius:10,marginBottom:"1.5rem"}} /></div>

        </div>
    </Nav>
    </div>
  )
}
