import React, { useState, useEffect } from 'react';
import './WordList.css';
import Nav from './Nav';
import Background from './Background';
import Speaker from './Speaker';
import Completed from './Completed';
import { useNavigate } from 'react-router-dom';

const WordList = () => {
  const [wordList, setWordList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState('');
  const navigate = useNavigate(); 

  const url = "/data/duo.json";

    useEffect(() => {
    if (wordList.length > 0 && currentIndex === wordList.length) {
      navigate('/completed', { state: { bgImage } });
    }
  }, [currentIndex, wordList.length, navigate]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = shuffleArray(data);
        const selected = shuffled.slice(0, 10);
        setWordList(selected);
      });

    const seed = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/1600/900?random=${seed}`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setBgImage(imageUrl);
    };
  }, []);

  const currentItem = wordList[currentIndex];

  return (
    <Background bgImage={bgImage}>
      <div className="word-content">
        {wordList.length > 0 ? (
          currentIndex < wordList.length ? (
            <div className="card">
              <h2>{currentItem.english}</h2>
              <Speaker text={currentItem.english} />
              <p>{currentItem.japanese}</p>
              <ul>
                {currentItem.words.map((w, i) => (
                  <li key={i}>
                    {w.word} ({w.pos})
                  </li>
                ))}
              </ul>
              <Nav
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                total={wordList.length}
              />
            </div>
          ) : (
            <Completed />
          )
        ) : (
          <div>Loading word data...</div>
        )}
      </div>
    </Background>
  );
};

export default WordList;
