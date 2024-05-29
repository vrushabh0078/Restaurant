import React from 'react'
import './Navbar.css'
import Clock from '../Clock/Clock'


const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                {menuList.map((curElem) => {
                    return (
                        <button className='btn-group_item' 
                            onClick={() => filterItem(curElem)}>
                                {curElem}
                        </button>
                    )
                })}
            </div>
            <div className="clock">
                <Clock/>
            </div>
        </nav>
    </>
  )
}

export default Navbar
