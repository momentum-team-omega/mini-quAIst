Dialogue Component Readme
The Dialogue component is a React component designed for managing and rendering interactive dialogues
 with non-playable characters (NPCs) in a role-playing game (RPG). This component allows players to 
 engage in conversations with various NPCs, receive responses, make choices, and initiate actions 
 based on the dialogue.

INSTALLATION
To use the Dialogue component in your React application, follow these installation steps:

1. Ensure that you have React and the required dependencies set up in your project.

2. Copy the Dialogue component code into a new or existing React component file within your project.

3. Import the Dialogue component in the file where you want to use it. For example:
import Dialogue from './Dialogue';

4. Include the component within your application by using the <Dialogue /> JSX tag in your rendering.

USAGE
The Dialogue component can be used within your application to facilitate in-game interactions with NPCs. 
Here's how you can use it:

import React from 'react';
import Dialogue from './Dialogue';

function NPCInteractionPage() {
  // Ensure you have the required context and state variables set up for the `Dialogue` component to function.

  return (
    <div>
      <Dialogue />
      {/* Additional components and UI for your NPC interaction page */}
    </div>
  );
}

export default NPCInteractionPage;

Please note that the Dialogue component relies on context and state variables,
which should be provided by your application's overall game structure.

PROPS
The Dialogue component doesn't require any props to be passed explicitly. Instead, it relies on the GameContext context to access and update game-related information. Make sure that the necessary state variables are set up in your application.

FUNCTIONALITY
The Dialogue component provides the following key functionalities:

-Rendering of NPC responses in a chatbot-style animation to create an immersive conversation experience.
-Displaying dialogue options for players to choose from, which can lead to different outcomes and actions.
-Making API calls to an AI service (e.g., OpenAI's GPT-3.5 Turbo) to generate responses for the NPC based 
on player choices. 
-Managing character attribute checks (e.g., strength, dexterity, wisdom) and handling 
outcomes based on these checks.
-Initiating transitions to other game scenes, such as battles or character creation.
-Using loading skeletons to provide feedback to players while responses are being generated.

STYLING
The component includes CSS styles to provide a visually appealing and consistent user interface. You can customize the styling by modifying the corresponding CSS classes in the stylesheet (e.g., Dialogue.css).

DEPENDENCIES
The Dialogue component relies on several external dependencies:

React (and any dependencies typically used in a React application)
Axios for making API calls
react-type-animation for the typewriter-style animation effect
react-loading-skeleton for displaying loading skeletons during API requests
Additionally, the component requires access to an AI service, such as OpenAI's GPT-3.5 Turbo,
 to generate NPC responses. Ensure that you have the necessary API credentials and endpoints configured.

CUSTOMIZATION
The Dialogue component can be customized to suit the specific NPCs and dialogues in your game. 
You can modify the npcDialogues object to define different responses, options, and actions for each NPC.
 You can also update the NPC images and background styles as needed.

EXAMPLE
An example usage of the Dialogue component is provided in the NPCInteractionPage function.
 This demonstrates how to set up the component within your application and interact with NPCs in your game.
Remember to configure the required context and state variables to make the component work seamlessly with 
your game logic.

LICENSE
You are free to use, modify, and distribute this component as needed for your project. 
Please make sure to respect the licenses of any third-party libraries and services used in your project,
 such as the AI service for generating NPC responses.

Acknowledgments
The Dialogue component is provided as a sample for game developers or anyone interested in building 
interactive dialogue systems in their applications. Enjoy your game development journey, and feel free 
to reach out for support or guidance.

AUTHOR
[Christopher Riddle]
If you have any questions or need further assistance, feel free to contact the author or the project 
contributors.

Happy coding and gaming!