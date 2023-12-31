import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WarmSeatLogo from '../assets/warmseat-logo.png'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function Header({ signOut, user }) {
  return (
    <Navbar>
      <Navbar.Brand>
        <img
            src={WarmSeatLogo}
            width="35"
            height="35"
            className="warmseat-logo"
            alt="Warmseat Logo"
        />
        <p className='text-icon'>WarmSeat</p>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <button className='signOut-btn' onClick={signOut}>Sign out</button>
      </Nav>
    </Navbar>
  )
}

export default withAuthenticator(Header);