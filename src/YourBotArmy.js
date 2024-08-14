import React from 'react';
import BotCard from './BotCard.js';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleRelease={() => releaseBot(bot)}
          handleDischarge={() => dischargeBot(bot)}
          isInArmy={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;

