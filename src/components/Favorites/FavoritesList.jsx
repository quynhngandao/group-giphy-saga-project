import * as React from "react";
import { useSelector } from "react-redux";
// Importing Components
import FavoritedGIF from "./FavoritedGIF";

function FavoritesList() {
  // const gifFavoriteArray = [
  //   {
  //     title: "bearDancing",
  //     description: "A person in a bear costume dancing with swagger😎",
  //     imageURL: "../images/bearDancingGIF.gif",
  //   },
  //   {
  //     title: "sadPikachu",
  //     description: "A slow zoom in of a very sad Pikachu",
  //     imageURL: "../images/sadPikachu.gif",
  //   },
  //   {
  //     title: "Spongeboy Me Bob Crying",
  //     description: "Spongebob crying his heart out in the kitchen",
  //     imageURL: "../images/spongbobGIF.gif",
  //   },
  
  const giphySearchList = useSelector(store => store.giphySearchList)

  return (
    <section className="favoritedGIFS">
     <FavoritedGIF/>
    </section>
  );
}

export default FavoritesList;
