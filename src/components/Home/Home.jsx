// import components
import Header from "./Header";
import FavoritesList from "../Favorites/FavoritesList";


function Home() {

  //  FETCH API from '/

  // useEffect 
  
  return (
    
    <div className="Home">
      <Header/>
    {/* Display List */}
    <FavoritesList/>
    </div>
  );
}

export default Home;
