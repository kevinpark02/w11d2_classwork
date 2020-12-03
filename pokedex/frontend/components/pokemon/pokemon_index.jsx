import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
      this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemons.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>
      )
    }
  }
  export default PokemonIndex;
  // <div>
  //   <h1>Pokemon Index</h1>
  //   <ul>
  //       {this.props.pokemons.map((pokemon) => {
  //         <PokemonIndexItem pokemon={pokemon}/>
  //                           // key={pokemon.id}/>
  //       })}
  //   </ul>
  // </div>