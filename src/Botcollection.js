 import React from 'react';
import BotCard from './BotCard.js';

function BotCollection({ bots, addBotToArmy, botArmy }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleEnlist={() => addBotToArmy(bot)}
          isInArmy={botArmy.some(b => b.id === bot.id)}
        />
      ))}
    </div>
  );
}

export default BotCollection;

