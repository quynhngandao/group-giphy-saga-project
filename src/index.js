import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';



// Saga root generator function
function* rootSaga() {
    yield takeLatest('SEARCH_GIPHY', searchGiphy)
    yield takeLatest('ADD_FAVORITE', addFavorite)
    yield takeLatest('FETCH_FAVORITE_LIST', fetchFavoriteList)
    yield takeLatest('FETCH_CATEGORY_LIST', fetchCategoryList)
    yield takeLatest('UPDATE_CATEGORY', updateCategory)
    yield takeLatest('REMOVE_FAVORITE', removeFavorite)
}; // end rootSaga


// SAGAS

// TODO - GET (from Giphy) - get request (from giphy api)

// TODO - POST add favorite (post to DB)

// TODO - GET fetch favorite list (from DB)
function* fetchFavoriteList(action) {
    console.log('fetch favs list was dispatched with:', action);
    try {
        const favoriteListResponse = yield axios.get('/api/favorites')
        yield put({ type: 'SET_FAVORITE', payload: favoriteListResponse.data })
    } catch (err) {
        console.log('error with fetching favoritesList', err);
    }
}
// TODO - GET fetch category list
function* fetchCategoryList(action) {
    console.log('fetch category list was dispatched with:', action);
    try {
        const categoryListResponse = yield axios.get('/api/category')
        yield put({ type: 'SET_CATEGORY', payload: categoryListResponse.data })
    } catch (err) {
        console.log('error with fetching category', err);
    }
}
// TODO - PUT update category of a favorite gif

// TODO - DELETE remove a favorite gif

// REDUCERS

// TODO - STORE (Giphy results) - store giphy search results (from Giphy)

// TODO - STORE storing list of favorite gifs (from DB)
const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload
        default:
            return state
    }
}
// TODO - STORE list of categories (from DB) 
const categoryList = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload
        default:
            return state
    }
}


// COMBINE THEM ALL

const sagaMiddleware = createSagaMiddleware();



const store = createStore(
    combineReducers({
        // lists
        favoriteList,
        categoryList,
        giphySearchList

    }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
