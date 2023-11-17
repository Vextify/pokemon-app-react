import styles from './styles.module.css';

export const BattleMenu = ({
  onAttack,
  onSpecial,
  onHeal,
  onAttack2,
  typing,
}) => {
  // display different move names depending on typing
  if (typing === 'grass') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.grassOption}>
          Leaf Blade
        </div>
        <div onClick={onSpecial} className={styles.grassOption}>
          Leaf Storm
        </div>
        <div onClick={onHeal} className={styles.grassOption}>
          Synthesis
        </div>
        <div onClick={onAttack2} className={styles.grassOption}>
          Slam
        </div>
      </div>
    );
  }
  if (typing === 'bug') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.bugOption}>
          <p>Bug Bite</p>
        </div>
        <div onClick={onSpecial} className={styles.bugOption}>
          Bug Buzz
        </div>
        <div onClick={onHeal} className={styles.bugOption}>
          Pollen Puff
        </div>
        <div onClick={onAttack2} className={styles.bugOption}>
          Headbutt
        </div>
      </div>
    );
  }
  if (typing === 'dark') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.darkOption}>
          Night Slash
        </div>
        <div onClick={onSpecial} className={styles.darkOption}>
          Dark Pulse
        </div>
        <div onClick={onHeal} className={styles.darkOption}>
          Moonlight
        </div>
        <div onClick={onAttack2} className={styles.darkOption}>
          Facade
        </div>
      </div>
    );
  }
  if (typing === 'dragon') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.dragonOption}>
          Dragon Claw
        </div>
        <div onClick={onSpecial} className={styles.dragonOption}>
          Draco Meteor
        </div>
        <div onClick={onHeal} className={styles.dragonOption}>
          Aqua Ring
        </div>
        <div onClick={onAttack2} className={styles.dragonOption}>
          Extreme Speed
        </div>
      </div>
    );
  }
  if (typing === 'electric') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.electricOption}>
          Volt Tackle
        </div>
        <div onClick={onSpecial} className={styles.electricOption}>
          Thunderbolt
        </div>
        <div onClick={onHeal} className={styles.electricOption}>
          Recover
        </div>
        <div onClick={onAttack2} className={styles.electricOption}>
          Extreme Speed
        </div>
      </div>
    );
  }
  if (typing === 'fairy') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.fairyOption}>
          Play Rough
        </div>
        <div onClick={onSpecial} className={styles.fairyOption}>
          Dazzling Gleam
        </div>
        <div onClick={onHeal} className={styles.fairyOption}>
          Moonlight
        </div>
        <div onClick={onAttack2} className={styles.fairyOption}>
          Facade
        </div>
      </div>
    );
  }
  if (typing === 'fighting') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.fightingOption}>
          Close Combat
        </div>
        <div onClick={onSpecial} className={styles.fightingOption}>
          Aura Sphere
        </div>
        <div onClick={onHeal} className={styles.fightingOption}>
          Morning Sun
        </div>
        <div onClick={onAttack2} className={styles.fightingOption}>
          Strength
        </div>
      </div>
    );
  }
  if (typing === 'fire') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.fireOption}>
          Flame Wheel
        </div>
        <div onClick={onSpecial} className={styles.fireOption}>
          Flamethrower
        </div>
        <div onClick={onHeal} className={styles.fireOption}>
          Morning Sun
        </div>
        <div onClick={onAttack2} className={styles.fireOption}>
          Mega Kick
        </div>
      </div>
    );
  }
  if (typing === 'flying') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.flyingOption}>
          Aerial Ace
        </div>
        <div onClick={onSpecial} className={styles.flyingOption}>
          Hurricane
        </div>
        <div onClick={onHeal} className={styles.flyingOption}>
          Roost
        </div>
        <div onClick={onAttack2} className={styles.flyingOption}>
          Quick Attack
        </div>
      </div>
    );
  }
  if (typing === 'ghost') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.ghostOption}>
          Shadow Claw
        </div>
        <div onClick={onSpecial} className={styles.ghostOption}>
          Shadow Ball
        </div>
        <div onClick={onHeal} className={styles.ghostOption}>
          Moonlight
        </div>
        <div onClick={onAttack2} className={styles.ghostOption}>
          Facade
        </div>
      </div>
    );
  }
  if (typing === 'ground') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.groundOption}>
          Earthquake
        </div>
        <div onClick={onSpecial} className={styles.groundOption}>
          Earth Power
        </div>
        <div onClick={onHeal} className={styles.groundOption}>
          Recover
        </div>
        <div onClick={onAttack2} className={styles.groundOption}>
          Body Slam
        </div>
      </div>
    );
  }
  if (typing === 'ice') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.iceOption}>
          Avalanche
        </div>
        <div onClick={onSpecial} className={styles.iceOption}>
          Blizzard
        </div>
        <div onClick={onHeal} className={styles.iceOption}>
          Aqua Ring
        </div>
        <div onClick={onAttack2} className={styles.iceOption}>
          Slam
        </div>
      </div>
    );
  }
  if (typing === 'normal') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.normalOption}>
          Slash
        </div>
        <div onClick={onSpecial} className={styles.normalOption}>
          Swift
        </div>
        <div onClick={onHeal} className={styles.normalOption}>
          Recover
        </div>
        <div onClick={onAttack2} className={styles.normalOption}>
          Quick Attack
        </div>
      </div>
    );
  }
  if (typing === 'poison') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.poisonOption}>
          Gunk Shot
        </div>
        <div onClick={onSpecial} className={styles.poisonOption}>
          Sludge Bomb
        </div>
        <div onClick={onHeal} className={styles.poisonOption}>
          Purify
        </div>
        <div onClick={onAttack2} className={styles.poisonOption}>
          Quick Attack
        </div>
      </div>
    );
  }
  if (typing === 'psychic') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.psychicOption}>
          Zen Headbutt
        </div>
        <div onClick={onSpecial} className={styles.psychicOption}>
          Psychic
        </div>
        <div onClick={onHeal} className={styles.psychicOption}>
          Moonlight
        </div>
        <div onClick={onAttack2} className={styles.psychicOption}>
          Facade
        </div>
      </div>
    );
  }
  if (typing === 'rock') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.rockOption}>
          Rock Slide
        </div>
        <div onClick={onSpecial} className={styles.rockOption}>
          Ancient Power
        </div>
        <div onClick={onHeal} className={styles.rockOption}>
          Recover
        </div>
        <div onClick={onAttack2} className={styles.rockOption}>
          Headbutt
        </div>
      </div>
    );
  }
  if (typing === 'steel') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.steelOption}>
          Iron Head
        </div>
        <div onClick={onSpecial} className={styles.steelOption}>
          Flash Cannon
        </div>
        <div onClick={onHeal} className={styles.steelOption}>
          Recover
        </div>
        <div onClick={onAttack2} className={styles.steelOption}>
          Headbutt
        </div>
      </div>
    );
  }
  if (typing === 'water') {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.waterOption}>
          Aqua Jet
        </div>
        <div onClick={onSpecial} className={styles.waterOption}>
          Hydro Pump
        </div>
        <div onClick={onHeal} className={styles.waterOption}>
          Aqua Ring
        </div>
        <div onClick={onAttack2} className={styles.waterOption}>
          Rapid Spin
        </div>
      </div>
    );
  }
};
