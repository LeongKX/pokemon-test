import React from "react";

function PokemonGrid(props) {
  const { pokemons } = props;

  return (
    <div className="pokemon-grid">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <p>Type:{pokemon.type}</p>
            <p>Level:{pokemon.level}</p>
          </div>
        ))
      ) : (
        <p>No pokemon found</p>
      )}
      {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}
    </div>
  );
}

export default PokemonGrid;
