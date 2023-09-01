import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='h-16 flex items-center justify-center'>
        <ul className='flex gap-8'>
            <li><Link to="/">Add</Link></li>
            <li><Link to="/github">GitHub</Link></li>
            <li><Link to="/pro">Pro</Link></li>
            <li><Link to="/general">General</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
