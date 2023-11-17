import React from 'react';
import gif from '../assets/pokeball.gif';

const oneCase = string => {
  // function to turn first letter of string capatilized
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var character = 'ph';
var backdrop = 'card';

export const Card = ({
  pokemon,
  loading,
  infoPokemon,
  pickOpponent,
  onSearchClick,
}) => {
  console.log(pokemon);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      onSearchClick(true);
    }
  };

  return (
    <>
      <input
        onInput={e => (character = e.target.value)} //search bar input
        type="text"
        id="searchBar"
        name="searchBar"
        placeholder="Search"
        onKeyDown={handleKeyDown}
      ></input>

      <div className="searchButton">
        <button onClick={onSearchClick} /* when clicked, search */>
          🔎
        </button>
      </div>

      {loading ? (
        <div
          className="loadingScreen" /* lets all cards load before user interaction */
        >
          <img src={gif}></img>
          <h1>Loading...</h1>
        </div>
      ) : (
        pokemon.map(item => {
          if (Math.floor(Math.random() * 1010) === 1) {
            //pick opponent randomly out of 1010 pokemon
            pickOpponent(item);
          }

          if (item.name.toUpperCase() === character.toUpperCase()) {
            // change card display off of search
            backdrop = 'searchCard';
          } else if (character === 'ph') {
            backdrop = 'card';
          } else if (character === '') {
            character = 'ph';
          } else {
            backdrop = 'noShow';
          }

          return (
            //display card
            <>
              <div>
                <div
                  className={backdrop}
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                >
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{oneCase(item.name)}</h2>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
