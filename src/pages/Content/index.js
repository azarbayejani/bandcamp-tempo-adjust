import React from 'react';
import ReactDOM from 'react-dom';
import PitchAdjust from './PitchAdjust';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
const player = document.querySelector('.inline_player');

const App = () => {
  return (
    <div style={{ marginTop: 4 }}>
      <PitchAdjust />
    </div>
  );
}

if (player) {
  player.append(appDiv);
  ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'))
}
