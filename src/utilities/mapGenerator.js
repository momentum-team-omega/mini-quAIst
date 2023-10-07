const TERRAINS = [
  'gray',        // mountain
  'green',       // grass
  'blue',        // water
  'darkgreen',   // tree
  'brown',       // wood
  'yellow',      // sand
  'lightgray',   // stone
  'red',         // brick
  'lightblue',   // sky
];

  const generateRandomTerrain = () => {
    return Terrains[Math.floor(Math.random() * Terrains.length)];
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

export const houseColors = [
  ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
  ['green', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'green'],
  ['green', 'brown', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'green'],
  ['green', 'brown', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'green'],
  ['green', 'brown', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'green'],
  ['green', 'brown', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'green'],
  ['green', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'green'],
  ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
  ['green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green'],
  ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
];


export const fountainColors = [
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'blue', 'blue', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray'],
];
