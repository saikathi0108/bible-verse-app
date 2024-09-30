import React, { useState } from 'react';
import axios from 'axios';

const SpecificVerse = () => {
  const [reference, setReference] = useState('');
  const [verse, setVerse] = useState('');

  const fetchSpecificVerse = async () => {
    if (!reference) return;

    try {
      const response = await axios.get(`https://labs.bible.org/api/?passage=${encodeURIComponent(reference)}&type=json`);
      setVerse(`${response.data[0].bookname} ${response.data[0].chapter}:${response.data[0].verse} - ${response.data[0].text}`);
    } catch (error) {
      console.error('Error fetching specific verse:', error);
      setVerse('Failed to fetch verse. Please check the reference and try again.');
    }
  };

  return (
    <div>
      <h2>Specific Verse</h2>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="Enter verse reference (e.g., John 3:16)"
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      {verse && <p>{verse}</p>}
    </div>
  );
};

export default SpecificVerse;