import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';

function App() {
  const [showMap, setShowMap] = useState(false); // this should be a route instead of conditional rendering later

  return (
    <div>
      <h1>Mini QuAIst!</h1>
      {showMap ? (
        <Map />
      ) : (
        <button onClick={() => setShowMap(true)}>Show Map</button>
      )}
    </div>
  );
}

export default App;

