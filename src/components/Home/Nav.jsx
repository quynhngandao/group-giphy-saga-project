import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Nav() {
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

  return (
    <>
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
               sx={{ color: "white", fontFamily: "Roboto" }}
             >
               HOME
             </Button>
           </Link>
         </li>
         <li className="nav-item">
           <Link
             to="/favorite"
             className="nav-links"
             onClick={closeMobileMenu}
           >
             <Button
               variant="outlined"
               sx={{ color: "white", fontFamily: "Roboto" }}
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
       {/* <Favorites /> */}
     </Route>
   </Switch>
 </Router>
 </>
  )
}

export default Nav