import React, { useEffect, useState } from 'react';
import axios from 'axios'

import CardInfo from './components/CardInfo';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [info, setInfo] = useState({})
  const getQuote = async () => {
    const url = 'https://breakingbadapi.com/api/quote/random'
    const resp = await axios.get(url)
    console.log(resp.data[0])
    setInfo(resp.data[0])
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardInfo data={info} />
        <button className="button-random" onClick={() => getQuote()}>
          Click!
        </button>
      </div>
    </div>
  );
}

export default App;
