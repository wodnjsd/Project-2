// ? Import Link component
import { Link } from "react-router-dom"
import React from "react"

// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <header>
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link to="cocktails" style={{ textDecoration: "none" }} className="navbar-item">
              🏠 Home
            </Link>
            {/* <Link to="gin" className="navbar-item">
                Gin
            </Link>
            <Link to="rum" className="navbar-item">
                Rum
            </Link>
            <Link to="vodka" className="navbar-item">
                Vodka
            </Link> */}
            <Link to="roulette" style={{ textDecoration: "none" }} className="navbar-item">
               🎰 Roulette
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
