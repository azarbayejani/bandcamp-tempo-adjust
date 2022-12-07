import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
document.querySelector('.inline_player').appendChild(appDiv);

const App = () => {
  const audioRef = React.useRef();
  const [sliderValue, setSliderValue] = React.useState(1000);
  const percentage = ((sliderValue - 1000) / 1000 * 100).toPrecision(3);
  const playbackRate = 1 + ((sliderValue - 1000) / 1000);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);

    if (!audioRef.current?.paused) {
      audioRef.current.preservesPitch = false;
      audioRef.current.playbackRate = 1 + ((value - 1000) / 1000);
    }
  }

  useEffect(() => {
    audioRef.current = document.querySelector('audio');
    const onPlay = () => {
      audioRef.current.preservesPitch = false;
      audioRef.current.playbackRate = playbackRate;
    }
    audioRef.current.addEventListener('play', onPlay);

    return () => {
      audioRef.current.removeEventListener('play', onPlay);
    }
  }, [playbackRate]);


  return (
    <div>
      <input type="range" onChange={handleSliderChange} onInput={handleSliderChange} min="0" max="2000" value={sliderValue} />
      <span>{percentage >= 0 ? '+' : ''}{percentage}%</span>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'))