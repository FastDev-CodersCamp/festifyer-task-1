import React, { Component } from 'react'
import "./css/Navbar.css"
import { Link } from "react-router-dom";

class Navbar extends Component {

  state = { clicked: false };
  handleclick = ()=>{
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <>
        <nav>
        <Link to={'/'}>
          <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative" className='logo'/>
        </Link>
          <div>
            <ul id='navbar' className={this.state.clicked  ? "#navbar active" : "#navbar"}>
              <li ><Link to={'/blogs'}>Blogs</Link></li>
              <li ><Link to={'/contacts'}>Contact</Link></li>
              <li className='btn-login'><Link to={'/login'}>Login</Link></li>
              
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