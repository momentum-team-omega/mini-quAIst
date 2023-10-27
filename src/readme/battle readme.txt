Battle Component
The Battle component is a React component designed for creating turn-based battle interactions within a 
larger game context. It features player versus opponent combat with health management, special moves, and 
animations.

INSTALLATION
To use the Battle component in your project, make sure you have React installed. If not, you can add it 
using npm or yarn.

bash:
npm install react
# OR
yarn add react


Certainly! Here's a README file for your Battle component:

import Battle from './path/to/Battle';

// Inside your component

<Battle />

USAGE
The Battle component is highly customizable and designed to work within the context of your game. Here 
are some key features and functionalities:

HEALTH MANAGEMENT
Player and opponent health are tracked and displayed.
Health changes are accompanied by visual indicators.
Players can use health potions to restore health.

TURN-BASED GAMEPLAY
The component manages turns between the player and the opponent.
Players can choose actions, such as "smack" and "chill" to attack or heal, respectively.
Special moves are available for more powerful attacks.

GAME FLOW CONTROL
The component can handle game over scenarios, allowing players to continue or restart.
Players can try again after a game over.
The game state and health are reset when starting a new battle.

ANIMATED UI
Health changes and special moves trigger visual animations.
Player and opponent characters are displayed with animated overlays.

CUSTOMIZATION
The component allows for customization of character images and backgrounds.
You can adapt the component to your game's specific classes and characters.


EXAMPLE
Here's an example of how to use the Battle component in your React application:
import React from 'react';
import Battle from './path/to/Battle';

function Game() {
  return (
    <div>
      <Battle />
    </div>
  );
}

export default Game;

LICENSE
This component is open-source and available under the MIT License. You can find the license details in 
the LICENSE file.

AUTHOR
[Chris Riddle]
If you have any questions or need further assistance, feel free to contact the author or the project 
contributors.

