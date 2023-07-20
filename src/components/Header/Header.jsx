import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Favorites from "../Favorites/Favorites";

// Style
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // RETURN
  return (
    <div className="Header">
      <header className="App-header">
        <h1 className="App-title">Giphy Search!</h1>
      </header>

      {/* PAGES */}
      <Router>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <Button
                    variant="outlined"
                    sx={{ color: "#2979ff", fontFamily: "Rubik Bubbles" }}
                  >HOME </Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favorites"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <Button
                    variant="outlined"
                    sx={{ color: "#2979ff", fontFamily: "Rubik Bubbles" }}
                  >
                    Favorite
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/favorite">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
