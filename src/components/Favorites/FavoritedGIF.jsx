// Importing Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Importing CSS
import "../App/App.css";

// FavoritedGIF Component
function FavoritedGIF({ favoritedGIF }) {
  return (
    <Card key={favoritedGIF.title} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={favoritedGIF.imageURL}
        title={favoritedGIF.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {favoritedGIF.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {favoritedGIF.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small">Category</Button>
      </CardActions>
    </Card>
  );
}

// Exporting FavoritedGIF Component
export default FavoritedGIF;
