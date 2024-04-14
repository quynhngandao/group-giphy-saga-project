import * as React from "react";
// Importing Components
import FavoritedGIF from "./FavoritedGIF";

function FavoritesList() {
  const gifFavoriteArray = [
    {
      title: "bearDancing",
      description: "A person in a bear costume dancing with swagger😎",
      imageURL: "../images/bearDancingGIF.gif",
    },
    {
      title: "sadPikachu",
      description: "A slow zoom in of a very sad Pikachu",
      imageURL: "../images/sadPikachu.gif",
    },
    {
      title: "Spongeboy Me Bob Crying",
      description: "Spongebob crying his heart out in the kitchen",
      imageURL: "../images/spongbobGIF.gif",
    },
  ];

  return (
    <section className="favoritedGIFS">
      {gifFavoriteArray.map((favorite) => (
        // FavoritedGIF component
        <FavoritedGIF favoritedGIF={favorite} key={favorite.title} />
      ))}
    </section>
  );
}

export default FavoritesList;
