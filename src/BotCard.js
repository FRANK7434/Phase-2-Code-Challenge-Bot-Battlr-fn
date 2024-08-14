 import React from 'react';

function BotCard({ bot, handleEnlist, handleRelease, handleDischarge, isInArmy }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h3>{bot.name}</h3>
      <p>Type: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {!isInArmy && (
        <button className="enlist-button" onClick={handleEnlist}>
          Enlist
        </button>
      )}
      {isInArmy && (
        <>
          <button className="release-button" onClick={handleRelease}>
            Release
          </button> 
          
          <button className="discharge-button" onClick={handleDischarge}>
            X
          </button>
        </>
      )}
    </div>
  );
}

export default BotCard;
