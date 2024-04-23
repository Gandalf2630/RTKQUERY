import React, { useState } from 'react';

const RandomQuoteGenerator = () => {

  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "NextJS, and Angurlar are both good themes. - Henrik Høltzer",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon"
  ];

  
  const [currentQuote, setCurrentQuote] = useState('');

  
  const generateRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      <p>{currentQuote}</p>
    </div>
  );
};

export default RandomQuoteGenerator;