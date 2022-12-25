import React from 'react';
import ReactDOM from 'react-dom';
import { AudioProvider } from './AudioContext';
import PitchAdjust from './PitchAdjust';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
const player = document.querySelector('.inline_player');

const App = () => {
  return (
    <AudioProvider selector={'audio'}>
      <div style={{ marginTop: 4 }}>
        <PitchAdjust />
      </div>
    </AudioProvider>
  );
};

if (player) {
  player.append(appDiv);
  ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'));
}
