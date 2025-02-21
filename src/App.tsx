import { useState, useEffect } from 'react';

function App() {
  const [mot, setMot] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ locale: 'en-GB' })
    })
      .then(response => response.json())
      .then(data => {
        setMot(data.word);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>{mot}</div>
  );
}

export default App;
