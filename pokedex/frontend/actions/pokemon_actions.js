export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
  // contains id of pokemon as a key (id) AND the actual pokemon object as a value (id, name, imgurl)
});