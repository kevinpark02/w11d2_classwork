import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// FOR TESTING
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon} from './util/api_util';
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // FOR TESTING
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // 




    ReactDOM.render(<h1>Pokedex</h1>, root)
})