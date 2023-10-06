const TERRAINS = {
    mountain: 'gray',
    grass: 'green',
    water: 'blue',
    tree: 'darkgreen',
  };

  const generateRandomTerrain = () => {
    const terrains = Object.keys(TERRAINS);
    return terrains[Math.floor(Math.random() * terrains.length)];
  };

export const generateTownMap = (MAP_SIZE) => {
const generatedMap = Array.from({ length: MAP_SIZE }, () =>
    Array.from({ length: MAP_SIZE }, () => generateRandomTerrain())
);

return generatedMap;
};

export const generateMountainPathMap = (MAP_SIZE) => {
const generatedMap = Array.from({ length: MAP_SIZE }, () =>
    Array.from({ length: MAP_SIZE }, () => 'grass') // Set all tiles to gray
);

return generatedMap;
};