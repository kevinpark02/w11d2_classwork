export const fetchAllPokemon = () => {
  return $.ajax ({
    url: '/api/pokemon',
    method: 'GET'
  })
}

//identify where pokemonId comes from
//potential area: url we called it :pokemondId
export const fetchPokemon = (pokemonId) => {
  return $.ajax ({
    url: `/api/pokemon/${pokemonId}`,
    method: 'GET'
  })
}


