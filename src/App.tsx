import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Guess } from './components/Guess';
import { Keyboard } from './components/Keyboard';
import { EndScreen } from './components/EndScreen';
import { Hanged } from './components/Hanged';

import headerContent from './content/header.json';
import enscreenContent from './content/endscreen.json';

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

  const maxerrors = 6;

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
          setWOrL('');
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
  const endScreenData = enscreenContent[language];

  return (
    <div className={locale}>
      <Header language={language} setLanguage={setLanguage} locale={locale} setLocale={setLocale} data={headerData} setWord={setWord}/>
      <Guess wordLength={wordLength} word={word} guesses={deactivatedKeys} setWOrL={setWOrL} errors={errors} setErrors={setErrors} maxErrors={maxerrors}/>  
      <Hanged errors={errors} />
      <Keyboard language={language} deactivatedKeys={deactivatedKeys} setDeactivatedKeys={setDeactivatedKeys} errors={errors} maxErrors={maxerrors} />
      <EndScreen wOrL={wOrL} locale={locale} setLocale={setLocale} setWord={setWord} word={word} language={language} errors={errors} data={endScreenData}/>
    </div>
  );
}

export default App;