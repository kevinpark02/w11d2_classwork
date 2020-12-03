import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
          let nextState = Object.assign({}, state, action.pokemon);
          return nextState;
        case RECEIVE_SINGLE_POKEMON:
          // how did we access the nextstate? is it because we did receiveallpokemon when we did reactdom.render?
          // you can either return this below or you can do return action.pokemon
          // OHHH I see.. nvm... we only define nextState in case 1. So you should just do "return action.pokemon"
          // nextState[action.pokemon.id]
          // return nextState;
          // oooooo thank you
          return action.pokemon;
        default:
            return state;
    }
}

export default pokemonReducer;