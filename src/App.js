import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import Histogram from './Histogram';

const App = () => {
  const [wordFrequency, setWordFrequency] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const words = response.data.split(/\W+/);
      const wordMap = {};

      words.forEach((word) => {
        if (wordMap[word]) {
          wordMap[word]++;
        } else {
          wordMap[word] = 1;
        }
      });

      const sortedWords = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
      const top20Words = sortedWords.slice(0, 20);

      setWordFrequency(top20Words);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Button onClick={fetchData} />
      {wordFrequency.length > 0 && <Histogram data={wordFrequency} />}
    </div>
  );
};

export default App;
