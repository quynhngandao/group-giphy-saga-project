// Importing Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

// Importing CSS
import "../App/App.css";
import "./FavoriteGif.css";

export default function FavoritedGIF({ favoritedGIF }) {
  // SELECT DROPDOWN
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [categories, setCategory] = useState([]);
  const [favorite, setFavorite] = useState('');

  const giphySearchList = useSelector((store) => store.giphySearchList);
  // Categories
  const categorylist = useSelector((store) => store.categoryList);
  const categoryList = ["Meme", "Animals", "Food", "Art"];

  const dispatch = useDispatch();

  // Change category
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Submit search button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Submit favorite
  const HandleFavorite = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
    // clear input
    setFavorite("");
  };

  // DISPLAY
  return (
    <>
      {giphySearchList.map((gif) => {
        return (
          <Card sx={{ width: 500 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={gif?.images?.original?.url}
              title={gif.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {gif.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {gif.description}
              </Typography>
            </CardContent>
            <CardActions>
              {/* FAVORITE */}
              <IconButton size="small" onClick= {HandleFavorite}>
                <FavoriteBorderIcon />
              </IconButton>

              {/* DROPDOWN */}
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={categories}
                    onChange={handleChange}
                    input={<OutlinedInput label="Category" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {categoryList.map((category) => (
                      <MenuItem key={category} value={category}>
                        <Checkbox checked={categories.indexOf(category) > -1} />
                        <ListItemText primary={category} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* SUBMIT BUTTON */}
              <IconButton onClick={handleSubmit}>
                <SendIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
