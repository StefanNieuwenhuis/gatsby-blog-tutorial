import { Link } from "gatsby"
import React from "react"
import "./nav.css"

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link activeClassName="active-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active-link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
