import React, { useState } from 'react';
import axios from 'axios';

const RandomVerse = () => {
  const [verse, setVerse] = useState('');

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get('https://labs.bible.org/api/?passage=random&type=json');
      setVerse(`${response.data[0].bookname} ${response.data[0].chapter}:${response.data[0].verse} - ${response.data[0].text}`);
    } catch (error) {
      console.error('Error fetching random verse:', error);
      setVerse('Failed to fetch verse. Please try again.');
    }
  };

  return (
    <div>
      <h2>Random Verse</h2>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      {verse && <p>{verse}</p>}
    </div>
  );
};

export default RandomVerse;