export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

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
    return false;
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
    return false;
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
    return true;
  }

  if (
    typing === 'poison' &&
    (opponentTyping === 'grass' || opponentTyping === 'fairy')
  ) {
    return false;
  }

  if (typing === 'poison' && opponentTyping === 'steel') {
    return false;
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
    return false;
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
    return false;
  }

  if (typing === 'dragon' && opponentTyping === 'steel') {
    return true;
  }

  if (typing === 'dragon' && opponentTyping === 'dragon') {
    return false;
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

export const attack = ({ attacker, receiver }) => {
  //determine damage of attack based on stats
  <>
    <div className="base-stat">
      {receiver.stats.map(poke => {
        //store reciever's stats
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
      {attacker.stats.map(poke => {
        //store attacker's stats
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
  </>;

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
  var maxHp;

  var damage;

  //damage calculator

  if (playerAttack >= opponentDefense) {
    damage = (playerAttack * 2 - opponentDefense) / 2;
  } else {
    damage = (playerAttack * playerAttack) / opponentDefense / 2;
  }

  if (superEffective({ attacker, receiver }) === true) {
    return damage * 2;
  }
  if (nVEffective({ attacker, receiver }) === true) {
    return damage / 2;
  }
  if (notEffective({ attacker, receiver }) === true) {
    return 0;
  } else {
    return damage;
  }
};
export const special = ({ attacker, receiver }) => {
  //determine damage of special based on stats
  <>
    <div className="base-stat">
      {receiver.stats.map(poke => {
        //store reciever's stats
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
      {attacker.stats.map(poke => {
        //store attacker's stats
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
  </>;

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
  var maxHp;

  var damage;

  //damage calculator

  if (sAttack >= opponentSDefense) {
    damage = (sAttack * 2 - opponentSDefense) / 2;
  } else {
    damage = (sAttack * sAttack) / opponentSDefense / 2;
  }
  if (superEffective({ attacker, receiver }) === true) {
    return damage * 2;
  }
  if (nVEffective({ attacker, receiver }) === true) {
    return damage / 2;
  }
  if (notEffective({ attacker, receiver }) === true) {
    return 0;
  } else {
    return damage;
  }
};
export const heal = ({ receiver }) => {
  //determine healing based on maxHp
  <div className="base-stat">
    {receiver.stats.map(poke => {
      if (poke.stat.name === 'hp') {
        maxHp = poke.base_stat;
      }
    })}
  </div>;

  var maxHp;
  return maxHp / 2;
};

export const attack2 = ({ attacker, receiver }) => {
  //determine damage of attack2 based on stats
  <>
    <div className="base-stat">
      {receiver.stats.map(poke => {
        //store reciever's stats
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
      {attacker.stats.map(poke => {
        //store attacker's stats
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
  </>;

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
  var maxHp;

  var damage;

  //damage calculator

  if (playerAttack >= opponentDefense) {
    damage = (playerAttack * 2 - opponentDefense) / 2;
  } else {
    damage = (playerAttack * playerAttack) / opponentDefense / 2;
  }

  return damage;
};
