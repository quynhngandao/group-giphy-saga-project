import React from "react";
// Importing HashRouter
import { HashRouter as Route, Router } from "react-router-dom/cjs/react-router-dom.min";
// Importing Components
import FavoritesList from "../Favorites/FavoritesList.jsx";

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Route path="/favorites">
        <FavoritesList/>
      </Route>
    </div>
  );
}

export default App;
