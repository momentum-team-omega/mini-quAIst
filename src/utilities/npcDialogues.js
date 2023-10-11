export const npcDialogues = {
    wiseman: {
        systemContent: 'You are an old wise man in a dungeon and dragons adventure speaking with a 10-year-old kid.',
        '1': {
            text: "What else would?",
            options: ['2', '3', '4', 'leave']
        },
        '2': {
            text: "I'm an adventurer exploring these mountains.",
            options: ['5', '6', '7', 'start']
        },
        '3': {
            text: "I'm here seeking answers to the mysteries of this place.",
            options: ['8', '9', '10', 'start']
        },
        '4': {
            text: "Who are you to ask?",
            options: ['11', '12', '13', 'start']
        },
        '5': {
            text: "What can you tell me about them?",
            options: ['start', 'leave']
        },
        '6': {
            text: "Have many others come through here?",
            options: ['start', 'leave']
        },
        '7': {
            text: "Are there any tales about treasures here?",
            options: ['start', 'leave']
        },
        '8': {
            text: "What should I be cautious of?",
            options: ['start', 'leave']
        },
        '9': {
            text: "What have you seen in these parts?",
            options: ['start', 'leave']
        },
        '10': {
            text: "Is there a safe path to take?",
            options: ['start', 'leave']
        },
        '11': {
            text: "Who are you?",
            options: ['start', 'leave']
        },
        '12': {
            text: "Why would you help me?",
            options: ['start', 'leave']
        },
        '13': {
            text: "Why should I trust you?",
            options: ['start', 'leave']
        },
        'start': {
            text: "Ask a different question.",
            options: ['1']
        },
        'end': {
            text: "Goodbye.",
            options: ['start', 'leave']
            
        },
        'leave': {
            text: "Leave the conversation.",
            options: []
        }
    },

    villageLeader: {
        systemContent: 'You are the village leader in a medieval fantasy village. A 10-year-old kid approaches you, worried about their lost pet.',
        '1': {
            text: "Excuse me, village leader. Have you seen my lost pet?",
            options: ['2', '3', '4', 'leave']
        },
        '2': {
            text: "Someone told me you might know where lost animals go.",
            options: ['5', '6', '7', 'start']
        },
        '3': {
            text: "I'm really worried. Can you help me find my pet?",
            options: ['8', '9', '10', 'start']
        },
        '4': {
            text: "Do animals sometimes wander near the tavern?",
            options: ['11', '12', '13', 'start']
        },
        '5': {
            text: "What should I do to find my pet in this village?",
            options: ['start', 'leave']
        },
        '6': {
            text: "Have other villagers found lost pets before?",
            options: ['start', 'leave']
        },
        '7': {
            text: "Could someone have taken my pet?",
            options: ['start', 'leave']
        },
        '8': {
            text: "I miss my pet so much. Any advice would help.",
            options: ['start', 'leave']
        },
        '9': {
            text: "Do you think the tavernkeep has seen it?",
            options: ['start', 'leave']
        },
        '10': {
            text: "Could it be in danger in this village?",
            options: ['start', 'leave']
        },
        '11': {
            text: "I'll check the tavern then. Thank you!",
            options: ['start', 'leave']
        },
        '12': {
            text: "Has anything like this happened before?",
            options: ['start', 'leave']
        },
        '13': {
            text: "I just want my pet back. I hope it's safe.",
            options: ['start', 'leave']
        },
        'start': {
            text: "I had another question.",
            options: ['1']
        },
        'end': {
            text: "Thank you for your help.",
            options: ['start', 'leave']
        },
        'leave': {
            text: "Goodbye, village leader.",
            options: []
        }
    }
};
