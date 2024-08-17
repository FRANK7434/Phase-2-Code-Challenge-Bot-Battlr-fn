 
import React, { useState, useEffect } from 'react';
import BotCollection from './Botcollection.js';
import YourBotArmy from './YourBotArmy';
import Header from './Header';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('https://json-server-vercel-rho-five.vercel.app/bots')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!botArmy.some(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBotFromArmy = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`https://json-server-vercel-rho-five.vercel.app/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setBots(bots.filter(b => b.id !== bot.id));
        setBotArmy(botArmy.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className="App">
      <Header />
      <YourBotArmy bots={botArmy} releaseBot={releaseBotFromArmy} dischargeBot={dischargeBot} />
      <h1>Bot Collection</h1>


      <BotCollection bots={bots} addBotToArmy={addBotToArmy} botArmy={botArmy} />
    </div>
  );
}

export default App;
