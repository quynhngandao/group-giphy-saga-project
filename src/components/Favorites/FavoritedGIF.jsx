// FavoritedGIF Component
function FavoritedGIF({ favoritedGIF }) {
  return (
    <Card key={favorite.title} sx={{ maxWidth: 345 }}>
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
export default FavoritedGIF