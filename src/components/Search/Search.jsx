import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ariaLabel = { "aria-label": "description" };

function Search() {
  // useState
  let [newSearch, setSearch] = useState("");
  // useSelector
  const giphySearchList = useSelector((store) => store.giphySearchList);
  // useDispatch
  const dispatch = useDispatch();

  // handle input change
  function handleChange(e) {
    // set comments to input value
    setSearch(e.target.value);
  }

  // handle search submit
  const handleSearch = () => {
    // dispatch data to store
    dispatch({ type: "SEARCH_GIPHY", payload: newSearch });
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input
        type="text"
        style={{ minWidth: 300 }}
        label="Search"
        color="secondary"
        focused="true"
        placeholder="Search for your gif"
        inputProps={ariaLabel}
        value={newSearch}
        onChange={handleChange}
      />
      <Button  sx={{ fontFamily: "Rubik Bubbles" }} variant="contained" onClick={handleSearch}>
        Search
        <IconButton color="primary" aria-label="Search">
        <ImageSearchOutlinedIcon />
      </IconButton>
      </Button>
    </Box>
  );
}

export default Search;
