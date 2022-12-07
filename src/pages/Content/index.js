import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
document.querySelector('.inline_player').appendChild(appDiv);

const App = () => {
  const audioRef = React.useRef();
  const [sliderValue, setSliderValue] = React.useState(1000);
  const [tempoRangeIndex, setTempoRangeIndex] = React.useState(1);

  const tempoRanges = [
    {
      label: '±6',
      min: 940,
      max: 1060
    },
    {
      label: '±10',
      min: 900,
      max: 1100
    },
    {
      label: '±16',
      min: 840,
      max: 1160,
    },
    {
      label: 'WIDE',
      min: 100,
      max: 2000,
    }
  ];

  const tempoRange = tempoRanges[tempoRangeIndex % tempoRanges.length];

  const percentage = ((sliderValue - 1000) / 1000 * 100).toPrecision(3);
  const playbackRate = 1 + ((sliderValue - 1000) / 1000);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
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

  useEffect(() => {
    if (!audioRef.current?.paused) {
      audioRef.current.preservesPitch = false;
      audioRef.current.playbackRate = 1 + ((sliderValue - 1000) / 1000);
    }
  }, [sliderValue]);


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input className="BandcampPitchSlider_range" type="range" onChange={handleSliderChange} onInput={handleSliderChange} min={tempoRange.min} max={tempoRange.max} value={sliderValue} />
      <button title="Reset" className="BandcampPitchSlider_button" onClick={() => setSliderValue(1000)}>{percentage >= 0 ? '+' : ''}{percentage}%</button>{' '}
      <button title="Range adjust" className="BandcampPitchSlider_button" onClick={() => setTempoRangeIndex(tempoRangeIndex + 1)}>({tempoRange.label})</button>
    </div >
  );
}

ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'))