import { BoxArrowUpRight, Moon, Sun } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react'
import { Link } from "react-router-dom"
// import { LinkContainer } from 'react-router-bootstrap';


function Header() {

  const [mode, setMode] = useContext<any>(ThemeContext)

  const settingMode = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
    else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  }
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex align-items-center'><img src="https://redux.js.org/img/redux.svg" alt="logo" width={35} className='me-2' /> Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' >
              <Nav.Link href="#action1" className='me-3'>Getting Started</Nav.Link>
            </Link>
            <Link to='/centered'>
            <Nav.Link href="#action2" className='me-3'>Tutorial</Nav.Link>
            </Link>
            <Link to='/color'>
            <Nav.Link href="#action2" className='me-3'>Usage Guide</Nav.Link>
            </Link>
            <Nav.Link href="#action2" className='me-3'>API</Nav.Link>
            <Nav.Link href="#action2" className='me-3'>FAQ</Nav.Link>
            <Nav.Link href="#action2" className='me-3'>Best Practices</Nav.Link>
            <Nav.Link href="#action2" className='d-flex align-items-center me-3'>GitHub <BoxArrowUpRight className='ms-2' fontSize={13} fontWeight={900} /></Nav.Link>
            <Nav.Link href="#action2" className='me-3'>Need help?</Nav.Link>
          </Nav>
          <Button onClick={settingMode}>{mode === "light" ? <Sun /> : <Moon />}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;