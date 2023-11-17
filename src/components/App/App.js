import { useState } from 'react';
import { StartMenu, Main } from 'components';

export const App = () => {
  const [mode, setMode] = useState('start');

  return (
    <div className="main">
      {mode === 'start' && (
        <StartMenu
          onStartClick={() => setMode('pokeDex')} //load start menu when player opens app
        />
      )}

      {
        mode === 'pokeDex' && <Main /> // on start game load Main
      }
    </div>
  );
};
