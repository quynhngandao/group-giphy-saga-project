import * as React from "react";
import { useSelector } from "react-redux";
// Importing Components
import FavoritedGIF from "./FavoritedGIF";

function FavoritesList() {
  
  const giphySearchList = useSelector(store => store.giphySearchList)

  return (
    <section className="favoritedGIFS">
     <FavoritedGIF/>
    </section>
  );
}

export default FavoritesList;
