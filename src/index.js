import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//middleware
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import App from './App';

function* rootSaga() {
  yield takeEvery('GET_GARDEN', getGarden)
  yield takeEvery('ADD_PLANT', postPlant)
 
}
function* getGarden(){
  try{
    const plantResponse = yield axios.get('/api/plant')
    yield put({ type: 'SET_BASKET', payload: plantResponse.data });
    }
catch(error){
    console.log('error with garden get request', error);
};
}
function* postPlant(action){
  try{
    yield axios.post('/api/plant', action.payload)
    yield put({ type: 'SET_BASKET'});
    }
catch(error){
    console.log('error with garden post request', error);
};
}
const sagaMiddleware = createSagaMiddleware();

// this startingPlantArray should eventually be removed
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_BASKET':
      return  action.payload 
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
