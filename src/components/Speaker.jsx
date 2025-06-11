import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import './Speaker.css';

const Speaker = ({ text }) => {
  const [voices, setVoices] = useState([]);
  const [rate, setRate] = useState(1.0);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      if (availableVoices.length !== 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = (gender = 'female') => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;

    const preferredFemale = ['Google US English', 'Samantha', 'Karen', 'Victoria', 'Moira'];
    const preferredMale = ['Google UK English Male', 'Daniel', 'Fred', 'Alex'];

    const targetVoices = gender === 'female' ? preferredFemale : preferredMale;

    const selectedVoice = voices.find(
      (voice) => voice.lang.startsWith('en') && targetVoices.includes(voice.name)
    );

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="speaker-container">
      <div className="speaker-buttons">
        <button onClick={() => speak('female')} className="button-base speak-button">
          <FontAwesomeIcon icon={faVolumeHigh} /> Female
        </button>
        <button onClick={() => speak('male')} className="button-base speak-button">
          <FontAwesomeIcon icon={faVolumeHigh} /> Male
        </button>
      </div>

    <div className="rate-control">
      <label htmlFor="rateSlider" className="rate-label">
        Speed: {rate.toFixed(1)}
      </label>
      <input
        id="rateSlider"
        className="rate-slider"
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      />
    </div>

    </div>
  );
};

export default Speaker;
