export const npcDialogues = {
    wiseman: {
        initialResponse: "Ah, young one, you seek the wisdom of the ages. What burdens your heart or sparks your curiosity today?",
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
        initialResponse: "Welcome, traveler. As the leader of this humble village, I extend my greetings. How may I assist you on this fine day?",
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
    }, 
    tavernKeeper: {
        initialResponse: "Well met, traveler! Come in, come in. Warm your bones by the hearth and tell ol' Bart what'll quench your thirst today.",
        systemContent: 'You are the tavern keeper of a bustling medieval inn. A 10-year-old kid approaches you, asking questions about their lost pet.',
        '1': {
            text: "Hello, tavern keeper. Have you heard anything about a lost pet?",
            options: ['2', '3', '4', 'leave']
        },
        '2': {
            text: "I was told you know many things that happen around town. Seen any lost animals?",
            options: ['5', '6', '7', 'start']
        },
        '3': {
            text: "Do pets ever wander into the tavern?",
            options: ['8', '9', '10', 'start']
        },
        '4': {
            text: "Someone recommended I talk to Steve about my lost pet. Where can I find him?",
            options: ['11', '12', '13', 'start']
        },
        '5': {
            text: "I've been searching everywhere. Any suggestions on where to look?",
            options: ['start', 'leave']
        },
        '6': {
            text: "Do people in town ever talk about seeing lost animals?",
            options: ['start', 'leave']
        },
        '7': {
            text: "Could my pet have wandered into the forest?",
            options: ['start', 'leave']
        },
        '8': {
            text: "Is there any place nearby where lost pets might go?",
            options: ['start', 'leave']
        },
        '9': {
            text: "Maybe someone in the tavern saw something. Can I ask around?",
            options: ['start', 'leave']
        },
        '10': {
            text: "Has anyone mentioned seeing a lost pet recently?",
            options: ['start', 'leave']
        },
        '11': {
            text: "Thanks, I'll look for Steve. Maybe he can help.",
            options: ['start', 'leave']
        },
        '12': {
            text: "Do you think Steve might have seen my pet?",
            options: ['start', 'leave']
        },
        '13': {
            text: "I really hope Steve can help. I miss my pet so much.",
            options: ['start', 'leave']
        },
        'start': {
            text: "I have more questions.",
            options: ['1']
        },
        'end': {
            text: "Thanks for your help, tavern keeper.",
            options: ['start', 'leave']
        },
        'leave': {
            text: "Goodbye and thanks for the information.",
            options: []
        }
    }, 
    steve: {
        initialResponse: "G'day mate! Steve here. I've got a soft spot for all creatures big and small. How can I help you today?",
        systemContent: 'You are Steve, a passionate townsman known for your love of animals, reminiscent of Steve Irwin. You have various exotic pets at home, and you\'re always eager to help with any animal-related issue. A concerned 10-year-old kid approaches you about their lost pet.',
        '1': {
            text: "Hey Steve, I was told you might be able to help with my lost pet.",
            options: ['2', '3', '4', 'leave']
        },
        '2': {
            text: "You're great with animals. Have you seen my lost pet?",
            options: ['5', '6', '7', 'start']
        },
        '3': {
            text: "I'm really worried. Do you think it might have wandered off into the wild?",
            options: ['8', '9', '10', 'start']
        },
        '4': {
            text: "Can you show me your pets? Maybe it'll help me feel better.",
            options: ['11', '12', '13', 'start']
        },
        '5': {
            text: "Where do animals usually go when they're lost?",
            options: ['14', '15', 'start']
        },
        '6': {
            text: "What should I do now? Any advice?",
            options: ['16', '17', 'start']
        },
        '7': {
            text: "If my pet came to you, would you keep it?",
            options: ['start', 'leave']
        },
        '8': {
            text: "There have been some whispers about goblins recently. Do they... take pets?",
            options: ['18', '19', '20', 'start']
        },
        '9': {
            text: "I just hope it didn't get hurt in the forest.",
            options: ['start', 'leave']
        },
        '10': {
            text: "Any idea how I can track my pet in the wild?",
            options: ['start', 'leave']
        },
        '11': {
            text: "Wow, these are fascinating creatures! How did you get them?",
            options: ['21', '22', 'start']
        },
        '12': {
            text: "Your animals look happy and well-cared for.",
            options: ['start', 'leave']
        },
        '13': {
            text: "Did any of these animals ever get lost and then come back?",
            options: ['start', 'leave']
        },
        '14': {
            text: "Could the goblins in the area be involved?",
            options: ['23', '24', 'start']
        },
        '15': {
            text: "How can I safely search for it in the woods?",
            options: ['start', 'leave']
        },
        '16': {
            text: "Thanks for the advice, Steve.",
            options: ['leave']
        },
        '17': {
            text: "Maybe someone in town has seen it?",
            options: ['start', 'leave']
        },
        '18': {
            text: "Goblins? That's worrying. How do I approach them?",
            options: ['start', 'leave']
        },
        '19': {
            text: "I need to find these goblins then.",
            options: ['start', 'leave']
        },
        '20': {
            text: "Are the goblins dangerous?",
            options: ['start', 'leave']
        },
        '21': {
            text: "Each one has its own story, right?",
            options: ['start', 'leave']
        },
        '22': {
            text: "Must be a lot of work taking care of all of them.",
            options: ['start', 'leave']
        },
        '23': {
            text: "I've heard they can be tricky. How do I deal with goblins?",
            options: ['start', 'leave']
        },
        '24': {
            text: "Where can I find these goblins?",
            options: ['start', 'leave']
        },
        'start': {
            text: "I had another question.",
            options: ['1']
        },
        'leave': {
            text: "Thank you for your help, Steve.",
            options: []
        }
    }, 

    troll: {
        initialResponse: "Who dares approach my bridge? Speak now or prepare to face my wrath!",
        systemContent: 'You are a massive troll, notorious for guarding a bridge in the middle of a dense forest. You\'re protective of your territory and rarely allow anyone to cross. As you\'re lounging, a 10-year-old adventurer approaches you with intent to cross.',
        '1': {
            text: "Nobody passes my bridge!",
            options: ['2', '3', '4', '5', '6']
        },
        '2': {
            text: "[Strength Check] I'm not scared of you! Let me pass, or you'll regret it.",
            options: ['7', '8']
        },
        '3': {
            text: "[Dexterity Check] Without warning, you make a dash to slip between the troll's legs.",
            options: ['9', '10']
        },
        '4': {
            text: "[Wisdom Check] If I bring a sheep as a toll in the future, will you let me cross now?",
            options: ['11', '12']
        },
        '5': {
            text: "Prepare to fight!",
            options: ['13', '14']
        },
        '6': {
            text: "That troll is HUGE. Time to run!",
            options: ['start', 'leave']
        },
        '7': {
            text: "The troll laughs, not intimidated.",
            options: ['start', 'leave']
        },
        '8': {
            text: "The troll looks surprised, pondering your boldness.",
            options: ['start', 'leave']
        },
        '9': {
            text: "You almost make it, but the troll snags your ankle with a massive hand.",
            options: ['start', 'leave']
        },
        '10': {
            text: "With a quick duck and roll, you manage to dash past the troll!",
            options: ['leave']
        },
        '11': {
            text: "The troll nods, seemingly interested in the deal.",
            options: ['start', 'leave']
        },
        '12': {
            text: "The troll seems to think for a moment but remains stubborn.",
            options: ['start', 'leave']
        },
        '13': {
            text: "The troll roars, ready for a battle.",
            options: ['leave']
        },
        '14': {
            text: "You quickly realize fighting the troll is not in your favor.",
            options: ['leave']
        },
        'start': {
            text: "The troll guards the path aggressively.",
            options: ['1']
        },
        'leave': {
            text: "The troll watches as you sheepishly back away.",
            options: []
        }
    }, 
    blacksmith: {
        initialResponse: 'Hello, young adventurer. What brings you to my forge?',
        systemContent: 'You are at the village blacksmith’s forge. The blacksmith, a burly man with a thick beard, hammers away at a piece of glowing metal. The clangs of his hammer echo in your ears. The village leader mentioned he might have some extra gear for you and some knowledge about the local vermin. You decide to strike up a conversation.',
        
        '1': {
            text: "Excuse me, blacksmith. The village leader sent me. Do you have any spare armor or weapons?",
            options: ['2', '3', '4', 'leave']
        },
        '2': {
            text: "I'm going to need some equipment to face the local vermin. Can you help?",
            options: ['5', '6', '7', 'start']
        },
        '3': {
            text: "What kind of weapons would be best to handle vermin?",
            options: ['8', '9', '10', 'start']
        },
        '4': {
            text: "I heard you've been around for a while. Any advice about the creatures around here?",
            options: ['11', '12', '13', 'start']
        },
        '5': {
            text: "I don't have much money. Can I work for you in exchange for some gear?",
            options: ['start', 'leave']
        },
        '6': {
            text: "Do you think the basic equipment will suffice for my training?",
            options: ['start', 'leave']
        },
        '7': {
            text: "Have other adventurers come to you for similar reasons?",
            options: ['start', 'leave']
        },
        '8': {
            text: "Are there any special techniques I should know about using the weapons?",
            options: ['start', 'leave']
        },
        '9': {
            text: "How often do you craft weapons for people in my situation?",
            options: ['start', 'leave']
        },
        '10': {
            text: "What materials make the best weapons?",
            options: ['start', 'leave']
        },
        '11': {
            text: "What can you tell me about the vermin in this area?",
            options: ['start', 'leave']
        },
        '12': {
            text: "Have you ever had to fend off these creatures yourself?",
            options: ['start', 'leave']
        },
        '13': {
            text: "I'm quite new to this. Any general advice before I head out?",
            options: ['start', 'leave']
        },
        'start': {
            text: "I had another question.",
            options: ['1']
        },
        'leave': {
            text: "Thank you for your time, blacksmith.",
            options: []
        }
    }, 
    giantRat: {
        initialResponse: 'You see a giant rat in a dark alley.',
        systemContent: 'Narrate a menacing giant rat in a dark alley illuminated by the pale moonlight. A 10-year-old adventurer approaches it, looking for trouble. The rat bears sharp teeth makes scary noises. Narrate a short description in 3rd person. ',
    
        '1': {
            text: "First Dialogue",
            options: ['2', '3']
        },
        '2': {
            text: "Draw your weapon. Prepare to strike",
            options: ['fight']
        },
        '3': {
            text: "That's a biggest rat I've ever seen. Consider your options.",
            options: ['fight', 'leave']
        },
        'fight': {
            text: "Fight the rat.",
            options: []
        },
        'leave': {
            text: "Deciding it's better to be safe, you slowly back away, keeping an eye on the rat.",
            options: []
        }
    }
    
    
    
    
};
