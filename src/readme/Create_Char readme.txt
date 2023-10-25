Create_Char Component Readme

OVERVIEW
The SelectCharacter component is a React component designed for character
 selection in a role-playing game (RPG). This component allows players to 
 choose from three different character classes (mage, barbarian, rogue) and
customize their character's name. It provides visual representations of 
each character class and displays their attributes, including health,
strength, wisdom, and dexterity. Additionally, it includes a description 
of each character class and their special attack.
 
INSTALLATION
To use the SelectCharacter component in your React application, follow these 
installation steps:

1. Make sure you have React and the required dependencies set up in your project.

2. Copy the SelectCharacter component code into a new or existing React component 
file within your project.

3. Ensure that you have the necessary assets (character images and background) referenced 
by your import statements in your project's assets directory.

4. Import the SelectCharacter component in the file where you want to use it. 
For example: import SelectCharacter from './SelectCharacter';

USAGE
The SelectCharacter component can be used within your application as a part of 
character selection or customization. Here's how you can use it:
import React, { useState } from 'react';
import SelectCharacter from './SelectCharacter';

function CharacterSelectionPage() {
  const [characterStats, setCharacterStats] = useState({
    name: '',
    charClass: '',
    health: null,
    strength: null,
    str_mod: null,
    wisdom: null,
    wis_mod: null,
    dexterity: null,
    dex_mod: null,
  });

  return (
    <div>
      <SelectCharacter charStats={characterStats} setCharStats={setCharacterStats} />
      {/* Additional components and UI for your character selection page */}
    </div>
  );
}

export default CharacterSelectionPage;


PROPS
The SelectCharacter component accepts two props:

charStats: An object representing the character's attributes and statistics. This object is used to pass and update character information, such as name and class.

setCharStats: A function to update the charStats object. It is used to handle changes to the character's attributes, including name.


FUNCTIONALITY
-Players can enter their character's name in the input field.
-Players can choose a character class (mage, barbarian, rogue) by clicking on the character's image.
-When a character class is selected, the component updates the charStats object with the selected 
character's attributes and sets the character's name to the chosen class's name.
-The selected character is visually highlighted, and the character's description and special attack 
are displayed.
-Players can confirm their character selection by clicking the "Confirm" button, which triggers a 
callback function to proceed to the next stage of the game.

STYLING
The component utilizes CSS styles to create an appealing and immersive character selection interface.
 You can customize the styles by modifying the corresponding CSS classes in the stylesheet 
 (e.g., Create_Char.css).

CUSTOMIZATION
You can customize the character classes, attributes, and images by modifying the characterAttributes 
object and the corresponding assets imported in the component.

EXAMPLE
An example usage of the SelectCharacter component is provided in the CharacterSelectionPage function.
This demonstrates how to set up the component within your application and how to manage the charStats 
object.

Please note that you may need to integrate this component with other parts of your game or application,
 such as handling character data and progression.

DEPENDENCIES
The SelectCharacter component relies on the following dependencies:

React (and any dependencies typically used in a React application)


LICENSE
You are free to use, modify, and distribute this component as needed for your project.
 Please make sure to respect the licenses of any third-party assets or libraries used in your project.

ACKNOWLEDGMENTS
This SelectCharacter component is provided as a sample for game developers or anyone interested in 
building a character selection interface for their application. Enjoy your game development journey!

If you have any questions or need further assistance, feel free to reach out for support or guidance.

Happy coding and gaming!

Author
[Chris Riddle]