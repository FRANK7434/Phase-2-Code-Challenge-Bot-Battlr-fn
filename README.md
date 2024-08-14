# SA. 02 Phase 2 Code Challenge: Bot Battlr

 # Bot Army Manager

This project is a React-based application that allows users to manage a collection of bots. Users can view all available bots, add them to their personal army, release them from their army, and even discharge them permanently.

## Project Overview

The Bot Army Manager application provides a user-friendly interface for managing a collection of bots. It allows users to build their own bot army by selecting bots from a collection and enlisting them in their army. Users can also remove bots from their army or discharge them permanently.

## Features

### Core Deliverables

As a user, you will be able to:

- **View Bot Profiles:**
  - All available bots are displayed in the `BotCollection` component. Each bot profile shows details about the bot.

- **Add Bots to Your Army:**
  - Click on an individual bot in the `BotCollection` to add it to your army. The selected bot will be rendered in the `YourBotArmy` component.
  - A bot can be enlisted only **once** in your army.
  - The bot will remain visible in the `BotCollection` even after being added to your army.

- **Release Bots from Your Army:**
  - Click on a bot in the `YourBotArmy` component to release it. The bot will be removed from your army but will remain in the `BotCollection` for future enlistment.

- **Discharge Bots Permanently:**
  - Click the "x" button on a bot in the `YourBotArmy` component to discharge it permanently. This action will delete the bot both from the backend database and from the `YourBotArmy` component. The bot will no longer be available in the `BotCollection` or your army.

 # Steps for installing the dependencies 
 ## Install dependencies:
 - npm install
 ## Start the development server:
 - npm start

