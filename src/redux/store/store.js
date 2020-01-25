import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  notes: []
}


let notes = localStorage.getItem('notes')
if (notes) {
initialState.notes = JSON.parse(notes)
}

export default createStore( 
  rootReducer, 
  initialState,
// initialState คือ state  เริ่มต้น 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // develop tool  มาจาก https://github.com/zalmoxisus/redux-devtools-extension#usage
);