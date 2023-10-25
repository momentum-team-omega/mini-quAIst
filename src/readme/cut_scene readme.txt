Cut_Scene Component
The Cut_Scene component is a React component used to create interactive story cutscenes with text and 
images. This component is a part of a larger game project, and it's designed to display images and text 
sequentially, allowing for storytelling within the game.

INSTALLATION
To use the Cut_Scene component, you should have React installed in your project. 
You can install it using npm or yarn.

npm install react

# OR

yarn add react
After installing React, you can import and use the Cut_Scene component in your application.


import Cut_Scene from './path/to/Cut_Scene';

// Inside your component
<Cut_Scene sceneSelection={0} />
Usage
The Cut_Scene component takes a prop called sceneSelection, which indicates which scene to display. It's part of a larger game context and can be controlled by the game logic.

SCENES CONFIGURATION
The scenes are defined in the scenes array at the beginning of the Cut_Scene.js file. You can add more scenes by extending this array.

Each scene should include:

imageUrls: An array of image URLs to be displayed sequentially.
textArray: An array of text lines to be shown as the story progresses.
sceneHeader: The title of the scene
sceneButton: The text on the "continue" button can be set to whatever is needed

FEATURES
Typing Animation: Text lines are displayed with a typing animation, creating an engaging storytelling experience.

"Continue" Button: After the text animation is complete, a "Continue" button appears, allowing the user to progress to the next scene.

Scene Control: The component can be controlled by setting the sceneSelection prop, which determines which scene is displayed.

EXAMPLE
Here's an example of how to use the Cut_Scene component in your React application:

import React from 'react';
import Cut_Scene from './path/to/Cut_Scene';

function Game() {
  return (
    <div>
      {/* Display the first scene */}
      <Cut_Scene sceneSelection={0} />
    </div>
  );
}

export default Game;


LICENSE
This component is open-source and available under the MIT License. You can find the license details in 
the LICENSE file.

AUTHOR
[Christopher Riddle]
If you have any questions or need further assistance, feel free to contact the author or the project 
contributors.

