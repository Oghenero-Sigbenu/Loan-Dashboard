import React from 'react'
import PropTypes from 'prop-types'
import { MenuRounded, CloseRounded } from '@material-ui/icons'

const Header = ({ isOpenSidebar, toggleSidebar }) => {

  return (
    <header className="z-10 py-4 bg-transparent">
      <div className="container flex items-center justify-left px-6 mx-auto">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1 mr-5 rounded-md focus:outline-none"
        >
          {isOpenSidebar ? <CloseRounded /> : <MenuRounded />}
        </button>
        <div />
        <h1 className='text-left mb-[-1rem] text-[#333333] font-bold'>Loan</h1>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  isOpenSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}
