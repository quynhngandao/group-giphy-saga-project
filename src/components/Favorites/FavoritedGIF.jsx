// Importing Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
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

  const giphySearchList = useSelector((store) => store.giphySearchList);

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

  // Submit button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Categories
  const categoryList = ["Meme", "Animals", "Food", "Art"];
  // useSelector
  // const categoryList = useSelector(store => store.categoryList)

  // DISPLAY
  return (
    <>
   
       {giphySearchList.map(gif => {
        return (
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          sx={{ height: 300 }}
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
          <IconButton size="small">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton size="small">
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
          </IconButton>
          {/* SUBMIT BUTTON */}
          <IconButton onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </CardActions>
      </Card>
      )
    })
    }
    </>
  );
}
