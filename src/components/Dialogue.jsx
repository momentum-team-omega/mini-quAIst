import { useContext, useState, useEffect } from 'react';
import { npcDialogues } from '../utilities/npcDialogues';
import TwentySidedDie from './TwentySidedDie';
import GameContext from './GameContext';
import '/src/styles/Dialogue.css';
import axios from 'axios';

const Dialogue = () => {
  const {
    setScene,
    currentNPC,
    typeOfCheck,
    setTypeOfCheck,
    // charStats,
    outcome,
    setMakeCheck,
    makeCheck,
  } = useContext(GameContext);

  const [charStats, setCharStats] = useState({
    name: '',
    health: 50,
    strength: 6,
    str_mod: -2,
    wisdom: 14,
    wis_mod: 2,
    dexterity: 10,
    dex_mod: 0,
  });

  const [currentDialogueId, setCurrentDialogueId] = useState('1');
  const currentOption = npcDialogues[currentNPC][currentDialogueId];

  const [response, setResponse] = useState(
    npcDialogues[currentNPC].initialResponse
  );
  const [preFetchedResponses, setPreFetchedResponses] = useState([]);
  const containerStyle = {
    backgroundImage: `url(${`/src/assets/dialogue-assets/${currentNPC}.png`})`,
  };

  const npcList = Object.keys(npcDialogues);

  useEffect(() => {
    async function fetchInitialResponses() {
      const initialDialogue = npcDialogues[currentNPC][currentDialogueId];
      const fetchedResponses = [];

      for (let optionId of initialDialogue.options) {
        const userChoice = npcDialogues[currentNPC][optionId].text;
        const response = await handleChatGPT(userChoice);
        fetchedResponses.push(response);
      }

      setPreFetchedResponses(fetchedResponses);
      // console.log("Fetched responses", fetchedResponses);
    }

    fetchInitialResponses();
  }, []);

  const handleOptionClick = async (optionId) => {
    // console.log(`Option ${optionId} clicked`);

    const selectedDialogue = npcDialogues[currentNPC][optionId];
    // console.log("SELECTED DIALOGUE", selectedDialogue);

    if (optionId == 'leave') {
      // console.log("End of conversation detected.");
      if (currentNPC == 'wiseman') {
        console.log('leaving wiseman convo');
        setResponse('leaving wiseman convo');
        setScene('characterCreation');
      } else {
        setResponse('End of conversation.');
        setScene('overworld');
      }
    } else if (optionId == 'start') {
      // console.log("Start of conversation detected.");
      setCurrentDialogueId('1');
      setResponse('What else would you like to know young one?');
    } else if (optionId == 'str') {
      setTypeOfCheck('str');
      setMakeCheck(true);
      // roll for str check
      // console log pass or fail

      console.log(typeOfCheck);
    } else if (optionId == 'dex') {
      setTypeOfCheck('dex');
      setMakeCheck(true);
      // roll for dex check
      // console log pass or fail

      console.log('dex test');
    } else if (optionId == 'wis') {
      setTypeOfCheck('wis');
      setMakeCheck(true);
      // roll for wis check
      // console log pass or fail

      console.log('wis test');
    } else {
      const optionIndex = currentDialogue.options.indexOf(optionId);

      if (preFetchedResponses[optionIndex]) {
        setResponse(preFetchedResponses[optionIndex]);
      } else {
        const userChoice = selectedDialogue.text;
        const response = await handleChatGPT(userChoice);
        setResponse(response);
      }

      setCurrentDialogueId(optionId);

      // Here, make API calls for the next set of dialogue options and cache them
      const nextDialogueOptions = npcDialogues[currentNPC][optionId].options;
      const nextResponses = [];

      for (let nextOptionId of nextDialogueOptions) {
        const nextUserChoice = npcDialogues[currentNPC][nextOptionId].text;
        const response = await handleChatGPT(nextUserChoice);
        nextResponses.push(response);
      }

      setPreFetchedResponses(nextResponses);
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
        max_tokens: 50,
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
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
      return 'Error fetching response.';
    }
  };

  const currentDialogue = npcDialogues[currentNPC][currentDialogueId];

  console.log('CURRENT DIALOGUE', currentDialogue);

  console.log('charStats: ', charStats);

  return (
    <div className="dialogue-container" style={containerStyle}>
      {/* <div
        className="npc-selector-container"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <select
          value={currentNPC}
          onChange={(e) => {
            setCurrentNPC(e.target.value);
            setCurrentDialogueId("1"); // Resetting to start dialogue each time
            setResponse(npcDialogues[e.target.value].initialResponse);
          }}
        >
          {npcList.map((npc) => (
            <option key={npc} value={npc}>
              {npc.charAt(0).toUpperCase() + npc.slice(1)}{" "}
              
            </option>
          ))}
        </select>
      </div> */}

      {makeCheck && (
        <TwentySidedDie
          typeOfCheck={currentOption?.check}
          difficultyScore={currentOption?.difficultyScore}
          charStats={charStats}
        />
      )}
      {response && (
        <div>
          <p className="npc-text">{response}</p>
        </div>
      )}

      <div className="options-container">
        {currentDialogue?.options?.map((optionId) => (
          <div
            key={optionId}
            className="option"
            onClick={() => handleOptionClick(optionId)}
          >
            {npcDialogues[currentNPC][optionId].text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
