import React, { Component } from 'react'
import "./css/Navbar.css"
import {Link} from "react-router-dom";
 

class Navbar extends Component {

  state = { clicked: false };
  handleclick = ()=>{
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <>
        <nav>
        <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative" className='logo'/>
          <div>
            <ul id='navbar' className={this.state.clicked  ? "#navbar active" : "#navbar"}>
              <li ><Link to="/">Blogs</Link></li>
              <li ><Link to="/contact">Contact</Link></li>
              <li><Link to="/login"><button id='btn'>Login</button></Link></li>
              {/* <li ><a href ="/">Blogs</a ></li>
              <li ><a  href="/contact">Contact</a ></li>
              <li><a href="login/"><button id='btn'>Login</button></a ></li> */}
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
            {/* <i class='bx bx-x'></i> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar



// import React from 'react';
// import "../styles/Navbar.css";
// import Tool from "./components";
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// const CustomNavbar = () => {
//   return (
//     <Navbar expand="lg">
//       <Container>
//         <Navbar.Brand href="/">
//           <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative" />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/"className = "nav-link ms-auto">
//               <Tool blogs="Blogs" />
//             </Nav.Link>
//             <Nav.Link href="/" className = "nav-link ms-left">
//               <Tool contacts="Contact" />
//             </Nav.Link>
//           </Nav>
//           <Nav>
//             <Button variant="primary" className = "ms-auto transparent-button">
//               <Tool login="Abdullah" />

//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
