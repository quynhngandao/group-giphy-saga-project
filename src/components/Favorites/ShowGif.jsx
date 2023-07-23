import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Dispatch } from "react";

function ShowGif() {
  const dispatch = useDispatch();
  const favoriteList = useSelector((store) => store.favoriteList);
  const categoryList = useSelector((store) => store.categoryList);

  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITE_LIST" });
  }, []);

  return (
    <>
      {/* IMG */}
      return (
      <Card sx={{ width: 500 }}>
        <CardMedia
          key={favoriteList.id}
          sx={{ height: 400 }}
          image={favoriteList?.images?.original?.url}
          title={favoriteList.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {favoriteList.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {favoriteList.description}
          </Typography>
        </CardContent>
        <CardActions>
        
        </CardActions>
      </Card>
      )
    </>
  );
}

export default ShowGif;
