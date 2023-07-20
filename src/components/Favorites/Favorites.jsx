import * as React from "react";
// Import Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Importing CSS
import "../App/App.css";

// Favorites Component
function Favorites() {
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
    {
      title: "Thriller Micheal Jackson Eating Popcorn",
      description:
        "Thriller Micheal Jackson eating popcorn and smiling in a movie theater",
      imageURL: "../images/michealBlackson.gif",
    },
  ];

  return (
    <section className="favoritedGIFS">
      {gifFavoriteArray.map((favorite) => (
        <Card key={favorite.title} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={favorite.imageURL}
            title={favorite.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {favorite.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {favorite.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Favorite</Button>
            <Button size="small">Category</Button>
          </CardActions>
        </Card>
      ))}
    </section>
  );
}

// Exporting component
export default Favorites;
