import styles from './styles.css';
import logo from './assets/pokeLogo.png';

export const StartMenu = ({ onStartClick }) => {
  //start menu
  return (
    <div className="mainContainer">
      <div className="secondStage">
        <div className="imageContainer">
          <img src={logo} /* display logo */></img>
        </div>
        <br />
        <div className="textContainer">
          <div className="text">
            <p /* explain game */>
              Choose your Pokémon and send them to battle against any of
              the over 1000 Pokémon from every generation!
            </p>
          </div>
        </div>
        <br />
        <div className="buttonContainer" /* start game button */>
          <button className="startGameButton" onClick={onStartClick}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};
