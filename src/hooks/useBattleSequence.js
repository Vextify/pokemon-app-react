import { wait, special, heal, attack, attack2 } from 'shared';
import { useEffect, useState } from 'react';

const superEffective = ({ attacker, receiver }) => {
  // depending on typing determine x2 damage
  <>
    <div className="typing">
      {attacker.types.map(poke => {
        if (poke.slot === 1) {
          typing = poke.type.name;
        }
      })}
    </div>

    <div className="typing">
      {receiver.types.map(poke => {
        if (poke.slot === 1) {
          opponentTyping = poke.type.name;
        }
      })}
    </div>
  </>;

  var opponentTyping;
  var typing;

  if (typing === 'normal' && opponentTyping === 'ghost') {
    return false;
  }
  if (
    typing === 'normal' &&
    (opponentTyping === 'steel' || opponentTyping === 'rock')
  ) {
    return false;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'bug')
  ) {
    return true;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'bug')
  ) {
    return true;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'dragon' ||
      opponentTyping === 'steel;')
  ) {
    return false;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock')
  ) {
    return true;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'rock')
  ) {
    return true;
  }

  if (typing === 'electric' && opponentTyping === 'ground') {
    return false;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'ice')
  ) {
    return false;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'dragon')
  ) {
    return true;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'normal' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dark')
  ) {
    return true;
  }

  if (typing === 'fighting' && opponentTyping === 'ghost') {
    return false;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'posion' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'grass' || opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (typing === 'poison' && opponentTyping === 'steel') {
    return false;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'grass' || opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return true;
  }

  if (typing === 'ground' && opponentTyping === 'flying') {
    return false;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'electric' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'bug')
  ) {
    return true;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'psychic' || opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'poison' || opponentTyping === 'fighting')
  ) {
    return true;
  }

  if (typing === 'psychic' && opponentTyping === 'dark') {
    return false;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'dark')
  ) {
    return true;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug')
  ) {
    return true;
  }

  if (typing === 'ghost' && opponentTyping === 'dark') {
    return false;
  }

  if (
    typing === 'ghost' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return true;
  }

  if (typing === 'ghost' && opponentTyping === 'normal') {
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'steel') {
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'dragon') {
    return true;
  }

  if (typing === 'dragon' && opponentTyping === 'fairy') {
    return false;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'dark' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return true;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'ice' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'dragon')
  ) {
    return true;
  }
};

const nVEffective = ({ attacker, receiver }) => {
  // depending on typing determine /2 damage
  <>
    <div className="typing">
      {attacker.types.map(poke => {
        if (poke.slot === 1) {
          typing = poke.type.name;
        }
      })}
    </div>

    <div className="typing">
      {receiver.types.map(poke => {
        if (poke.slot === 1) {
          opponentTyping = poke.type.name;
        }
      })}
    </div>
  </>;

  var opponentTyping;
  var typing;

  if (typing === 'normal' && opponentTyping === 'ghost') {
    return true;
  }
  if (
    typing === 'normal' &&
    (opponentTyping === 'steel' || opponentTyping === 'rock')
  ) {
    return true;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dragon')
  ) {
    return true;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'dragon')
  ) {
    return true;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'dragon' ||
      opponentTyping === 'steel;')
  ) {
    return true;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock')
  ) {
    return false;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'dragon')
  ) {
    return true;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'rock')
  ) {
    return false;
  }

  if (typing === 'electric' && opponentTyping === 'ground') {
    return true;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'ice')
  ) {
    return true;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'normal' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dark')
  ) {
    return false;
  }

  if (typing === 'fighting' && opponentTyping === 'ghost') {
    return true;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'posion' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'grass' || opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (typing === 'poison' && opponentTyping === 'steel') {
    return true;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'grass' || opponentTyping === 'bug')
  ) {
    return true;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (typing === 'ground' && opponentTyping === 'flying') {
    return true;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'electric' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return true;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'psychic' || opponentTyping === 'steel')
  ) {
    return true;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'poison' || opponentTyping === 'fighting')
  ) {
    return false;
  }

  if (typing === 'psychic' && opponentTyping === 'steel') {
    return true;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'dark')
  ) {
    return false;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'steel')
  ) {
    return true;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (typing === 'ghost' && opponentTyping === 'dark') {
    return true;
  }

  if (
    typing === 'ghost' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return false;
  }

  if (typing === 'ghost' && opponentTyping === 'normal') {
    return true;
  }

  if (typing === 'dragon' && opponentTyping === 'steel') {
    return true;
  }

  if (typing === 'dragon' && opponentTyping === 'dragon') {
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'fairy') {
    return true;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'dark' ||
      opponentTyping === 'fairy')
  ) {
    return true;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return false;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'steel')
  ) {
    return true;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'ice' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'steel')
  ) {
    return true;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }
};

const notEffective = ({ attacker, receiver }) => {
  // depending on typing determine 0 damage
  <>
    <div className="typing">
      {attacker.types.map(poke => {
        if (poke.slot === 1) {
          typing = poke.type.name;
        }
      })}
    </div>

    <div className="typing">
      {receiver.types.map(poke => {
        if (poke.slot === 1) {
          opponentTyping = poke.type.name;
        }
      })}
    </div>
  </>;

  var opponentTyping;
  var typing;

  if (typing === 'normal' && opponentTyping === 'ghost') {
    return true;
  }
  if (
    typing === 'normal' &&
    (opponentTyping === 'steel' || opponentTyping === 'rock')
  ) {
    return false;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'fire' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'water' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'grass' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'dragon' ||
      opponentTyping === 'steel;')
  ) {
    return false;
  }

  if (
    typing === 'grass' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock')
  ) {
    return false;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'electric' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'rock')
  ) {
    return false;
  }

  if (typing === 'electric' && opponentTyping === 'ground') {
    return true;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'ice')
  ) {
    return false;
  }

  if (
    typing === 'ice' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'bug' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'fighting' &&
    (opponentTyping === 'normal' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'dark')
  ) {
    return false;
  }

  if (typing === 'fighting' && opponentTyping === 'ghost') {
    return true;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'posion' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'grass' || opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (typing === 'poison' && opponentTyping === 'steel') {
    return true;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'grass' || opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'ground' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (typing === 'ground' && opponentTyping === 'flying') {
    return true;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'electric' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'flying' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'psychic' || opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'psychic' &&
    (opponentTyping === 'poison' || opponentTyping === 'fighting')
  ) {
    return false;
  }

  if (typing === 'psychic' && opponentTyping === 'dark') {
    return true;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'fighting' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'steel' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'bug' &&
    (opponentTyping === 'grass' ||
      opponentTyping === 'psychic' ||
      opponentTyping === 'dark')
  ) {
    return false;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ground' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'rock' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'ice' ||
      opponentTyping === 'flying' ||
      opponentTyping === 'bug')
  ) {
    return false;
  }

  if (typing === 'ghost' && opponentTyping === 'dark') {
    return false;
  }

  if (
    typing === 'ghost' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return false;
  }

  if (typing === 'ghost' && opponentTyping === 'normal') {
    return true;
  }

  if (typing === 'dragon' && opponentTyping === 'steel') {
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'dragon') {
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'fairy') {
    return true;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'dark' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'dark' &&
    (opponentTyping === 'psychic' || opponentTyping === 'ghost')
  ) {
    return false;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'fire' ||
      opponentTyping === 'water' ||
      opponentTyping === 'electric' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'steel' &&
    (opponentTyping === 'ice' ||
      opponentTyping === 'rock' ||
      opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'water' ||
      opponentTyping === 'poison' ||
      opponentTyping === 'steel')
  ) {
    return false;
  }

  if (
    typing === 'fairy' &&
    (opponentTyping === 'fighting' ||
      opponentTyping === 'ghost' ||
      opponentTyping === 'dragon')
  ) {
    return false;
  }
};

const attackMove = ({ typing }) => {
  //attack move depending on typing for player
  var name;
  if (typing === 'normal') {
    name = 'Slash';
    return name;
  }
  if (typing === 'fire') {
    name = 'Flame Wheel';
    return name;
  }
  if (typing === 'water') {
    name = 'Aqua Jet';
    return name;
  }
  if (typing === 'grass') {
    name = 'Leaf Blade';
    return name;
  }
  if (typing === 'electric') {
    name = 'Volt Tackle';
    return name;
  }
  if (typing === 'ice') {
    name = 'Avalanche';
    return name;
  }
  if (typing === 'fighting') {
    name = 'Close Combat';
    return name;
  }
  if (typing === 'ground') {
    name = 'Earthquake';
    return name;
  }
  if (typing === 'flying') {
    name = 'Aerial Ace';
    return name;
  }
  if (typing === 'psychic') {
    name = 'Zen Headbutt';
    return name;
  }
  if (typing === 'bug') {
    name = 'Bug Bite';
    return name;
  }
  if (typing === 'rock') {
    name = 'Rock Slide';
    return name;
  }
  if (typing === 'ghost') {
    name = 'Shadow Claw';
    return name;
  }
  if (typing === 'dragon') {
    name = 'Dragon Claw';
    return name;
  }
  if (typing === 'poison') {
    name = 'Gunk Shot';
    return name;
  }
  if (typing === 'dark') {
    name = 'Night Slash';
    return name;
  }
  if (typing === 'steel') {
    name = 'Iron Head';
    return name;
  }
  if (typing === 'fairy') {
    name = 'Play Rough';
    return name;
  } else return '...';
};

const attackMove2 = ({ opponentTyping }) => {
  //attack move depending on typing for opponent
  var name;
  if (opponentTyping === 'normal') {
    name = 'Slash';
    return name;
  }
  if (opponentTyping === 'fire') {
    name = 'Flame Wheel';
    return name;
  }
  if (opponentTyping === 'water') {
    name = 'Aqua Jet';
    return name;
  }
  if (opponentTyping === 'grass') {
    name = 'Leaf Blade';
    return name;
  }
  if (opponentTyping === 'electric') {
    name = 'Volt Tackle';
    return name;
  }
  if (opponentTyping === 'ice') {
    name = 'Avalanche';
    return name;
  }
  if (opponentTyping === 'fighting') {
    name = 'Close Combat';
    return name;
  }
  if (opponentTyping === 'ground') {
    name = 'Earthquake';
    return name;
  }
  if (opponentTyping === 'flying') {
    name = 'Aerial Ace';
    return name;
  }
  if (opponentTyping === 'psychic') {
    name = 'Zen Headbutt';
    return name;
  }
  if (opponentTyping === 'bug') {
    name = 'Bug Bite';
    return name;
  }
  if (opponentTyping === 'rock') {
    name = 'Rock Slide';
    return name;
  }
  if (opponentTyping === 'ghost') {
    name = 'Shadow Claw';
    return name;
  }
  if (opponentTyping === 'dragon') {
    name = 'Dragon Claw';
    return name;
  }
  if (opponentTyping === 'poison') {
    name = 'Gunk Shot';
    return name;
  }
  if (opponentTyping === 'dark') {
    name = 'Night Slash';
    return name;
  }
  if (opponentTyping === 'steel') {
    name = 'Iron Head';
    return name;
  }
  if (opponentTyping === 'fairy') {
    name = 'Play Rough';
    return name;
  } else return '...';
};

const specialMove = ({ typing }) => {
  //special move depending on typing for player
  var name;
  if (typing === 'normal') {
    name = 'Swift';
    return name;
  }
  if (typing === 'fire') {
    name = 'Flamethrower';
    return name;
  }
  if (typing === 'water') {
    name = 'Hydro Pump';
    return name;
  }
  if (typing === 'grass') {
    name = 'Leaf Storm';
    return name;
  }
  if (typing === 'electric') {
    name = 'Thunderbolt';
    return name;
  }
  if (typing === 'ice') {
    name = 'Blizzard';
    return name;
  }
  if (typing === 'fighting') {
    name = 'Aura Sphere';
    return name;
  }
  if (typing === 'ground') {
    name = 'Earth Power';
    return name;
  }
  if (typing === 'flying') {
    name = 'Hurricane';
    return name;
  }
  if (typing === 'psychic') {
    name = 'Psychic';
    return name;
  }
  if (typing === 'bug') {
    name = 'Bug Buzz';
    return name;
  }
  if (typing === 'rock') {
    name = 'Ancient Power';
    return name;
  }
  if (typing === 'ghost') {
    name = 'Shadow Ball';
    return name;
  }
  if (typing === 'dragon') {
    name = 'Draco Meteor';
    return name;
  }
  if (typing === 'poison') {
    name = 'Sludge Bomb';
    return name;
  }
  if (typing === 'dark') {
    name = 'Dark Pulse';
    return name;
  }
  if (typing === 'steel') {
    name = 'Flash Cannon';
    return name;
  }
  if (typing === 'fairy') {
    name = 'Dazzling Gleam';
    return name;
  } else return '...';
};

const specialMove2 = ({ opponentTyping }) => {
  //attack move depending on typing for opponent
  var name;
  if (opponentTyping === 'normal') {
    name = 'Swift';
    return name;
  }
  if (opponentTyping === 'fire') {
    name = 'Flamethrower';
    return name;
  }
  if (opponentTyping === 'water') {
    name = 'Hydro Pump';
    return name;
  }
  if (opponentTyping === 'grass') {
    name = 'Leaf Storm';
    return name;
  }
  if (opponentTyping === 'electric') {
    name = 'Thunderbolt';
    return name;
  }
  if (opponentTyping === 'ice') {
    name = 'Blizzard';
    return name;
  }
  if (opponentTyping === 'fighting') {
    name = 'Aura Sphere';
    return name;
  }
  if (opponentTyping === 'ground') {
    name = 'Earth Power';
    return name;
  }
  if (opponentTyping === 'flying') {
    name = 'Hurricane';
    return name;
  }
  if (opponentTyping === 'psychic') {
    name = 'Psychic';
    return name;
  }
  if (opponentTyping === 'bug') {
    name = 'Bug Buzz';
    return name;
  }
  if (opponentTyping === 'rock') {
    name = 'Ancient Power';
    return name;
  }
  if (opponentTyping === 'ghost') {
    name = 'Shadow Ball';
    return name;
  }
  if (opponentTyping === 'dragon') {
    name = 'Draco Meteor';
    return name;
  }
  if (opponentTyping === 'poison') {
    name = 'Sludge Bomb';
    return name;
  }
  if (opponentTyping === 'dark') {
    name = 'Dark Pulse';
    return name;
  }
  if (opponentTyping === 'steel') {
    name = 'Flash Cannon';
    return name;
  }
  if (opponentTyping === 'fairy') {
    name = 'Dazzling Gleam';
    return name;
  } else return '...';
};

const healMove = ({ typing }) => {
  // healing move depending on typing for player
  var name;
  if (typing === 'normal') {
    name = 'Recover';
    return name;
  }
  if (typing === 'fire') {
    name = 'Morning Sun';
    return name;
  }
  if (typing === 'water') {
    name = 'Aqua Ring';
    return name;
  }
  if (typing === 'grass') {
    name = 'Synthesis';
    return name;
  }
  if (typing === 'electric') {
    name = 'Recover';
    return name;
  }
  if (typing === 'ice') {
    name = 'Aqua Ring';
    return name;
  }
  if (typing === 'fighting') {
    name = 'Morning Sun';
    return name;
  }
  if (typing === 'ground') {
    name = 'Recover';
    return name;
  }
  if (typing === 'flying') {
    name = 'Roost';
    return name;
  }
  if (typing === 'psychic') {
    name = 'Moonlight';
    return name;
  }
  if (typing === 'bug') {
    name = 'Pollen Puff';
    return name;
  }
  if (typing === 'rock') {
    name = 'Recover';
    return name;
  }
  if (typing === 'ghost') {
    name = 'Moonlight';
    return name;
  }
  if (typing === 'dragon') {
    name = 'Aqua Ring';
    return name;
  }
  if (typing === 'poison') {
    name = 'Purify';
    return name;
  }
  if (typing === 'dark') {
    name = 'Moonlight';
    return name;
  }
  if (typing === 'steel') {
    name = 'Recover';
    return name;
  }
  if (typing === 'fairy') {
    name = 'Moonlight';
    return name;
  } else return '...';
};

const healMove2 = ({ opponentTyping }) => {
  //healing move depending on typing for opponent
  var name;
  if (opponentTyping === 'normal') {
    name = 'Recover';
    return name;
  }
  if (opponentTyping === 'fire') {
    name = 'Morning Sun';
    return name;
  }
  if (opponentTyping === 'water') {
    name = 'Aqua Ring';
    return name;
  }
  if (opponentTyping === 'grass') {
    name = 'Synthesis';
    return name;
  }
  if (opponentTyping === 'electric') {
    name = 'Recover';
    return name;
  }
  if (opponentTyping === 'ice') {
    name = 'Aqua Ring';
    return name;
  }
  if (opponentTyping === 'fighting') {
    name = 'Morning Sun';
    return name;
  }
  if (opponentTyping === 'ground') {
    name = 'Recover';
    return name;
  }
  if (opponentTyping === 'flying') {
    name = 'Roost';
    return name;
  }
  if (opponentTyping === 'psychic') {
    name = 'Moonlight';
    return name;
  }
  if (opponentTyping === 'bug') {
    name = 'Pollen Puff';
    return name;
  }
  if (opponentTyping === 'rock') {
    name = 'Recover';
    return name;
  }
  if (opponentTyping === 'ghost') {
    name = 'Moonlight';
    return name;
  }
  if (opponentTyping === 'dragon') {
    name = 'Aqua Ring';
    return name;
  }
  if (opponentTyping === 'dark') {
    name = 'Moonlight';
    return name;
  }
  if (opponentTyping === 'steel') {
    name = 'Recover';
    return name;
  }
  if (opponentTyping === 'fairy') {
    name = 'Moonlight';
    return name;
  } else return '...';
};

const attack2Move = ({ typing }) => {
  //second version of attack move depending on typing for player
  var name;
  if (typing === 'normal') {
    name = 'Quick Attack';
    return name;
  }
  if (typing === 'fire') {
    name = 'Mega Kick';
    return name;
  }
  if (typing === 'water') {
    name = 'Rapid Spin';
    return name;
  }
  if (typing === 'grass') {
    name = 'Slam';
    return name;
  }
  if (typing === 'electric') {
    name = 'Extreme Speed';
    return name;
  }
  if (typing === 'ice') {
    name = 'Slam';
    return name;
  }
  if (typing === 'fighting') {
    name = 'Strength';
    return name;
  }
  if (typing === 'ground') {
    name = 'Body Slam';
    return name;
  }
  if (typing === 'flying') {
    name = 'Quick Attack';
    return name;
  }
  if (typing === 'psychic') {
    name = 'Facade';
    return name;
  }
  if (typing === 'bug') {
    name = 'Headbutt';
    return name;
  }
  if (typing === 'rock') {
    name = 'Headbutt';
    return name;
  }
  if (typing === 'ghost') {
    name = 'Facade';
    return name;
  }
  if (typing === 'dragon') {
    name = 'Extreme Speed';
    return name;
  }
  if (typing === 'poison') {
    name = 'Facade';
    return name;
  }
  if (typing === 'dark') {
    name = 'Facade';
    return name;
  }
  if (typing === 'steel') {
    name = 'Headbutt';
    return name;
  }
  if (typing === 'fairy') {
    name = 'Facade';
    return name;
  } else return '...';
};

const attack2Move2 = ({ opponentTyping }) => {
  //second version of attack move depending on typing for opponent
  var name;
  if (opponentTyping === 'normal') {
    name = 'Quick Attack';
    return name;
  }
  if (opponentTyping === 'fire') {
    name = 'Mega Kick';
    return name;
  }
  if (opponentTyping === 'water') {
    name = 'Rapid Spin';
    return name;
  }
  if (opponentTyping === 'grass') {
    name = 'Slam';
    return name;
  }
  if (opponentTyping === 'electric') {
    name = 'Extreme Speed';
    return name;
  }
  if (opponentTyping === 'ice') {
    name = 'Slam';
    return name;
  }
  if (opponentTyping === 'fighting') {
    name = 'Strength';
    return name;
  }
  if (opponentTyping === 'ground') {
    name = 'Body Slam';
    return name;
  }
  if (opponentTyping === 'flying') {
    name = 'Quick Attack';
    return name;
  }
  if (opponentTyping === 'psychic') {
    name = 'Facade';
    return name;
  }
  if (opponentTyping === 'bug') {
    name = 'Headbutt';
    return name;
  }
  if (opponentTyping === 'rock') {
    name = 'Headbutt';
    return name;
  }
  if (opponentTyping === 'ghost') {
    name = 'Facade';
    return name;
  }
  if (opponentTyping === 'dragon') {
    name = 'Extreme Speed';
    return name;
  }
  if (opponentTyping === 'poison') {
    name = 'Facade';
    return name;
  }
  if (opponentTyping === 'dark') {
    name = 'Facade';
    return name;
  }
  if (opponentTyping === 'steel') {
    name = 'Headbutt';
    return name;
  }
  if (opponentTyping === 'fairy') {
    name = 'Facade';
    return name;
  } else return '...';
};

const oneCase = string => {
  // function to turn first letter of string capatilized
  var res = '';
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === '-' || string[i] === ' ') &&
      i + 1 < string.length
    ) {
      res += string.charAt(i).toUpperCase();
      res += string.charAt(i + 1).toUpperCase();
      i++;
    } else {
      res += string.charAt(i);
    }
  }
  res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
};

export const useBattleSequence = (sequence, data, opponentData) => {
  var opponentHp;
  var opponentAttack;
  var opponentDefense;
  var opponentSAttack;
  var opponentSDefense;

  var opponentMaxHp;

  var hp;
  var playerAttack;
  var defense;
  var sAttack;
  var sDefense;
  var opponentTyping;
  var typing;
  var maxHp;

  var announcerMove;

  var flying = 'flying';

  <>
    <div className="base-stat">
      {opponentData.stats.map(poke => {
        //store opponent's stats
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
        //store players's stats
        if (poke.stat.name === 'hp') {
          hp = poke.base_stat;
          maxHp = poke.base_stat;
        }
        if (poke.stat.name === 'attack') {
          playerAttack = poke.base_stat;
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

    <div className="typing2">
      {data.types.map(poke => {
        if (poke.slot === 1) {
          typing = poke.type.name;
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
  </>;

  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);

  const [playerHealth, setPlayerHealth] = useState(maxHp);
  const [opponentHealth, setOpponentHealth] = useState(opponentMaxHp);

  const [announcerMessage, setAnnouncerMessage] = useState('');
  const [playerAnimation, setPlayerAnimation] = useState('static');
  const [opponentAnimation, setOpponentAnimation] = useState('static');

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? data : opponentData; //set attacker and reciever
      const receiver = turn === 0 ? opponentData : data;

      switch (mode) {
        case 'attack': {
          //if attack display animation and determine damage
          if (opponentHealth === 0) {
            break;
          }
          const damage = attack({ attacker, receiver });

          (async () => {
            turn === 0
              ? (announcerMove = attackMove({ typing }))
              : (announcerMove = attackMove2({ opponentTyping }));
            setInSequence(true);
            setAnnouncerMessage(
              `${oneCase(
                attacker.name,
              )} has chosen to use ${announcerMove}!`,
            );
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
            if (superEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(`It's super effective!`);
              await wait(1000);
            }
            if (nVEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(`It's not very effective.`);
              await wait(1000);
            }
            if (notEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(
                `It doesnt't affect the opposing Pokémon`,
              );
              await wait(1000);
            }
            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait(2000);

            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case 'special': {
          //if special display animation and determine damage
          if (opponentHealth === 0) {
            break;
          }
          const damage = special({ attacker, receiver });

          (async () => {
            turn === 0
              ? (announcerMove = specialMove({ typing }))
              : (announcerMove = specialMove2({ opponentTyping }));
            setInSequence(true);
            setAnnouncerMessage(
              `${oneCase(
                attacker.name,
              )} has chosen to use ${announcerMove}!`,
            );
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('special')
              : setOpponentAnimation('special');
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');

            if (superEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(`It's super effective!`);
              await wait(1000);
            }
            if (nVEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(`It's not very effective.`);
              await wait(1000);
            }
            if (notEffective({ attacker, receiver }) === true) {
              setAnnouncerMessage(
                `It doesnt't affect the opposing Pokémon`,
              );
              await wait(1000);
            }

            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait(2500);

            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case 'heal': {
          //if heal display animation and determine health increase
          if (opponentHealth === 0) {
            break;
          }
          const recovered = heal({ receiver: attacker });

          (async () => {
            turn === 0
              ? (announcerMove = healMove({ typing }))
              : (announcerMove = healMove2({ opponentTyping }));
            setInSequence(true);
            setAnnouncerMessage(
              `${oneCase(
                attacker.name,
              )} has chosen to use ${announcerMove}!`,
            );
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('special')
              : setOpponentAnimation('special');
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait(500);

            setAnnouncerMessage(
              `${oneCase(attacker.name)} has recovered health.`,
            );
            turn === 0
              ? setPlayerHealth(h =>
                  h + recovered <= maxHp ? h + recovered : maxHp,
                )
              : setOpponentHealth(h =>
                  h + recovered <= opponentMaxHp
                    ? h + recovered
                    : opponentMaxHp,
                ); // We don't want to set HP more than the max
            await wait(2500);

            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case 'attack2': {
          //if attack2 display animation and determine damage
          if (opponentHealth === 0) {
            break;
          }
          const damage = attack2({ attacker, receiver });

          (async () => {
            turn === 0
              ? (announcerMove = attack2Move({ typing }))
              : (announcerMove = attack2Move2({ opponentTyping }));
            setInSequence(true);
            setAnnouncerMessage(
              `${oneCase(
                attacker.name,
              )} has chosen to use ${announcerMove}!`,
            );
            await wait(1000);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');

            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait(2000);

            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        default:
          break;
      }
    }
  }, [sequence]);

  return {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  };
};
