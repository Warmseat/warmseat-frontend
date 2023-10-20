import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WarmSeatLogo from '../assets/warmseat-logo.png'

// function Header() {
//   return (
//     <Nav defaultActiveKey="/home" as="ul">
//       <Nav.Item as="li">
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

function Header({ signOut, user }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
            src={WarmSeatLogo}
            width="35"
            height="35"
            className="warmseat-logo"
            alt="Gemsy Logo"
        />
        <p className='text-icon'>WarmSeat</p>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <button className='signOut-btn' style={{ color: 'white' }} onClick={signOut}>Sign out</button>
        {/* <Button variant="outline-light" onClick={() => alert('Log out clicked')}>Log Out</Button> */}
        {/* <Button variant="outline-light" onClick={signout}>Log Out</Button> */}
      </Nav>
    </Navbar>
  )
}

export default Header;