import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Guess } from './components/Guess';
import { Keyboard } from './components/Keyboard';
import { EndScreen } from './components/EndScreen';
import headerContent from './content/header.json';

function App() {
  const [word, setWord] = useState(() => {
    return localStorage.getItem('word') || '';
  });
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('locale') || 'lol';
  });
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr';
  });

  const [errors, setErrors] = useState(0);

  const [deactivatedKeys, setDeactivatedKeys] = useState(() => {
    const savedKeys = localStorage.getItem('deactivatedKeys');
    return savedKeys ? JSON.parse(savedKeys) : [];
  });

  const [wOrL, setWOrL] = useState('');

  useEffect(() => {
    localStorage.setItem('deactivatedKeys', JSON.stringify(deactivatedKeys));
  }, [deactivatedKeys]);

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
          setErrors(0);
          setDeactivatedKeys([]);
          setWOrL(''); // Reset wOrL when a new word is fetched
        })
        .catch(error => console.error('Error:', error));
    }
  }, [locale, word]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const wordLength = word.length;

  const headerData = headerContent[language];

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} locale={locale} setLocale={setLocale} data={headerData} setWord={setWord}/>
      <Guess wordLength={wordLength} word={word} guesses={deactivatedKeys} setWOrL={setWOrL} setErrors={setErrors}/>
      <Keyboard language={language} deactivatedKeys={deactivatedKeys} setDeactivatedKeys={setDeactivatedKeys} />
      <EndScreen wOrL={wOrL}/>
      {errors}
    </div>
  );
}

export default App;