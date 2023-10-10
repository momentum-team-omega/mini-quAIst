export const npcDialogues = {
    '0101': {
        text: "Who are you, old man?",
        options: ['0102', '0103', '0104', '0115'] // Added a return to start option
    },
    '0102': {
        text: "Tell me more about these mountains.",
        options: ['0116', '0117', '0118', '0115']
    },
    '0116': {
        text: "The mountains are tall and treacherous.",
    },
    '0117': {
        text: "Many travelers have gotten lost here.",
    },
    '0118': {
        text: "Legends speak of ancient treasures hidden deep within.",
    },
    '0103': {
        text: "What dangers lie ahead?",
        options: ['0119', '0120', '0121', '0115']
    },
    '0119': {
        text: "There are wild beasts lurking around.",
    },
    '0120': {
        text: "The weather can change unpredictably.",
    },
    '0121': {
        text: "The paths are easy to get lost on.",
    },
    '0104': {
        text: "Tell me about yourself.",
        options: ['0122', '0123', '0124', '0115']
    },
    '0122': {
        text: "I've been around these parts for years.",
    },
    '0123': {
        text: "I've seen many travelers come and go.",
    },
    '0124': {
        text: "There are many stories I could tell.",
    },
    '0109': {
        text: "I have no time for tales. I must find my pet!",
    },
    '0110': {
        text: "What is the purpose of life?",
        options: ['0125', '0126', '0127', '0115']
    },
    '0125': {
        text: "Life is what you make of it.",
    },
    '0126': {
        text: "Everyone's journey is unique.",
    },
    '0127': {
        text: "It's the mysteries of life that keep it interesting.",
    },
    '0111': {
        text: "How can I discover my purpose?",
        options: ['0128', '0129', '0130', '0115']
    },
    '0128': {
        text: "By seeking knowledge and understanding.",
    },
    '0129': {
        text: "By following your heart and passions.",
    },
    '0130': {
        text: "By facing challenges head-on.",
    },
    '0114': {
        text: "I don't have time for philosophical pondering.",
    },
    '0115': {  // This is the return to start option
        text: "Return to start.",
        options: ['0101']
    },
    '0131': {  // This is the end dialogue option
        text: "I'm ready to go.",
        end: true
    },
};
