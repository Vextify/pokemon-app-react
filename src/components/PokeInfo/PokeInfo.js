import React, { useState } from 'react';
import bug from './pokeAssets/bug.png';
import dark from './pokeAssets/dark.png';
import dragon from './pokeAssets/dragon.png';
import electric from './pokeAssets/electric.png';
import fairy from './pokeAssets/fairy.png';
import fighting from './pokeAssets/fighting.png';
import fire from './pokeAssets/fire.png';
import flying from './pokeAssets/flying.png';
import ghost from './pokeAssets/ghost.png';
import grass from './pokeAssets/grass.png';
import ground from './pokeAssets/ground.png';
import ice from './pokeAssets/ice.png';
import normal from './pokeAssets/normal.png';
import poison from './pokeAssets/poison.png';
import psychic from './pokeAssets/psychic.png';
import rock from './pokeAssets/rock.png';
import steel from './pokeAssets/steel.png';
import water from './pokeAssets/water.png';

const oneCase = string => {
  // function to turn first letter of string capatilized
  var res = '';
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === '-' || string[i] === ' ') &&
      i + 1 < string.length
    ) {
      res += ' ';
      res += string.charAt(i + 1).toUpperCase();
      i++;
    } else {
      res += string.charAt(i);
    }
  }
  res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
};

export const PokeInfo = ({
  onStartClick,
  onClose,
  onReroll,
  data,
  opponentData,
}) => {
  console.log(data);

  var typing = '';

  var typingPic = typing => {
    // display typings to user
    if (typing === 'bug') {
      return bug;
    }
    if (typing === 'dark') {
      return dark;
    }
    if (typing === 'dragon') {
      return dragon;
    }
    if (typing === 'electric') {
      return electric;
    }
    if (typing === 'fairy') {
      return fairy;
    }
    if (typing === 'fighting') {
      return fighting;
    }
    if (typing === 'fire') {
      return fire;
    }
    if (typing === 'flying') {
      return flying;
    }
    if (typing === 'ghost') {
      return ghost;
    }
    if (typing === 'grass') {
      return grass;
    }
    if (typing === 'ground') {
      return ground;
    }
    if (typing === 'ice') {
      return ice;
    }
    if (typing === 'normal') {
      return normal;
    }
    if (typing === 'poison') {
      return poison;
    }
    if (typing === 'psychic') {
      return psychic;
    }
    if (typing === 'rock') {
      return rock;
    }
    if (typing === 'steel') {
      return steel;
    }
    if (typing === 'water') {
      return water;
    }
  };

  return (
    <>
      {!data ? (
        ''
      ) : (
        <>
          <button
            className="startButton"
            onClick={onStartClick} /* start game button */
          >
            <a>Start Game</a>
          </button>
          <button
            className="closeButton"
            onClick={onClose} /* start game button */
          >
            <a>X</a>
          </button>
          <div className="pokeContainer">
            <div className="mainPokeContainer">
              <h1>{data.name}</h1>
              {data && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} //display pokemon
                ></img>
              )}
              <div className="typing">
                {data.types.map(poke => {
                  //store typing
                  typing = poke.type.name;

                  return (
                    <img
                      className="typingPic"
                      src={typingPic(typing)}
                    ></img>
                  );
                })}
              </div>
              <div className="abilities">
                {data.abilities.map(poke => {
                  return (
                    // display pokemon abilities
                    <>
                      <div className="group">
                        <h2>{oneCase(poke.ability.name)}</h2>
                      </div>
                      <div>
                        <p> a</p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="base-stat">
                {data.stats.map(poke => {
                  //display pokemon stats
                  return (
                    <>
                      <h3>
                        {oneCase(poke.stat.name)}: {poke.base_stat}
                      </h3>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="secondPokeContainer" /* display opponent pokemon */
            >
              <br />
              <h3>Opponent: </h3>
              {data && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${opponentData.id}.png`}
                ></img>
              )}
              <button className="rerollButton" onClick={onReroll}>
                <a>Reroll</a>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
