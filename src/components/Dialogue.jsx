import { useContext, useState, useEffect } from 'react';
import { npcDialogues } from 'utilities/npcDialogues';
import TwentySidedDie from 'components/TwentySidedDie';
import Menu from 'components/menu/Menu';
import Inventory from 'components/menu/Inventory';
import GameContext from 'contexts/GameContext';
import '/src/styles/Dialogue.css';
import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';

import wisemanImage from '/src/assets/dialogue-assets/wiseman.png';
import blacksmithImage from '/src/assets/dialogue-assets/blacksmith.png';
import steveImage from '/src/assets/dialogue-assets/steve.png';
import trollImage from '/src/assets/dialogue-assets/troll.png';
import villageLeaderImage from '/src/assets/dialogue-assets/villageLeader-upscaled.png';
import wisemanUpscaled from '/src/assets/dialogue-assets/wiseman-upscaled.png';
import blacksmithUpscaled from '/src/assets/dialogue-assets/blacksmith-upscaled.png';
import steveUpscaled from '/src/assets/dialogue-assets/steve-upscaled.png';
import trollUpscaled from '/src/assets/dialogue-assets/troll-upscaled.png';
import villageLeaderUpscaled from '/src/assets/dialogue-assets/villageLeader-upscaled.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const Dialogue = () => {
  const {
    setScene,
    currentNPC,
    typeOfCheck,
    setTypeOfCheck,
    outcome,
    setMakeCheck,
    makeCheck,
    setCurrentMap,
    checkpoints,
    setCheckpoints,
    charStats,
    menu,
    inventory,
    setMapPosition,
    setCharPosition,
  } = useContext(GameContext);

  const [currentDialogueId, setCurrentDialogueId] = useState('1');
  const currentOption = npcDialogues[currentNPC][currentDialogueId];
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [response, setResponse] = useState(
    npcDialogues[currentNPC].initialResponse
  );

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  useEffect(() => {
    console.log('Response has changed:', response);

    // Calculate the animation time based on response length and typing speed
    const animationTime = response.length * 50 + 900;

    const animationTimeout = setTimeout(() => {
      setIsTyping(false); // Animation is complete
      handleShowOptions();
    }, animationTime);

    // Clear the timeout if the component unmounts or animation completes
    return () => clearTimeout(animationTimeout);
  }, [response]);

  // const npcImages = {
  //   wiseman: wisemanImage,
  //   blacksmith: blacksmithImage,
  //   steve: steveImage,
  //   troll: trollImage,
  //   villageLeader: villageLeaderImage,
  // };

  const npcImages = {
    wiseman: wisemanUpscaled,
    blacksmith: blacksmithUpscaled,
    steve: steveUpscaled,
    troll: trollUpscaled,
    villageLeader: villageLeaderUpscaled,
  };

  const containerStyle = {
    backgroundImage: `url(${npcImages[currentNPC] || ''})`,
  };

  const [loading, setLoading] = useState(false);

  const handleOptionClick = async (optionId) => {
    setIsTyping(true);
    setShowOptions(false);
    setLoading(true);

    const selectedDialogue = npcDialogues[currentNPC][optionId];

    switch (optionId) {
      case 'leave':
        setScene('overworld');
        break;

      case 'start':
        setLoading(false);
        setCurrentDialogueId('1');
        setResponse('What else would you like to know young one?');
        break;

      case 'str':
      case 'dex':
      case 'wis':
        setLoading(false);
        setTypeOfCheck(optionId);
        setMakeCheck(true);
        break;

      case 'fight':
        setScene('battle');
        break;

      case 'instruct':
        setLoading(false);
        console.log('instruct optionId', optionId);
        setResponse(npcDialogues[currentNPC][optionId].instructions);
        console.log(
          'instructions',
          npcDialogues[currentNPC][optionId].instructions
        );
        setCurrentDialogueId(optionId);
        console.log('optionId', optionId);

        if (currentNPC === 'steve') {
          if (!checkpoints[2]) {
            setCheckpoints((prev) => ({ ...prev, 2: true }));
            // console.log('checkpoint2', checkpoint2);
            setCurrentMap('village2Locked2');
          }
        } else if (currentNPC === 'villageLeader') {
          if (!checkpoints[3]) {
            setCheckpoints((prev) => ({ ...prev, 3: true }));
            // console.log('checkpoint3', checkpoint3);
          }
        }

        break;

      case 'chooseClass':
        setScene('characterCreation');
        break;

      default:
        const userChoice = selectedDialogue.text;
        const response = await handleChatGPT(userChoice);
        setResponse(response);
        setCurrentDialogueId(optionId);
        break;
    }
  };

  const handleChatGPT = async (userContent) => {
    const systemContent = npcDialogues[currentNPC].systemContent;
    try {
      const messages = [
        {
          role: 'system',
          content: systemContent,
        },
        {
          role: 'user',
          content: userContent,
        },
      ];
      const payload = {
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 80,
      };

      const apiResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_SECRET_KEY}`,
          },
        }
      );

      const data = apiResponse.data;
      setLoading(false);
      console.log(data.choices[0].message.content);
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
      return 'Error fetching response.';
    }
  };

  const handleRollOutcome = (rollOutcome) => {
    if (rollOutcome === 'passed') {
      setCheckpoints((prev) => ({ ...prev, 4: true }));
      setCurrentMap('trollMap');
      setScene('end-chapter1');
    } else if (rollOutcome === 'failed') {
      setScene('battle');
    }
  };

  const currentDialogue = npcDialogues[currentNPC][currentDialogueId];

  const getModifierText = (modifierValue) => {
    if (modifierValue > 0) {
      return `+${modifierValue}`;
    }
    return `${modifierValue}`;
  };

  const renderCheckText = (optionId) => {
    if (['str', 'dex', 'wis'].includes(optionId)) {
      const checkType = npcDialogues[currentNPC][optionId].check;
      const modifierValue = charStats[`${optionId}_mod`];
      return `[${checkType} check (${getModifierText(modifierValue)})]`;
    }
    return '';
  };

  const Box = ({ children }) => (
    <div
      style={{
        marginBottom: '50px',
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      {menu && <Menu />}
      {inventory && <Inventory />}
      {makeCheck && (
        <TwentySidedDie
          typeOfCheck={typeOfCheck}
          difficultyScore={currentOption?.difficultyScore}
          onRollComplete={handleRollOutcome}
        />
      )}
      <div className="dialogue-container">
        {!menu && !inventory && (
          <div className="title-container">
            {loading && (
              <Box>
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <Skeleton count={3} height={20} width={600} />
                </SkeletonTheme>
              </Box>
            )}
            {!loading && (
              <div>
                <div
                  className="npc-text"
                  style={{
                    width: '1070px',
                    padding: '10px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                >
                  {/* <div className="npc-text">{response}</div> */}
                  <TypeAnimation
                    key={response}
                    sequence={[response]}
                    speed={60}
                    repeat={0}
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <div
          className="npc-image-container"
          style={{
            backgroundImage: containerStyle.backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="options-wrapper">
          {!menu && !inventory && (
            <div
              className="options-container"
              style={{ display: showOptions ? 'block' : 'none' }}
            >
              {showOptions &&
                currentDialogue?.options?.map((optionId) => (
                  <div
                    key={optionId}
                    className="option"
                    onClick={() => handleOptionClick(optionId)}
                  >
                    {renderCheckText(optionId)}
                    {npcDialogues[currentNPC][optionId].text}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialogue;
