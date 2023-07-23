import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeLatest, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// Saga root generator function
function* rootSaga() {
  yield takeEvery("SEARCH_GIPHY", searchGiphy);
  yield takeLatest("ADD_FAVORITE", addFavorite);
  yield takeLatest('FETCH_FAVORITE_LIST', fetchFavoriteList)
  // yield takeLatest('FETCH_CATEGORY_LIST', fetchCategoryList)
  // yield takeLatest('UPDATE_CATEGORY', updateCategory)
  // yield takeLatest('REMOVE_FAVORITE', removeFavorite)
} // end rootSaga

/***** SAGAS ******/ 
// GET (from Giphy) - get request (from giphy api)
function* searchGiphy(action) {
  const searchQuery = action.payload;
//   console.log("searchQuery is", searchQuery);
  try {
    const giphySearchList = yield axios.get(`/api/search/${searchQuery}`);
    // console.log("giphySearchList is", giphySearchList);
    yield put({ type: "SET_GIPHY_LIST", payload: giphySearchList.data.data });
  } catch (err) {
    console.log("error getting giphy search", err);
  }
}


// TODO - GET fetch favorite list (from DB)
function* fetchFavoriteList(action) {
  console.log("fetch favs list was dispatched with:", action);
  try {
    const favoriteListResponse = yield axios.get("/api/favorite");
    yield put({ type: "SET_FAVORITE", payload: favoriteListResponse.data });
  } catch (err) {
    console.log("error with fetching favoritesList", err);
  }
}

// TODO - POST add favorite (post to DB)
function* addFavorite(action) {
    console.log("add favorite to favoriteList successful", action)
    try {
        yield axios.post('/api/favorite', action.payload)
        yield put({type: "ADD_FAVORITE"})
    } catch (err) {
        console.log('error adding giphy to favorite')
    }
}


// TODO - GET fetch category list
function* fetchCategoryList(action) {
  console.log("fetch category list was dispatched with:", action);
  try {
    const categoryListResponse = yield axios.get("/api/category");
    yield put({ type: "SET_CATEGORY", payload: categoryListResponse.data });
  } catch (err) {
    console.log("error with fetching category", err);
  }
}

// TODO - PUT update category of a favorite gif

// TODO - DELETE remove a favorite gif

/***** REDUCERS ******/
// TODO - STORE (Giphy results) - store giphy search results (from Giphy)
const giphySearchList = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHY_LIST":
      return action.payload;
    default:
      return state;
  }
};

// TODO - STORE storing list of favorite gifs (from DB)
const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return action.payload;
    default:
      return state;
  }
};

// TODO - STORE list of categories (from DB)
const categoryList = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

// COMBINE THEM ALL
const sagaMiddleware = createSagaMiddleware();

// STORE
const store = createStore(
  combineReducers({
    // lists
    favoriteList,
    categoryList,
    giphySearchList,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

// ROOT SAGA 
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
