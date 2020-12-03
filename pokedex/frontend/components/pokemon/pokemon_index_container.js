import { connect } from "react-redux";
import { requestAllPokemon } from "../../actions/pokemon_actions";
import { selectAllPokemon } from "../../reducers/selectors";
import PokemonIndex from "./pokemon_index";

const mapStateToProps = state => {
    // debugger
    return {
      pokemons: selectAllPokemon(state) // array of all pokemons
    };
}; 

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);