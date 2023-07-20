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


}; // end rootSaga


// SAGAS




// REDUCERS





// COMBINE THEM ALL

const sagaMiddleware = createSagaMiddleware();



const store = createStore(
    combineReducers({
        // lists
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
