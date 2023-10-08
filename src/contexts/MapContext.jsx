import { createContext } from 'react';

const MapContext = createContext({
  mapData: null,
  setMapData: () => {},
});

export default MapContext;
