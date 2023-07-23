import SearchAppBar from "./SearchAppBar";
// Style
import "./Header.css";

function Header() {


  // RETURN
  return (
    <div className="Header">
      <header className="App-header">
         {/* SEARCH */}
      <SearchAppBar/>
      </header>
    </div>
  );
}

export default Header;
