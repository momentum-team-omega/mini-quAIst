import { createContext } from "react";

const GameContext = createContext({
  mute: true,
  setMute: () => {},
});

export default GameContext;
