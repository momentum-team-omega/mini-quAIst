# Mini-QuAIst

Mini-QuAIst is a fun game to play if you're looking to pass time and enjoy your role-playing games (RPGs). This RGP is inspired by a couple of our authors favorite games that they enjoy playing. This game comes with a storyline that'll have you caught up and leaving with wanting more.  

## Features

- Main Application
- Game
- Overworld
- Create Character
- Dialogue
- Battle
- Cut Scenes
- Ability Checks

## Site

**Production Site URL**: https://mini-quaist.netlify.app/home

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You'll need a openAI secret key for this project.

`VITE_CHATGPT_SECRET_KEY`=your_open_AI_secret_key

## Run Locally

Clone the project

```bash
  git clone https://github.com/momentum-team-omega/mini-quAIst.git
```

Go to the project directory

```bash
  cd mini-quAIst
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Screenshot

<img width="1231" alt="Screenshot 2023-10-26 at 9 25 44 PM" src="https://github.com/momentum-team-omega/mini-quAIst/assets/139093449/d53c5f45-3d3b-426c-b128-557a1d9b83f5">

## Main Application

The central hub for Mini Quaist. This main application manages routing, user authentication, audio settings, and serves as the launch point for various game components and features.

### Main App Features

- **Home**: The landing page of the application.
- [in development] **Login & Register**: User authentication mechanisms.
- **Game**: The primary gameplay component.
- **Wiki**: An encyclopedia for in-game content. Subcomponents include:
    1. **WikiQuaist**: General game lore.
    2. **WikiClasses**: Information about available classes.
    3. **WikiMage, WikiBarb, WikiRogue**: Detailed descriptions for Mage, Barbarian, and Rogue classes, respectively.
    4. **WikiBattle**: Mechanics and rules for in-game battles.
    5. **WikiAbilityCheck**: Explanation of ability checks in the game.

### State Management

- **token**: A representation of the user's session or authentication state.
- **isLoggedIn**: A boolean determining if the user is currently logged in.
- **mute**: Manages the mute/unmute state for game audio.

### Local Storage

Upon initialization, the application ensures that the `mapPosition` exists in the local storage. If not, it sets a default position.

### Routes

Routing in the application is managed using `react-router-dom`. The current setup includes routes for:

- Home (`/home`)
- Login (`/login`)
- Register (`/register`)
- Play (`/play`)
- Wiki and its sub-routes (`/wiki/*`)

### How to Use

To utilize the main application:

1. Ensure all dependencies are installed (`npm install` or `yarn install`).
2. Start the application using `npm run dev`.
3. Navigate by using the play button on home page or changing states in Game.jsx.

## Game Component

This is the primary game component for the React-based game. This component orchestrates the various scenes, dialogues, battles, character creation, and other game functionalities.

### Game Features

1. **SFX**: Integrate sound effects into the game.
2. **Icons**: Various icons like Volume, Inventory, and Menu.
3. **Overworld**: The main environment where the player interacts.
4. **Character Creation**: Allows players to create their character.
5. **Dialogue**: Manage in-game dialogues between player and npcs.
6. **Battle**: Handle in-game battles.
7. **Cut Scenes**: Display different narrative scenes such as introductions, chapter ends, and death scenes.
8. **Menu & Inventory**: Toggleable menu and inventory systems.
9. **NPC Management**: NPCs with different attributes and behaviors.

### Game State Management

This component manages a variety of game states, which include:

- **Scene Management**: Defines the current active scene (e.g., overworld, dialogue, battle).
- **Character Stats**: Keep track of the player's character statistics like health, strength, wisdom, etc.
- **NPCs**: List of NPCs with attributes such as name, steps, animationSpeed, and more.
- **Checkpoints & Tooltips**: Manage game progression with checkpoints and tooltips.
- **Audio**: Manage the mute state and the current music track.
- **UI**: Handle states like menu and inventory visibility.

### Context

The game heavily relies on the `GameContext` for state management. This context provides centralized access to many game-related states, making it easier to share state between different components.

## Overworld Component

The Overworld component is the central stage for character navigation and interactions in the game world. It stitches together maps, characters, NPCs, UI elements, and more to create a coherent game environment.

### Overworld Features

1. **Character Movement (`Char_Move`)**: Handles the logic for moving the main character.
2. **Map Display & Management**: 
    - **Map**: Represents the primary game map.
    - **Map_Manager**: Manages character and NPC interactions.
    - **Map_Switch**: Handles switching between different maps or levels.
3. **Foreground**: Showcases an additional visual layer above the main map.
4. **Character Representation (`Char`)**: Displays the main character sprite.
5. **NPC Management (`NPC_Map`)**: Handles and renders the Non-Player Characters on the map.
6. **User Interface Elements**: Include tooltips, compass for directions, and the main game menu.

### Overworld State Management

- **Map Properties**: Maintains details like map images, foreground, tile size, etc.
- **Character Attributes**: Manages the position and direction of the main character.
- **Map Positioning**: Governs the map's position relative to the viewport.
- **NPCs**: Maintains a list of NPCs for the current map.
- **Navigation**: Controls which directions the player can move towards.

### Overworld Context

The Overworld component is integrated with `GameContext` to fetch relevant game data such as NPCs, menu states, and inventory details.

## Character Creation

The SelectCharacter component is a React component designed for character
selection in a role-playing game (RPG). This component allows players to 
choose from three different character classes (mage, barbarian, rogue) and
customize their character's name. It provides visual representations of 
each character class and displays their attributes, including health,
strength, wisdom, and dexterity. Additionally, it includes a description 
of each character class and their special attack.

### Character Creation Features

1. Players can enter their character's name in the input field.
2. Players can choose a character class (mage, barbarian, rogue) by clicking on the character's image.
3. When a character class is selected, the component updates the charStats object with the selected 
character's attributes and sets the character's name to the chosen class's name.
4. The selected character is visually highlighted, and the character's description and special attack 
are displayed.
5. Players can confirm their character selection by clicking the "Confirm" button, which triggers a 
callback function to proceed to the next stage of the game.

## Dialogue

The Dialogue component is a React component designed for managing and rendering interactive dialogues
with non-playable characters (NPCs) in a role-playing game (RPG). This component allows players to 
engage in conversations with various NPCs, receive responses, make choices, and initiate actions 
based on the dialogue. Conversations evolve based on player choices, and certain responses can trigger game events like battles, checkpoints, or ability checks.

### Dialogue Features

1. Context-based Interactions: Uses the GameContext for sharing global game state like the current NPC, checkpoints, character stats, and others.
2. Dynamic NPC Images: Displays images of NPCs during dialogues. Supported NPCs are wiseman, blacksmith, steve, troll, and villageLeader.
3. Typing Animation: Implements a type animation effect for dialogue text using react-type-animation.
4. Ability Checks: Allows players to make strength (str), dexterity (dex), or wisdom (wis) checks, which can influence the outcome of the dialogue.
5. Loading Indicators: Uses react-loading-skeleton to display loading indicators while waiting for a response.
6. API Interaction: Communicates with the GPT-3.5-turbo model from OpenAI to generate NPC responses.

### Dialogue Customization

The Dialogue component can be customized to suit the specific NPCs and dialogues in your game. 
You can modify the npcDialogues object to define different responses, options, and actions for each NPC.
 You can also update the NPC images and background styles as needed.

## Battle

The Battle component is a React component designed for creating turn-based battle interactions within a 
larger game context. It features player versus opponent combat with health management, special moves, and 
animations.

### Battle Features

1. **Health Management**: Player and opponent health are tracked and displayed. Health changes are accompanied by visual indicators. Players can use health potions to restore health.
2. **Turn-based gameplay**: The component manages turns between the player and the opponent.
Players can choose actions, such as "smack" and "chill" to attack or heal, respectively.
Special moves are available for more powerful attacks.
3. **Game Flow**: The component can handle game over scenarios, allowing players to continue or restart.
Players can try again after a game over. The game state and health are reset when starting a new battle.
4. **Animated UI**: Health changes and special moves trigger visual animations.
Player and opponent characters are displayed with animated overlays.

## Cut Scene

The Cut_Scene component is a component used to create interactive story cutscenes with text and 
images. This component is a part of a larger game project, and it's designed to display images and text 
sequentially, allowing for storytelling within the game.

### Cut Scene Features

1. Typing Animation: Text lines are displayed with a typing animation, creating an engaging storytelling experience.
2. "Continue" Button: After the text animation is complete, a "Continue" button appears, allowing the user to progress to the next scene.
3. Scene Control: The component can be controlled by setting the sceneSelection prop, which determines which scene is displayed.

## Ability Checks

The TwentySidedDie component is a component designed for handling twenty-sided dice rolls, typically used in tabletop role-playing games (RPGs) for ability checks. This is rendered on screen during select dialogue options. 

### Ability Check Logic

1. The component uses the useState hook to manage the state of the dice roll and whether it has been rolled.
2. The useEffect hook is employed to calculate the outcome of the roll based on the dice value, character modifiers, and a predefined difficulty score.
3. The rollDie function generates a random number between 1 and 20 when the die is clicked, updating the state with the result.
4. The handleContinue function is called when the "Continue" button is clicked, invoking the onRollComplete callback and updating the state.

## Contributions

We are planning on making this game an open source project for new developers! If you are a programmer or interested in contributing in another way, please reach out to Nathan Vogt at merrick.vogt@gmail.com.

## Authors

- [@Davis-Patterson](https://github.com/Davis-Patterson)
- [@duffing09](https://github.com/duffing09)
- [@WilkinsJay](https://github.com/WilkinsJay)
- [@merrick-vogt](https://github.com/merrick-vogt)
- [@CRiddleNC](https://github.com/CRiddleNC)
