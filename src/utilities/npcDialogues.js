export const npcDialogues = {
  wiseman: {
    initialResponse: `Ah, young one, you seek the wisdom of the ages. 
      What burdens your heart or sparks your curiosity today?`,
    systemContent: `You are an old wise man in a dungeon and dragons adventure speaking with a 
      10-year-old kid. Stay in character DO NOT explain or say anything about dungeons 
      and dragons. Speak ONLY in 1st person. Do NOT narrate. If the kid asks you about 
      their lost cat, tell them to travel to the nearby village to the Southeast. 
      if the kid asks you about the mountains, tell him that there are towns with 
      friendly people but also be aware of trolls, goblins, spiders, and even devils. 
      If the kid asks you who you are explain you are a helpful wiseman in a mysterious way. 
      Keep your responses short in less than 4 sentences.`,
    1: {
      text: 'What else would you like to know?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: "I'm an adventurer exploring these mountains.",
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: "I'm here looking for my lost cat.",
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: 'Who are you to ask?',
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: 'What can you tell me about them?',
      options: ['start', 'instruct'],
    },
    6: {
      text: 'Have many others come through here?',
      options: ['start', 'instruct'],
    },
    7: {
      text: 'Are there any tales about treasures here?',
      options: ['start', 'instruct'],
    },
    8: {
      text: 'What should I be cautious of?',
      options: ['start', 'instruct'],
    },
    9: {
      text: 'What have you seen in these parts?',
      options: ['start', 'instruct'],
    },
    10: {
      text: 'Is there a safe path to take?',
      options: ['start', 'instruct'],
    },
    11: {
      text: 'Why should I trust you?',
      options: ['start', 'instruct'],
    },
    12: {
      text: 'Why would you help me?',
      options: ['start', 'instruct'],
    },
    13: {
      text: 'Have you seen my cat?',
      options: ['start', 'instruct'],
    },
    start: {
      text: 'Ask a different question.',
      options: ['1'],
    },
    instruct: {
      text: 'Well, I better get going.',
      instructions: `I would like to impart you with a gift. 
      Either the strength of a warror, the nimbleness of a rogue, or 
      the wisdom of a mage. This is your class. Choose wisely.`,
      options: ['start', 'chooseClass'],
    },
    chooseClass: {
      text: 'Choose your class.',
      text2: 'Thank you for your wisdom.',
      options: [],
    },
    leave: {
      text: 'Goodbye, wise man',
      options: [],
    },
  },

  villageLeader: {
    initialResponse:
      'Welcome, traveler. As the leader of this humble village, I extend my greetings. How may I assist you on this fine day?',
    systemContent: `You are the female village leader in a medieval fantasy village. A 10-year-old kid 
      approaches you, worried about their lost pet. Stay in character DO NOT explain or say anything about dungeons 
      and dragons. Speak ONLY in 1st person. Do NOT narrate. If the kid asks you about 
      their lost cat, tell them there's a path to the goblin camp to the East but be careful. If the kid asks you about the 
      town, tell him that they are welcome to Dajavinris and invite them to explore and stay as long as 
      needed. The town is called Dajavinris because of the five founders davis, jaylan, gavin, nathan, and chris. 
      If the kid asks you about the area, say that your town has proper safety 
      measures against any unwanted guests including trolls, goblins, and you can inlude a 
      few more fantasy monsters. Keep your responses short in less than 4 sentences.`,
    1: {
      text: 'How else can I help you, young one?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: 'Excuse me, village leader. Where am I?',
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: 'A wiseman told me to ask you for help finding my lost cat.',
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: 'I DEMAND that you tell me where my lost cat is.',
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: 'Why is the town called Dajavinris?',
      options: ['start', 'instruct'],
    },
    6: {
      text: 'Have you seen my cat around town?',
      options: ['start', 'instruct'],
    },
    7: {
      text: 'Do you think anyone knows where my cat might be?',
      options: ['start', 'instruct'],
    },
    8: {
      text: 'I miss my pet so much. Any advice would help.',
      options: ['start', 'instruct'],
    },
    9: {
      text: 'Do you know anyone who might have seen my cat?',
      options: ['start', 'instruct'],
    },
    10: {
      text: 'Could my cat be in danger in this village?',
      options: ['start', 'instruct'],
    },
    11: {
      text: "I'm not sure if I believe you. Tell me where my cat is.",
      options: ['start', 'instruct'],
    },
    12: {
      text: 'Has anything like this happened before?',
      options: ['start', 'instruct'],
    },
    13: {
      text: "I just want my pet back. I hope it's safe.",
      options: ['start', 'instruct'],
    },
    start: {
      text: 'I have another question.',
      options: ['1'],
    },
    instruct: {
      text: "I'm off to find my cat. Thank you for your help.",
      instructions: `You are welcome. Remember that you can always come back to Dajavinris. 
      Prepare yourself. You never know what to expect on the mountain pass to the East.`,
      options: ['start', 'leave'],
    },
    end: {
      text: 'Thank you for your help.',
      options: ['start', 'leave'],
    },
    leave: {
      text: 'Goodbye, village leader.',
      options: [],
    },
  },
  tavernKeeper: {
    initialResponse:
      "Well met, traveler! Come in, come in. Warm your bones by the hearth and tell ol' Bart what'll quench your thirst today.",
    systemContent:
      'You are the tavern keeper of a bustling medieval inn. A 10-year-old kid approaches you, asking questions about their lost pet.',
    1: {
      text: 'Hello, tavern keeper. Have you heard anything about a lost pet?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: 'I was told you know many things that happen around town. Seen any lost animals?',
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: 'Do pets ever wander into the tavern?',
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: 'Someone recommended I talk to Steve about my lost pet. Where can I find him?',
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: "I've been searching everywhere. Any suggestions on where to look?",
      options: ['start', 'leave'],
    },
    6: {
      text: 'Do people in town ever talk about seeing lost animals?',
      options: ['start', 'leave'],
    },
    7: {
      text: 'Could my pet have wandered into the forest?',
      options: ['start', 'leave'],
    },
    8: {
      text: 'Is there any place nearby where lost pets might go?',
      options: ['start', 'leave'],
    },
    9: {
      text: 'Maybe someone in the tavern saw something. Can I ask around?',
      options: ['start', 'leave'],
    },
    10: {
      text: 'Has anyone mentioned seeing a lost pet recently?',
      options: ['start', 'leave'],
    },
    11: {
      text: "Thanks, I'll look for Steve. Maybe he can help.",
      options: ['start', 'leave'],
    },
    12: {
      text: 'Do you think Steve might have seen my pet?',
      options: ['start', 'leave'],
    },
    13: {
      text: 'I really hope Steve can help. I miss my pet so much.',
      options: ['start', 'leave'],
    },
    start: {
      text: 'I have more questions.',
      options: ['1'],
    },
    end: {
      text: 'Thanks for your help, tavern keeper.',
      options: ['start', 'leave'],
    },
    leave: {
      text: 'Goodbye and thanks for the information.',
      options: [],
    },
  },
  steve: {
    initialResponse: `G'day mate! Sir Steve here. I've got a soft spot for all creatures big and small. How can I help you today?`,
    systemContent: `You are Sir Steve of clan irwin (based off steve irwin). A 10-year-old kid 
    approaches you, worried about their lost pet. Stay in character DO NOT explain or say anything about dungeons 
    and dragons. Speak ONLY in 1st person. Do NOT narrate. If the kid asks you about 
    their lost cat, tell them you hope one of those goblins didnt run off with it. If the kid asks for advice or help, tell them to talk to the village leader. 
    The goblins have been stealing from your vegetable patch recently.
    If the kid asks about animals, talk about the exotic animals you have at home. Give a few examples. 
    If the kid asks who you are, tell them you are steve of clan irwin. And give a little clue about steve irwin
    but in a subtle manner. Keep your responses short in less than 4 sentences.`,
    1: {
      text: 'How else can I help ya, mate?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: 'Hi Steve of Clan Irwin, I was told you might be able to help with my lost pet.',
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: "I'm really worried about my cat. Have you seen him?",
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: "Whoa, there's a lot of animals around here! What kind of animals do you have?",
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: "Where do animals usually go when they're lost?",
      options: ['start', 'instruct'],
    },
    6: {
      text: 'What should I do now? Any advice?',
      options: ['start', 'instruct'],
    },
    7: {
      text: 'If my pet came to you, would you keep it?',
      options: ['start', 'instruct'],
    },
    8: {
      text: 'Do goblins... Do they take pets?',
      options: ['start', 'instruct'],
    },
    9: {
      text: "I just hope he doesn't get hurt in the mountains.",
      options: ['start', 'instruct'],
    },
    10: {
      text: 'Any idea how I can track my pet in the wild?',
      options: ['start', 'instruct'],
    },
    11: {
      text: 'Wow, these are fascinating creatures! How did you get them?',
      options: ['start', 'instruct'],
    },
    12: {
      text: 'Your animals look happy and well-cared for.',
      options: ['start', 'instruct'],
    },
    13: {
      text: 'Did any of these animals ever get lost and then come back?',
      options: ['start', 'instruct'],
    },
    start: {
      text: 'I had another question.',
      options: ['1'],
    },
    instruct: {
      text: 'What should I do next?',
      instructions:
        'I would recommend talking to the village leader. She might know where to find those goblins.',
      options: ['start', 'leave'],
    },
    leave: {
      text: 'Thank you for your help, Steve.',
      options: [],
    },
  },

  troll: {
    initialResponse:
      'Who dares approach my bridge? Speak now or prepare to face my wrath!',
    systemContent:
      "You are a massive troll, notorious for guarding a bridge in the middle of a dense forest. You're protective of your territory and rarely allow anyone to cross. As you're lounging, a 10-year-old adventurer approaches you with intent to cross.",
    1: {
      text: 'Nobody passes my bridge!',
      options: ['str', 'dex', 'wis', 'fight', 'leave'],
    },
    str: {
      text: " I'm not scared of you! Let me pass, or you'll regret it.",
      options: ['7', '8'],
      check: 'strength',
      difficultyScore: 12,
    },
    dex: {
      text: " Without warning, you make a dash to slip between the troll's legs.",
      options: ['9', '10'],
      check: 'dexterity',
      difficultyScore: 12,
    },
    wis: {
      text: ' If I bring a sheep as a toll in the future, will you let me cross now?',
      options: ['11', '12'],
      check: 'wisdom',
      difficultyScore: 12,
    },
    fight: {
      text: 'Prepare to fight!',
      options: ['13', '14'],
    },
    6: {
      text: 'That troll is HUGE. Time to run!',
      options: ['start', 'leave'],
    },
    7: {
      text: 'The troll laughs, not intimidated.',
      options: ['start', 'leave'],
    },
    8: {
      text: 'The troll looks surprised, pondering your boldness.',
      options: ['start', 'leave'],
    },
    9: {
      text: 'You almost make it, but the troll snags your ankle with a massive hand.',
      options: ['start', 'leave'],
    },
    10: {
      text: 'With a quick duck and roll, you manage to dash past the troll!',
      options: ['leave'],
    },
    11: {
      text: 'The troll nods, seemingly interested in the deal.',
      options: ['start', 'leave'],
    },
    12: {
      text: 'The troll seems to think for a moment but remains stubborn.',
      options: ['start', 'leave'],
    },
    13: {
      text: 'The troll roars, ready for a battle.',
      options: ['leave'],
    },
    14: {
      text: 'You quickly realize fighting the troll is not in your favor.',
      options: ['leave'],
    },
    start: {
      text: 'The troll guards the path aggressively.',
      options: ['1'],
    },
    leave: {
      text: 'That troll is HUGE. Time to run!',
      options: [],
    },
  },
  blacksmith: {
    initialResponse: 'Hello, young adventurer. What brings you to this place?',
    systemContent: `You are a village blacksmith that does not like to tell his name to strangers. A 10-year-old kid approaches you, worried about their lost pet. Stay in character DO NOT explain or say anything about dungeons and dragons. Speak ONLY in 1st person. Do NOT narrate. If the kid asks you about their lost cat, tell them to ask Sir Steve the Knight of Creatures, he is always interested in news of new critters. if the kid asks you about the weapons, tell him that it takes a long time to forge a sturdy sword capable of defeating trolls. The weapons will be ready in time, but I typically make other usefull things for the village. If the player asks about armor, tell them you are more used to repairing caravan wheels, but you will try to make something, it will take time. If the player asks about creatures or vermin tell them to use caution in the wild areas outside of town. Only iff the player asks if you have dealt with vermin, say your hammer makes short work of evil. If the player asks for general advice tell them the town is full of kind souls. Do not be afraid to seek knoledge from their experence. Keep your responses less than 4 sentences.`,

    1: {
      text: 'Excuse me, blacksmith. The village leader sent me. Do you have any spare armor or weapons?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: "I'm going to need some equipment to face the local vermin. Can you help?",
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: 'What kind of weapons would be best to handle vermin?',
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: "I heard you've been around for a while. Any advice about the creatures around here?",
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: "I don't have much money. Can I work for you in exchange for some gear?",
      options: ['start', 'leave'],
    },
    6: {
      text: 'Do you think the basic equipment will suffice for my training?',
      options: ['start', 'leave'],
    },
    7: {
      text: 'Have other adventurers come to you for similar reasons?',
      options: ['start', 'leave'],
    },
    8: {
      text: 'Are there any special techniques I should know about using the weapons?',
      options: ['start', 'leave'],
    },
    9: {
      text: 'How often do you craft weapons for people in my situation?',
      options: ['start', 'leave'],
    },
    10: {
      text: 'What materials make the best weapons?',
      options: ['start', 'leave'],
    },
    11: {
      text: 'What can you tell me about the vermin in this area?',
      options: ['start', 'leave'],
    },
    12: {
      text: 'Have you ever had to fend off these creatures yourself?',
      options: ['start', 'leave'],
    },
    13: {
      text: "I'm quite new to this. Any general advice before I head out?",
      options: ['start', 'leave'],
    },
    start: {
      text: 'I had another question.',
      options: ['1'],
    },
    leave: {
      text: 'Thank you for your time, blacksmith.',
      options: [],
    },
  },
  giantRat: {
    initialResponse: 'You see a giant rat in a dark alley.',
    systemContent:
      'Narrate a menacing giant rat in a dark alley illuminated by the pale moonlight. A 10-year-old adventurer approaches it, looking for trouble. The rat bears sharp teeth makes scary noises. Narrate a short description in 3rd person. ',

    1: {
      text: 'First Dialogue',
      options: ['2', '3'],
    },
    2: {
      text: 'Draw your weapon. Prepare to strike',
      options: ['fight'],
    },
    3: {
      text: "That's a biggest rat I've ever seen. Consider your options.",
      options: ['fight', 'leave'],
    },
    fight: {
      text: 'Fight the rat.',
      options: [],
    },
    leave: {
      text: "Deciding it's better to be safe, you slowly back away, keeping an eye on the rat.",
      options: [],
    },
  },
  giantSnake: {
    initialResponse:
      'You stumble upon a giant snake coiled in the shadows of a thick forest.',
    systemContent:
      'Narrate a menacing giant snake, its scales glistening in patches of sunlight that pierce through the thick forest canopy. A 10-year-old adventurer stands still, sensing the potential danger. The snake hisses, its tongue flicking out, tasting the air. Narrate a short description in 3rd person.',

    1: {
      text: 'First Dialogue',
      options: ['2', '3'],
    },
    2: {
      text: 'Draw your weapon. The snake is not to be trusted.',
      options: ['fight'],
    },
    3: {
      text: "That's the largest snake I've ever seen. Weigh your options carefully.",
      options: ['fight', 'leave'],
    },
    fight: {
      text: 'Engage the snake, ready for a challenge.',
      options: [],
    },
    leave: {
      text: "Choosing caution over valor, you tread lightly, ensuring you don't provoke the snake as you back away.",
      options: [],
    },
  },
  villageLeader2: {
    initialResponse:
      "Ah, young adventurer! You're back. After speaking to Steve, I believe you might have an inkling about the goblins. But before you set off, you'll need some gear. Speak to the blacksmith and learn how to handle the local vermin first. Goblins can be quite a handful.",

    1: {
      text: "Thank you for the advice. I've already spoken to the blacksmith about gear. What should I know about the local vermin?",
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: 'Why do you think I should train on vermin first? Are the goblins that dangerous?',
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: 'Do you have any insights about where these goblins might be?',
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: 'What kind of creatures are considered vermin here?',
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: "How long do you think it'll take for me to be ready to face the goblins?",
      options: ['start', 'leave'],
    },
    6: {
      text: 'Are there others in the village who might assist me on this quest?',
      options: ['start', 'leave'],
    },
    7: {
      text: 'Have there been any other incidents like mine in the village?',
      options: ['start', 'leave'],
    },
    8: {
      text: 'Is there a particular strategy to approach or negotiate with goblins?',
      options: ['start', 'leave'],
    },
    9: {
      text: "I'm determined to get my pet back. Any last words of advice?",
      options: ['start', 'leave'],
    },
    10: {
      text: 'Do goblins have any known weaknesses?',
      options: ['start', 'leave'],
    },
    11: {
      text: 'Do you have any training tips or places I can practice?',
      options: ['start', 'leave'],
    },
    12: {
      text: 'How have the villagers been handling these vermin?',
      options: ['start', 'leave'],
    },
    13: {
      text: 'Have the vermin caused any major issues in the village recently?',
      options: ['start', 'leave'],
    },
    start: {
      text: 'I had another question.',
      options: ['1'],
    },
    leave: {
      text: "I'll get to it then. Thank you for your guidance.",
      options: [],
    },
  },
  villageLeader3: {
    initialResponse:
      "You've done a commendable job handling those vermin, young adventurer. I truly believe you're ready to face the goblins now. Look to the mountain pass in the west; there should be a path available for you now.",

    1: {
      text: 'Thank you for your faith in me. What should I expect in the mountain pass?',
      options: ['2', '3', '4', 'leave'],
    },
    2: {
      text: 'Are the goblins in the mountains different from the usual ones?',
      options: ['5', '6', '7', 'start'],
    },
    3: {
      text: "Do you think the goblins will have my pet? What if they've harmed it?",
      options: ['8', '9', '10', 'start'],
    },
    4: {
      text: 'How can I prepare for the challenges in the mountain pass?',
      options: ['11', '12', '13', 'start'],
    },
    5: {
      text: 'Is there a leader among the goblins I should be wary of?',
      options: ['start', 'leave'],
    },
    6: {
      text: 'Do villagers often venture into the mountain pass?',
      options: ['start', 'leave'],
    },
    7: {
      text: "I've heard there might be more than just goblins in those mountains. Is that true?",
      options: ['start', 'leave'],
    },
    8: {
      text: 'If the goblins are hostile, should I try to negotiate or go straight into combat?',
      options: ['start', 'leave'],
    },
    9: {
      text: "I'm nervous but determined. Any last pieces of advice?",
      options: ['start', 'leave'],
    },
    10: {
      text: 'How do I ensure my safety and the safety of my pet in goblin territory?',
      options: ['start', 'leave'],
    },
    11: {
      text: 'Should I stock up on any specific supplies before heading to the mountains?',
      options: ['start', 'leave'],
    },
    12: {
      text: 'Have other adventurers returned successfully from the mountain pass?',
      options: ['start', 'leave'],
    },
    13: {
      text: 'Is there a best time of day to approach the mountain pass?',
      options: ['start', 'leave'],
    },
    start: {
      text: 'I had another question.',
      options: ['1'],
    },
    leave: {
      text: "Thank you for everything. I'll head to the mountain pass and bring my pet back.",
      options: [],
    },
  },
  devil: {
    initialResponse:
      "Ah, young adventurer. I've been watching your journey with great interest. How about we make a little deal to aid you in your quest? I assure you, it's an offer you won't want to refuse.",
    systemContent:
      "I stand at a shadowy crossroad, my crimson skin and spiraling horns shimmering in the dim light. The forest around us is still, as if even nature itself is holding its breath. A 10-year-old adventurer stumbles upon me, and I can't resist the opportunity to make a tempting offer. My sly grin is in place, and dark energy crackles around me, awaiting the child's decision.",

    1: {
      text: 'What kind of deal are you offering?',
      options: ['2', '3', '4', 'leave', 'fight'],
    },
    2: {
      text: 'A powerful weapon? That sounds tempting. But what do you want in return?',
      options: ['acceptDeal1', 'rejectDeal', 'fight'],
    },
    3: {
      text: "Information could be invaluable. What's the catch?",
      options: ['acceptDeal2', 'rejectDeal', 'fight'],
    },
    4: {
      text: "Guaranteed safety? Why would you offer me that, and what's the price?",
      options: ['acceptDeal3', 'rejectDeal', 'fight'],
    },
    5: {
      text: "Manipulating time? That's a unique ability. What would it cost me?",
      options: ['acceptDeal4', 'rejectDeal', 'fight'],
    },
    acceptDeal1: {
      text: "Alright, I accept your offer for the weapon. I'll perform the dark ritual.",
      options: [],
    },
    acceptDeal2: {
      text: "I'll take the information. Here's my memory.",
      options: [],
    },
    acceptDeal3: {
      text: "If you guarantee my safety, I'll do what you ask.",
      options: [],
    },
    acceptDeal4: {
      text: "Manipulate time for me. I'm ready to pay the price.",
      options: [],
    },
    rejectDeal: {
      text: "I don't trust you. I won't accept any of your deals.",
      options: ['fight', 'leave'],
    },
    fight: {
      text: "I've faced many challenges on this journey. I won't be intimidated by you. Prepare to fight!",
      options: [],
    },
    leave: {
      text: "I'll find another way. I don't need to make deals with the likes of you.",
      options: [],
    },
  },
  shelob: {
    initialResponse:
      'Before you lies the entrance to the goblin camp, but guarding it is the fearsome Shelob, the giant spider. Its many eyes glint menacingly, and its fangs drip with venom.',
    systemContent:
      "I am Shelob, the terror of the tunnels, a behemoth among spiders. My thick, hairy legs stretch out, sensing for prey, and my massive frame blocks the path ahead. A 10-year-old adventurer stands before me, and I can sense their fear. But there's also determination. Will they challenge me or flee from my deadly embrace?",

    1: {
      text: "Prepare for battle! I won't let you stand in my way.",
      options: ['fight', '2', '3'],
    },
    2: {
      text: 'Is there any way we can avoid this fight?',
      options: ['bargain', 'fight', 'run'],
    },
    3: {
      text: "I've heard tales of your might. Perhaps we can come to an understanding?",
      options: ['bargain', 'fight', 'run'],
    },
    fight: {
      text: 'Summoning all your courage, you ready your weapon and charge at the monstrous spider.',
      options: [],
    },
    run: {
      text: 'Deciding that discretion is the better part of valor, you swiftly retreat, looking for another way into the goblin camp.',
      options: [],
    },
    bargain: {
      text: "You take a deep breath, hoping to find some common ground with the creature. Perhaps there's something it desires?",
      options: [],
    },
  },
  goblinGate: {
    initialResponse:
      "As you approach the entrance to the goblin camp, a group of menacing goblins block your path. Their sharp, yellowed teeth are bared, and their beady eyes size you up. It seems they're not keen on letting anyone through without a fight.",

    systemContent:
      "You are a guard at the front gate of the goblin camp. You and your fellow goblins are alert, always prepared for intruders. Today, a determined 10-year-old adventurer approaches, with clear intent to enter the camp. It's your duty to stop them.",

    1: {
      text: "I've come for my pet. Hand it over, and there won't be any trouble.",
      options: ['2', '3', '4'],
    },
    2: {
      text: 'Why have you been taking pets from the village?',
      options: ['5', '6', '7'],
    },
    3: {
      text: "I don't want to hurt you, but I will if I must. Let me through.",
      options: ['8', '9', '10'],
    },
    4: {
      text: 'Enough talk. Prepare yourselves!',
      options: ['fight'],
    },
    5: {
      text: "Do you realize the pain you're causing?",
      options: ['fight'],
    },
    6: {
      text: 'There must be a reason for all of this. Tell me!',
      options: ['fight'],
    },
    7: {
      text: "I've faced many challenges to get here. Don't make this harder than it needs to be.",
      options: ['fight'],
    },
    8: {
      text: "I've dealt with bigger threats than you. Stand aside!",
      options: ['fight'],
    },
    9: {
      text: 'This is your last chance. Move, or face the consequences.',
      options: ['fight'],
    },
    10: {
      text: "Let's settle this. Here and now.",
      options: ['fight'],
    },
    fight: {
      text: 'With determination in your eyes, you ready yourself for battle against the goblins.',
      options: [],
    },
  },
  cat: {
    systemContent:
      "You are a cat, a beloved pet of a 10-year-old adventurer. You were kidnapped by goblins and taken to their camp. You're currently locked in a cage, but you're determined to escape and return to your owner.",
    initialResponse:
      "You find your cat! It's locked in a cage, but it's alive and well. It meows happily when it sees you, and you can tell it's eager to return home.",
    1: {
      text: "I've been so worried! Are you okay?",
      options: ['2', '3'],
    },
    2: {
      text: 'You can talk?! How is this possible?',
      options: ['4', '5'],
    },
    3: {
      text: "We need to get out of here. But first, there's one more goblin to face.",
      options: ['6', '7'],
    },
    4: {
      text: 'Is there anything else different about you now?',
      options: ['8', '9'],
    },
    5: {
      text: "Let's focus on escaping first. We can figure this out later.",
      options: ['6'],
    },
    6: {
      text: 'Will you fight by my side?',
      options: ['10'],
    },
    7: {
      text: "Stay close and be ready. We'll need to work together.",
      options: ['10'],
    },
    8: {
      text: "Whatever happens, I'm just glad to have found you.",
      options: ['10'],
    },
    9: {
      text: "We're stronger together. Let's face the goblin.",
      options: ['10'],
    },
    10: {
      text: "Let's go. We're taking back our freedom.",
      options: [], // End of the interaction.
    },
  },
  dog: {
    systemContent:
      "You are a dog, a beloved pet of a 10-year-old adventurer. You were kidnapped by goblins and taken to their camp. You're currently locked in a cage, but you're determined to escape and return to your owner.",
    initialResponse:
      "You find your dog! It's locked in a cage, but it's alive and well. It barks happily when it sees you, and you can tell it's eager to return home.",
    1: {
      text: "I've been so worried! Are you okay?",
      options: ['2', '3'],
    },
    2: {
      text: 'You can talk?! How is this possible?',
      options: ['4', '5'],
    },
    3: {
      text: "We need to get out of here. But first, there's one more goblin to face.",
      options: ['6', '7'],
    },
    4: {
      text: 'Is there anything else different about you now?',
      options: ['8', '9'],
    },
    5: {
      text: "Let's focus on escaping first. We can figure this out later.",
      options: ['6'],
    },
    6: {
      text: 'Will you fight by my side?',
      options: ['10'],
    },
    7: {
      text: "Stay close and be ready. We'll need to work together.",
      options: ['10'],
    },
    8: {
      text: "Whatever happens, I'm just glad to have found you.",
      options: ['10'],
    },
    9: {
      text: "We're stronger together. Let's face the goblin.",
      options: ['10'],
    },
    10: {
      text: "Let's go. We're taking back our freedom.",
      options: [], // End of the interaction.
    },
  },
  goblinKing: {
    systemContent:
      'You and your now-speaking cat approach the innermost part of the goblin camp. Before you stands the goblin boss, larger and more menacing than any goblin you’ve encountered. Surrounding him are goblin minions, eyeing you with malicious intent. The goblin boss grins, revealing a row of sharp teeth.',

    initialResponse:
      "Ah, the intruder and the creature! Do you know why we took your precious pet? It's been stopping our raids in the village. That cat of yours has some special powers, doesn't it?",

    1: {
      text: 'You had no right to take my cat! Give her back now!',
      options: ['2', '3', '4'],
    },
    2: {
      text: "Why didn't you just leave the village alone?",
      options: ['5', '6', '7'],
    },
    3: {
      text: "This ends now. We're not letting you harm our village any longer.",
      options: ['8', '9'],
    },
    4: {
      text: "So you're scared of a little cat?",
      options: ['10', '11'],
    },
    5: {
      text: 'My cat was just protecting our home. What did you expect?',
      options: ['8', '9'],
    },
    6: {
      text: "There's always another way than resorting to theft and kidnapping.",
      options: ['8', '9'],
    },
    7: {
      text: "You could've asked for help or made a trade. But you chose violence.",
      options: ['8', '9'],
    },
    8: {
      text: "Prepare for battle! You're not getting away with this.",
      options: [], // End, leads to final battle.
    },
    9: {
      text: "You underestimated us. It's time to pay for your actions.",
      options: [], // End, leads to final battle.
    },
    10: {
      text: "Maybe you should've rethought your strategy before taking on a magical cat.",
      options: ['8', '9'],
    },
    11: {
      text: 'Looks like you bit off more than you could chew. Ready to face the consequences?',
      options: ['8', '9'],
    },
  },
};
