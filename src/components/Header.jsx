import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
        className='px-5 py-3' 
        fixed='top' 
        expand='md'
        dark
        style={{backgroundColor: '#355070'}}
      >
        <NavbarBrand href="/">
          <FontAwesomeIcon 
            icon={faFeather} 
            style={{
              marginRight: '.75rem',
              color: '#b56576'
            }} 
          />
          Poetic
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/poems">All Poems</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/poems">Submit a Poem</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          {/* <form className='d-flex' role='search'>
            <input 
              type="search" 
              className='form-control me-2' 
              placeholder='find a poem' 
            />
            <button className='btn btn-outline-light' type='submit'>Search</button>
          </form> */}
          <NavbarText>
            <NavLink id='signUp' href='/signup'>
              Sign Up
            </NavLink>            
          </NavbarText>
          <NavbarText
            className='mx-3 py-0'
          >
            <NavLink 
              className='px-3 py-2'
              id='login' 
              style={{ border: '1px solid #eaac8b', borderRadius: '.75rem', color: '#eaac8b' }} 
              href='/login'
            >
              Log In
            </NavLink>            
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;