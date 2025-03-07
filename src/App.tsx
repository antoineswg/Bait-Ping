import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Guess } from './components/Guess';
import headerContent from './content/header.json';

function App() {
  const [word, setWord] = useState(() => {
    return localStorage.getItem('word') || '';
  });
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('locale') || 'lol';
  });
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (word === '') {
      fetch('http://localhost:3333/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ locale: locale })
      })
        .then(response => response.json())
        .then(data => {
          setWord(data.word);
          localStorage.setItem('word', data.word);
          console.log("C'est de la triche mais ton champion à deviner c'est : ", data.word);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [locale, word]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const wordLenght = word.length;

  const headerData = headerContent[language];

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} locale={locale} setLocale={setLocale} data={headerData} setWord={setWord}/>
      <Guess wordLenght={wordLenght} word={word}/>
    </div>
  );
}

export default App;
