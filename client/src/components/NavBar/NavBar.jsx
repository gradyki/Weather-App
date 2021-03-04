import './NavBar.css'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Nav
      justify
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
  )
}

export default NavBar;