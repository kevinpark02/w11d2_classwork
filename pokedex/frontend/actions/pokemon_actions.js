import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
  // contains id of pokemon as a key (id) AND the actual pokemon object as a value (id, name, imgurl)

});

export const receiveSinglePokemon = (pokemon) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon

})

export const requestAllPokemon = () => (dispatch) =>
  APIUtil.fetchAllPokemon().then((pokemon) =>
    dispatch(receiveAllPokemon(pokemon))
);

export const requestSinglePokemon = (pokemon) => (dispatch) => {
  APIUtil.fetchPokemon(pokemon).then((pokemon) => 
    dispatch(receiveSinglePokemon(pokemon)))
}

// Dispatched requestAllPokemon (this is a thunkaction creater... we are invoking it... and dispatching the reutrn value for requestAllPokemon)
// Then it goes to the store
// Then it goes to the thunk middleware
// Then it thunk middleware sends invokes ajax request
// Then it goes to rails router
// Then it goes to the index controller pokemon based on the path and method that we provide
// index method... it gets all the seeded data
// rendering :index (jbuilder)
// jbuilder... it formats how the json response will look
// then it goes back to the promise, and with the .then
// .then takes the response and dispatch... invokes the action creator, and it dispatches the normal action
// back to the middleware and then it goes to reducers
// reducers return a slice of state
