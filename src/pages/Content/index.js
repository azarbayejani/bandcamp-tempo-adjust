import React from 'react';
import ReactDOM from 'react-dom';
import PitchAdjust from './PitchAdjust';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
document.querySelector('.inline_player').append(appDiv);


const App = () => {
  return (
    <div style={{ marginTop: 4 }}>
      <PitchAdjust />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'))