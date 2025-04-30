import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching API:', err));
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
