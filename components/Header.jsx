import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WarmSeatLogo from '../assets/warmseat-logo.png'

function Header({ signOut, user }) {
  return (
    <Navbar bg="dark" variant="dark">
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
        <button className='signOut-btn' style={{ color: 'white' }} onClick={signOut}>Sign out</button>
      </Nav>
    </Navbar>
  )
}

export default Header;