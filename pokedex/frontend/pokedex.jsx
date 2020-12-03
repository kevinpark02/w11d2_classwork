import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon} from './util/api_util';
import { selectAllPokemon }from './reducers/selectors';
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // FOR TESTING
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    // 




    ReactDOM.render(<Root store={store}/>, root)
})


// dispatched thunk action creator -> return thunk function requestalpokemon
// store
// middleware
// thunk middleware
// caught it because action is a type of function
// thunk initiating that call. 
// thunk invokes thunk action
// ajax call (fetchallpokemon)
// goes to rails routes
// goes to index method of pokemon cotroller based on path and method in ajax
// controllers perform something with database (CRUD)
// render index a jbuilder file
// formats json response to look like (normalize)
// goes back to the promise
// goes back to .then
// .then takes the response 
// invokes action creator creates a normal action
// dispatch normal action back to thunk middleware
// passes through. go to other middleware
// goes to reducers
// return a slice of state
// returns of those reducers that build state

// module build go check webpack
//Error: type error (function) is not a function
// Solution: put {}
