import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useAIOpponent, useBattleSequence } from 'hooks';
import { wait } from 'shared';
import { BattleMenu, PlayerSummary, BattleAnnouncer } from 'components';
import sound from '../assets/BattleTheme.mp3';
import loss from '../assets/Run.mp3';
import win from '../assets/Victory2.mp3';

const oneCase = string => {
  // function to turn first letter of string capatilized
  var res = '';
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === '-' || string[i] === ' ') && // if string has '-' replace it with a space instead
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

let battleTheme = new Audio(sound);
let lossTheme = new Audio(loss);
let winTheme = new Audio(win);
battleTheme.volume = 0.15;

//functions to play audios
function themeStart() {
  battleTheme.play();
}

function themeReset() {
  battleTheme = new Audio(sound);
  battleTheme.volume = 0.15;
}

function themeStop() {
  battleTheme.pause();
}

function lossStart() {
  lossTheme.play();
}

function winStart() {
  winTheme.play();
}

function winStop() {
  winTheme.pause();
}

function winReset() {
  winTheme = new Audio(win);
  winTheme.volume = 0.15;
}

export const Battle = ({
  onGameEnd,
  onStartClick,
  data,
  opponentData,
  shiny,
  oppShiny,
}) => {
  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence(sequence, data, opponentData); //recieve info from useBattleSequence

  function stopAll() {
    //on exit stop all music
    themeStop();
    themeReset();
    winStop();
    winReset();
    if (playerHealth > 0 && opponentHealth > 0) {
      lossStart();
    }
    onStartClick(true);
  }

  const aiChoice = useAIOpponent(turn); //get opponent's attack choice

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice }); //use opponent's choice if turn is not 0 (player's turn)
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (opponentHealth === 0) {
      // play song if win
      (async () => {
        themeStop();
        themeReset();
        await wait(500);
        winStart();
        await wait(7000);
        onStartClick(true);
        onGameEnd(data);
      })();
    } else if (playerHealth === 0) {
      //play song if lose
      (async () => {
        await wait(2000);
        themeStop();
        themeReset();
        lossStart();
        onStartClick(true);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  var opponentHp;
  var opponentAttack;
  var opponentDefense;
  var opponentSAttack;
  var opponentSDefense;
  var opponentTyping;
  var opponentMaxHp;

  var hp;
  var attack;
  var defense;
  var sAttack;
  var sDefense;
  var typing;
  var maxHp;

  var playerSprite = '';
  var opponentSprite = '';
  var playerName = '';
  var opponentName = '';

  if (shiny && data) {
    playerSprite = `/shiny/${data.id}.png`;
    playerName = `Shiny ${oneCase(data.name)}`; //set player's sprite
  } else if (data) {
    playerSprite = `${data.id}.png`;
    playerName = `${data.name}`;
  }

  if (oppShiny && opponentData) {
    opponentSprite = `/shiny/${opponentData.id}.png`;
    opponentName = `Shiny ${oneCase(opponentData.name)}`; //set opponent's sprite
  } else if (data) {
    opponentSprite = `${opponentData.id}.png`;
    opponentName = `${opponentData.name}`;
  }
  if (playerHealth > 0 && opponentHealth > 0) {
    //start music
    themeStart();
  }
  var date = new Date();
  var hours = date.getHours();
  var background = '';

  if (hours < 6) {
    background = 'maxContainer3';
  } else if (hours > 6 && hours < 8) {
    background = 'maxContainer2';
  } else if (hours >= 8 && hours < 17) {
    background = 'maxContainer'; //change background based on hours
  } else if (hours >= 17 && hours < 19) {
    background = 'maxContainer2';
  } else if (hours <= 24) {
    background = 'maxContainer3';
  }

  var flying = 'flying';
  return (
    <>
      <div className={background}>
        <div className="base-stat">
          {opponentData.stats.map(poke => {
            //store opponent's data
            if (poke.stat.name === 'hp') {
              opponentHp = poke.base_stat;
              opponentMaxHp = poke.base_stat;
            }
            if (poke.stat.name === 'attack') {
              opponentAttack = poke.base_stat;
            }
            if (poke.stat.name === 'defense') {
              opponentDefense = poke.base_stat;
            }
            if (poke.stat.name === 'special-attack') {
              opponentSAttack = poke.base_stat;
            }
            if (poke.stat.name === 'special-defense') {
              opponentSDefense = poke.base_stat;
            }
          })}
        </div>

        <div className="base-stat">
          {data.stats.map(poke => {
            //store player's data
            if (poke.stat.name === 'hp') {
              hp = poke.base_stat;
              maxHp = poke.base_stat;
            }
            if (poke.stat.name === 'attack') {
              attack = poke.base_stat;
            }
            if (poke.stat.name === 'defense') {
              defense = poke.base_stat;
            }
            if (poke.stat.name === 'special-attack') {
              sAttack = poke.base_stat;
            }
            if (poke.stat.name === 'special-defense') {
              sDefense = poke.base_stat;
            }
          })}
        </div>

        <div className="typing">
          {data.types.map(poke => {
            if (poke.slot === 1) {
              typing = poke.type.name; // set player's type
            }
            if (
              poke.slot === 2 &&
              poke.type.name === flying && // some bird pokemon have normal typing
              typing === 'normal'
            ) {
              typing = 'flying';
            }
          })}
        </div>

        <div className="typing">
          {opponentData.types.map(poke => {
            if (poke.slot === 1) {
              opponentTyping = poke.type.name;
            }
            if (
              poke.slot === 2 &&
              poke.type.name === flying && // some bird pokemon have normal typing
              typing === 'normal'
            ) {
              typing = 'flying';
            }
          })}
        </div>

        <div className={styles.main}>
          <div className="ExitButtonContainer">
            <button className="exitButton" onClick={stopAll}>
              X
            </button>
          </div>

          <div className={styles.opponent}>
            <div className={styles.summary}>
              <PlayerSummary
                main={false}
                health={opponentHealth} //relay opponent's health stats to health bar
                name={oneCase(opponentName)}
                level={50}
                maxHealth={opponentMaxHp}
              />
            </div>
          </div>

          <div className={styles.characters}>
            <div className={styles.gameImages}>
              <div className={styles.playerSprite}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${playerSprite}`} //player's sprite
                  className={styles[playerAnimation]}
                />
              </div>
              <div className={styles.opponentSprite}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${opponentSprite}`} //opponent's sprite
                  className={styles[opponentAnimation]}
                />
              </div>
            </div>
          </div>

          <div className={styles.user}>
            <div className={styles.summary}>
              <PlayerSummary
                main={true}
                health={playerHealth} //relay player's health stats to health bar
                name={oneCase(playerName)}
                level={50}
                maxHealth={maxHp}
              />
            </div>

            <div className={styles.hud}>
              <div className={styles.hudChild}>
                <BattleAnnouncer
                  message={
                    announcerMessage ||
                    `What will ${oneCase(data.name)} do?` //turn is over, switch turns
                  }
                />
              </div>
              {!inSequence && turn === 0 && (
                <div className={styles.hudChild}>
                  <BattleMenu //display moveset, use moveset
                    onHeal={() => setSequence({ mode: 'heal', turn })}
                    onSpecial={() =>
                      setSequence({ mode: 'special', turn })
                    }
                    onAttack={() => setSequence({ mode: 'attack', turn })}
                    onAttack2={() =>
                      setSequence({ mode: 'attack2', turn })
                    }
                    typing={typing}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
