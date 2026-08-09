import React, {useMemo, useState} from 'react';
import { NavLink } from 'react-router';
import { useClassName } from '../../hooks/useClassName';
import { keyify } from '../../utils/app.util';

const TopNavLinks = ({isNavOpen, closeNav, navLinks=[]}) => {

  const className = useClassName(add => {
    add("links");
    if(isNavOpen) add("open");
  },[isNavOpen])

  return <div className={className}>
    {navLinks.map(link => {
      let key = `nav-link-${keyify(link.label)}`;
      // return <NavLink onClick={closeNav} className="nav-link" to={link.destination} key={key}>{link.label}</NavLink>
      return <a onClick={closeNav} className="nav-link" to={link.destination} key={key}>{link.label}</a>
    })}
  </div>
}

export const TopNav = ({pageName, navLinks}) => {
  const [isNavOpen,setIsNavOpen] = useState(false);

  const toggleNav = () => { setIsNavOpen(prev => !prev) }
  const closeNav = () => { setIsNavOpen(false) }

  return(<nav className="top">
    <a>
      <h1>{pageName}</h1>
    </a>

    <div>
      <button className='mobile-menu' onClick={toggleNav}><hr/><hr/><hr/></button>
      <TopNavLinks navLinks={navLinks} isNavOpen={isNavOpen} closeNav={closeNav} />
    </div>
    
  </nav>)
}
