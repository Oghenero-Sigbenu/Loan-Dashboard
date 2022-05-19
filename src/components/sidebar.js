import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { colorsClass } from '../utility/helper'
import { menu } from "../utility/menu";
import Logo from "../assests/cloudbank 1.svg"
const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className="z-20 hidden md:block w-64 bg-white overflow-y-auto flex-shrink-0">
        <div className="py-4 text-gray-500">
          <Link to="/" className="ml-6 text-lg font-bold text-blue-200">
            <img src={Logo} alt="logo" className='ml-7'/>
          </Link>
          <ul className="mt-6 text-gray-800">
            {menu.map(item => (
              
            <li
              className={item.title === "Loan" ? "bg-[#D7ECEC] relative px-6 py-3 text-[#489494] font-thin hover:bg-[#D7ECEC] hover:text-[#489494] w-[90%] mx-auto transition-colors duration-500" : `relative px-6 py-3 text-[#489494] font-thin hover:bg-[#D7ECEC] hover:text-[#489494] w-[90%] mx-auto transition-colors duration-500 `}
            >
              <span
                className={`absolute  font-thin inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-thin"
              >
                {/* <HomeRounded /> */}
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </Link>
            </li>
            ))}
           
          </ul>
        </div>
      </aside>

      {/* mobile */}
      <CSSTransition in={isOpen} timeout={200} unmountOnExit classNames="mob-sidebar">
        <aside className="mob-sidebar fixed inset-y-0 z-20 w-64 mt-16 bg-white overflow-y-auto flex-shrink-0">
          <div className="py-4 text-gray-500">
            <ul className="mt-6 text-gray-800">
              {menu.map(item => (
           <li
           className={item.title === "Loan" ? "bg-[#D7ECEC] relative px-6 py-3 text-[#489494] font-thin hover:bg-[#D7ECEC] hover:text-[#489494] w-[90%] mx-auto transition-colors duration-500" : `relative px-6 py-3 text-[#489494] font-thin hover:bg-[#D7ECEC] hover:text-[#489494] w-[90%] mx-auto transition-colors duration-500 `}
         >
           <span
             className={`absolute  font-thin inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
           />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-thin"
              >
                {/* <HomeRounded /> */}
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </Link>
            </li>
            ))}
            </ul>
          </div>
        </aside>
      </CSSTransition>
    </>
  )
}

export default Sidebar

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}
