import styles from './styles.css';
import React, { useEffect } from 'react';
import { Card, PokeInfo } from 'components';
import axios from 'axios';
import { useState } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import { Battle } from 'components';

export const Main = () => {
  const [pokeData, setPokeData] = useState([]); // store card functions
  const [loading, setLoading] = useState(true); // lets all 1010 cards load before user interaction
  const [url] = useState('https://pokeapi.co/api/v2/pokemon/?limit=1010'); // fetches pokemon information for all 1010 pokemon
  const [pokeDex, setPokeDex] = useState(); // select user's pokemon
  const [opponent, setOpponent] = useState(); // select opponent's pokemon
  const [winner, setWinner] = useState(); //winner is used to increment win count
  const [mode, setMode] = useState('pokeInfo'); // mode switch to access different parts of app
  const [counter, setCounter] = useState(0); // win count

  const pokeFun = async () => {
    //fetch pokemon
    setLoading(true);
    const res = await axios.get(url);
    getPokemon(res.data.results);
    await wait(5000);
    setLoading(false);
  };

  const getPokemon = async res => {
    //store pokemon
    res.map(async item => {
      const result = await axios.get(item.url);
      setPokeData(state => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  var shiny = false;
  var oppShiny = false;

  if (Math.floor(Math.random() * 50) === 1) {
    // shiny probability for player's pokemon
    shiny = true;
  }

  if (Math.floor(Math.random() * 50) === 1) {
    // shiny probability for opponent's pokemon
    oppShiny = true;
  }

  var date = new Date(); // get date
  var hours = date.getHours(); // get hours
  var background = ''; // change background of app on hours

  if (hours < 6) {
    background = 'maxContainer3';
  } else if (hours > 6 && hours < 8) {
    background = 'maxContainer2';
  } else if (hours >= 8 && hours < 17) {
    background = 'maxContainer';
  } else if (hours >= 17 && hours < 19) {
    background = 'maxContainer2';
  } else if (hours <= 24) {
    background = 'maxContainer3';
  }

  var rightContent = '';

  if (pokeDex) {
    rightContent = 'right-content';
  } else {
    rightContent = 'right-content2';
  }

  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
      <div className={rightContent}>
        <div className="counterContainer">
          {
            mode === 'pokeInfo' && pokeDex && `👑: ${counter}` //win count
          }
        </div>
        <div className="counterContainer"></div>
        {mode === 'pokeInfo' && (
          <PokeInfo // pokemon information
            onStartClick={() => setMode('battle')}
            onClose={() => setPokeDex()}
            onReroll={() => setMode('reroll')}
            data={pokeDex}
            opponentData={opponent}
          />
        )}
        {
          mode === 'reroll' && (
            <>{setMode('pokeInfo')}</>
          ) /* lets user reroll opponent's pokemon */
        }
      </div>
      <div className={background}>
        <div className="container">
          <div className="left-content">
            {mode === 'pokeInfo' && (
              <Card //display 1010 cards
                pokemon={pokeData}
                loading={loading}
                infoPokemon={poke => setPokeDex(poke)}
                pickOpponent={poke => setOpponent(poke)}
                onSearchClick={() => setMode('reroll')}
              />
            )}
          </div>
        </div>

        <div className="battleScene">
          {mode === 'battle' && (
            <Battle //fighting mode
              onStartClick={() => setMode('pokeInfo')}
              onGameEnd={winner => {
                setWinner(winner);
                setCounter(counter + 1);
              }}
              data={pokeDex}
              opponentData={opponent}
              shiny={shiny}
              oppShiny={oppShiny}
            />
          )}
        </div>
      </div>
    </>
  );
};
