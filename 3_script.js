const situations = [
    { text: "You find a lost cat on the street.", choices: [
        { text: "Take it home and care for it.", awesome: 10, evil: 0 },
        { text: "Ignore it and walk away.", awesome: 2, evil: 2 },
        { text: "Find its owner.", awesome: 8, evil: 0 },
        { text: "Take it to the shelter.", awesome: 9, evil: 0 },
        { text: "Give it food and leave it.", awesome: 6, evil: 0 }
    ] },
    { text: "Your friend is feeling sad.", choices: [
        { text: "Comfort them and listen.", awesome: 10, evil: 0 },
        { text: "Tell them to stop being sad.", awesome: 1, evil: 5 },
        { text: "Buy them a gift.", awesome: 8, evil: 0 },
        { text: "Make a joke to cheer them up.", awesome: 7, evil: 1 },
        { text: "Ignore them.", awesome: 0, evil: 10 }
    ] },
    { text: "You see a person looking for money on the ground.", choices: [
        { text: "Give them some.", awesome: 3, evil: 7 },
        { text: "Laugh at them.", awesome: 2, evil: 8 },
        { text: "Ignore them.", awesome: 1, evil: 1 },
        { text: "Offer to help them search.", awesome: 8, evil: 0 },
        { text: "Tell them they are a jew.", awesome: 6, evil: 2 }
    ] },
    { text: "You have to study for an exam.", choices: [
        { text: "Study 2 weeks before.", awesome: 6, evil: 2 },
        { text: "Study a few days before.", awesome: 10, evil: 0 },
        { text: "Study 2 days before.", awesome: 8, evil: 1 },
        { text: "Study 1 day before.", awesome: 3, evil: 7 },
        { text: "Don't study.", awesome: 0, evil: 10 }
    ] },
    { text: "You see a kitten.", choices: [
        { text: "Ignore kitty", awesome: 0, evil: 9 },
        { text: "Say Wiwiwiwiwi", awesome: 10, evil: 0 },
        { text: "Say mnmmnmmnmmn", awesome: 10, evil: 0 },
        { text: "Pet kitty", awesome: 10, evil: 0 },
        { text: "Call kitty ugly", awesome: 0, evil: 10 }
    ] },
    { text: "Somebody calls you autistic.", choices: [
        { text: "Laugh (you have autism)", awesome: 6, evil: 2 },
        { text: "Do nothing (you have autism)", awesome:4, evil: 7 },
        { text: "Call him autistic too (you have autism)", awesome: 3, evil: 8 },
        { text: "Get offended (you have autism)", awesome: 1, evil: 7 },
        { text: "Agree with them (you have autism)", awesome: 10, evil: 1 }
    ] },
    { text: "Your kitten goes missing.", choices: [
        { text: "Call the police", awesome: 6, evil: 2 },
        { text: "Go looking for her till you can't walk anymore", awesome: 10, evil: 0 },
        { text: "Get a new kitten", awesome: 2, evil: 9 },
        { text: "Put up posters", awesome: 8, evil: 2 },
        { text: "Organize searching group", awesome: 10, evil: 0 }
    ] },
    { text: "Your friend tells you they want to harm themselves.", choices: [
        { text: "Support them", awesome: 0, evil: 9 },
        { text: "Tell it to an adult", awesome: 9, evil: 0 },
        { text: "Tell them to kys", awesome: 0, evil: 10 },
        { text: "Tell them you don't care", awesome: 1, evil: 8 },
        { text: "Try to stop them", awesome: 10, evil: 0 }
    ] },
    { text: "Mrrrr mnau meoww.", choices: [
        { text: "mnmmns, mau mau mau", awesome: 6, evil: 2 },
        { text: "Wiwiwi wiwi", awesome: 10, evil: 0 },
        { text: "Mauuuuwa", awesome: 8, evil: 1 },
        { text: "nam nam", awesome: 3, evil: 7 },
        { text: "mauwa mauw, mauwamau", awesome: 0, evil: 10 }
    ] },
    { text: "You can talk to animals for a day.", choices: [
        { text: "Yap with the minanus", awesome: 10, evil: 0 },
        { text: "Ask them scientific questions", awesome: 8, evil: 0 },
        { text: "Learn the kitty language", awesome: 10, evil: 0 },
        { text: "Talk with as many animals as possible", awesome: 6, evil: 2 },
        { text: "Ask how are they doing", awesome: 2, evil: 7 }
    ] },
    { text: "Courage gets banned in your country.", choices: [
        { text: "Move to a different country", awesome: 8, evil: 1 },
        { text: "Watch it illegaly", awesome: 7, evil: 4 },
        { text: "Accept it", awesome: 2, evil: 8 },
        { text: "Send angry mails to the goverment", awesome: 3, evil: 7 },
        { text: "Get very sad and cry", awesome: 7, evil: 6 }
    ] },
    { text: "You can go in the past for 1 hour.", choices: [
        { text: "Change a historical event", awesome: 6, evil: 2 },
        { text: "Change your past", awesome: 6, evil: 0 },
        { text: "Watch a historical event", awesome: 8, evil: 1 },
        { text: "Visit a historical figure", awesome: 3, evil: 7 },
        { text: "Go see the mammoths", awesome: 8, evil: 1 }
    ] },
    { text: "A stranger started crying in front of you.", choices: [
        { text: "Act like you can’t see them", awesome: 2, evil: 9 },
        { text: "Ask what is the problem", awesome: 10, evil: 0 },
        { text: "Smile at them", awesome: 8, evil: 1 },
        { text: "Tell them to be quiet", awesome: 2, evil: 9 },
        { text: "Don't care", awesome: 0, evil: 7 }
    ] },
    { text: "You wake up as a cat.", choices: [
        { text: "Bite someone", awesome: 3, evil: 9 },
        { text: "Have many kitty friends", awesome: 10, evil: 0 },
        { text: "Play all day", awesome: 8, evil: 1 },
        { text: "Eep all day like a minanu", awesome: 10, evil: 0 },
        { text: "Cause chaos", awesome: 0, evil: 7 }
    ] },
    { text: "You have to live on an empty island.", choices: [
        { text: "Build your house and adapt", awesome: 10, evil: 0 },
        { text: "Become wild and live wth the animals", awesome: 6, evil: 2 },
        { text: "Try to swim away", awesome: 2, evil: 9 },
        { text: "Build a boat", awesome: 8, evil: 1 },
        { text: "Kys", awesome: 0, evil: 10 }
    ] },
    { text: "You become invisible for a day.", choices: [
        { text: "Scare your friends", awesome: 6, evil: 2 },
        { text: "Go anywhere you want without being seen", awesome: 10, evil: 0 },
        { text: "Rob a bank", awesome: 0, evil: 10 },
        { text: "Have a normal day", awesome: 3, evil: 7 },
        { text: "Panic", awesome: 0, evil: 10 }
    ] },
    { text: "You can talk every language in the world.", choices: [
        { text: "Help others/teach them", awesome: 10, evil: 0 },
        { text: "Travel and make new friends", awesome: 10, evil: 0 },
        { text: "Get a certificate for each", awesome: 6, evil: 1 },
        { text: "Read books written in unknown languages", awesome: 9, evil: 1 },
        { text: "Exchange it for being able to talk with kittiez", awesome: 9, evil: 0 }
    ] },
    { text: "You get huge amount of money.", choices: [
        { text: "Invest it", awesome: 9, evil: 0 },
        { text: "Donate it", awesome: 10, evil: 0 },
        { text: "Keep it in a safe", awesome: 5, evil: 1 },
        { text: "Give it to random people on the street", awesome: 3, evil: 7 },
        { text: "Spend it for anything you ever wanted", awesome: 7, evil: 9 }
    ] },
    { text: "You suddenly become very famous.", choices: [
        { text: "Enjoy the fame", awesome: 6, evil: 2 },
        { text: "Hide from the people", awesome: 7, evil: 0 },
        { text: "Try to find out why you are famous", awesome: 8, evil: 1 },
        { text: "Do something evil so people won't like you anymore", awesome: 3, evil: 7 },
        { text: "Try to help others by using your fame", awesome: 10, evil: 0 }
    ] },
    { text: "A teacher gave you higher grade accidentally.", choices: [
        { text: "Be happy for better results", awesome: 0, evil: 10 },
        { text: "Tell the teacher", awesome: 10, evil: 0 },
        { text: "Ask a friend", awesome: 8, evil: 1 },
        { text: "Tell everyone the teacher is dumb", awesome: 0, evil: 10 },
        { text: "Fail the next exam on purpose", awesome: 3, evil: 7 }
    ] },
    { text: "Your parents tell yu they are secretly milionaires.", choices: [
        { text: "Get mad because they didn't tell you earlier", awesome: 2, evil: 9 },
        { text: "Start spending the money", awesome: 2, evil: 9 },
        { text: "Be happy about your future", awesome: 10, evil: 1 },
        { text: "Ask why did they keep it as a secret", awesome: 8, evil: 0 },
        { text: "Steal some and move away", awesome: 0, evil: 10 }
    ] },
    { text: "Your pet kitty can talk for a little while.", choices: [
        { text: "Ask if you are a good owner", awesome: 8, evil: 2 },
        { text: "Ask if she needs anything", awesome: 10, evil: 0 },
        { text: "Take a video and make her famous", awesome: 3, evil: 6 },
        { text: "Talk about life", awesome: 7, evil: 0 },
        { text: "Get scared and run away", awesome: 0, evil: 10 }
    ] },
    { text: "Yoou find a secret staircase in your house.", choices: [
        { text: "Go see where it leads", awesome: 6, evil: 2 },
        { text: "Call your parents", awesome: 10, evil: 0 },
        { text: "Call your friend and explore it together", awesome: 8, evil: 1 },
        { text: "Close it and forget it", awesome: 3, evil: 7 },
        { text: "Send a kitten", awesome: 0, evil: 10 }
    ] },
    { text: "You can have one superpower for a month.", choices: [
        { text: "Choose mind-reading", awesome: 6, evil: 0 },
        { text: "Choose flying", awesome: 7, evil: 0 },
        { text: "Choose talking to animals", awesome: 8, evil: 0 },
        { text: "Choose instant healing", awesome: 10, evil: 0 },
        { text: "Choose time travelling", awesome: 7, evil: 0 }
    ] },
    { text: "Your friend becomes a celebrity.", choices: [
        { text: "Get jealous and stop being friends", awesome: 0, evil: 10 },
        { text: "Be top 1 fan", awesome: 10, evil: 0 },
        { text: "Try to become famous too", awesome: 8, evil: 1 },
        { text: "Expose secrets and make people pay you", awesome: 0, evil: 10 },
        { text: "Don't care and stay friends", awesome: 9, evil: 0 }
    ] },
    { text: "You have to take care of 10 children for a day.", choices: [
        { text: "Panic and hide", awesome: 2, evil: 8 },
        { text: "Take them to some fun park", awesome: 10, evil: 0 },
        { text: "Plan many activities", awesome: 10, evil: 1 },
        { text: "Ask your friends for help", awesome: 8, evil: 0 },
        { text: "Make them do the house chores", awesome: 8, evil: 1 }
    ] },
    { text: "You can teleport anywhere.", choices: [
        { text: "Help the police", awesome: 10, evil: 0 },
        { text: "Help to save people", awesome: 10, evil: 0 },
        { text: "Use it for fun", awesome: 6, evil: 1 },
        { text: "Travel the world", awesome: 7, evil: 1 },
        { text: "Use it only in your normal life (to school/shop etc.)", awesome: 5, evil: 1 }
    ] },
    { text: "You become the president.", choices: [
        { text: "Try to improve the country", awesome: 10, evil: 0 },
        { text: "Make funny laws", awesome: 7, evil: 0 },
        { text: "Make stricter/bigger punishments", awesome: 8, evil: 1 },
        { text: "Give up the position", awesome: 3, evil: 7 },
        { text: "Steal money from the people and then hide", awesome: 0, evil: 10 }
    ] },
    { text: "Somebody clones you.", choices: [
        { text: "Become friends with your clone", awesome: 10, evil: 2 },
        { text: "Get rid of the clone", awesome: 0, evil: 10 },
        { text: "Donate the clone to science", awesome: 8, evil: 1 },
        { text: "Don't care", awesome: 1, evil: 7 },
        { text: "Panic", awesome: 0, evil: 10 }
    ] },
    { text: "You have to switch lives with your friend for a week.", choices: [
        { text: "Make lot of trouble", awesome: 0, evil: 10 },
        { text: "Enjoy their life", awesome: 8, evil: 0 },
        { text: "Try to solve their problems", awesome: 10, evil: 0 },
        { text: "Make difficult decisions", awesome: 9, evil: 0 },
        { text: "Send your real self all money of your friend", awesome: 0, evil: 10 }
    ] },
    { text: "You have to play one game for 48 hours.", choices: [
        { text: "Stardew Valley", awesome: 10, evil: 0 },
        { text: "Minecraft", awesome: 10, evil: 0 },
        { text: "Chess", awesome: 8, evil: 1 },
        { text: "Tanks and ppl", awesome: 8, evil: 1 },
        { text: "League of Legends", awesome: 0, evil: 10 }
    ] },
    { text: "Everybody can hear your thoughts for a day.", choices: [
        { text: "Try to be positive the whole day", awesome: 9, evil: 2 },
        { text: "Hide and wait it out", awesome: 8, evil: 0 },
        { text: "Don't care (you say what you think normally anyway)", awesome: 0, evil: 8 },
        { text: "Get in trouble", awesome: 0, evil: 8 },
        { text: "Stay home only with your family and friends", awesome: 8, evil: 0 }
    ] },
    { text: "You can be one animal for a month.", choices: [
        { text: "Be a dog and help the police", awesome: 8, evil: 0 },
        { text: "Be a kitty and eep every day", awesome: 10, evil: 0 },
        { text: "Be a bird and fly to nice places", awesome: 8, evil: 0 },
        { text: "Be a fish and explore the ocean", awesome: 6, evil: 0 },
        { text: "Be an ant and explore the ground", awesome: 5, evil: 0 }
    ] },
    { text: "You failed an important exam.", choices: [
        { text: "Cry", awesome: 3, evil: 7 },
        { text: "Blame the teacher", awesome: 0, evil: 8 },
        { text: "Move on and study more next time", awesome: 10, evil: 0 },
        { text: "Don't care", awesome: 0, evil: 10 },
        { text: "Ask your friend for help", awesome: 8, evil: 0 }
    ] },
    { text: "Your friend lied to you.", choices: [
        { text: "Forgive them and move on", awesome: 10, evil: 0 },
        { text: "Demand an explanation", awesome: 10, evil: 0 },
        { text: "Stop being friends", awesome: 5, evil: 7 },
        { text: "Lie to them too", awesome: 0, evil: 10 },
        { text: "Ask another friend for help", awesome: 8, evil: 0 }
    ] },
    { text: "You can’t talk for a day.", choices: [
        { text: "Be okay and accept it", awesome: 10, evil: 0 },
        { text: "Lose your mind", awesome: 1, evil: 5 },
        { text: "Try to communicate other ways", awesome: 8, evil: 1 },
        { text: "Pretend you are sick", awesome: 6, evil: 7 },
        { text: "Talk twice more the next day", awesome: 1, evil: 3 }
    ] },
    { text: "Someone says they hate you.", choices: [
        { text: "Laugh", awesome: 6, evil: 2 },
        { text: "Ask why", awesome: 10, evil: 0 },
        { text: "Say you hate them too", awesome: 0, evil: 10 },
        { text: "Get sad", awesome: 3, evil: 7 },
        { text: "Don't care", awesome: 6, evil: 7 }
    ] },
    { text: "You can read minds for a day.", choices: [
        { text: "Try to get secret of others", awesome: 0, evil: 10 },
        { text: "Avoid people", awesome: 10, evil: 0 },
        { text: "Get scared", awesome: 0, evil: 1 },
        { text: "Make fun of your friends", awesome: 3, evil: 7 },
        { text: "Try not to listen to anyone", awesome: 10, evil: 0 }
    ] },
    { text: "A drunk man approaches you on the street.", choices: [
        { text: "Ask what does he want", awesome: 6, evil: 2 },
        { text: "Walk away", awesome: 10, evil: 0 },
        { text: "Get scared", awesome: 0, evil: 1 },
        { text: "Pretend you can't see him", awesome: 3, evil: 7 },
        { text: "Call the police", awesome: 2, evil: 0 }
    ] },
    { text: "A stranger hands you a box on the street.", choices: [
        { text: "Put the box on the ground and walk away", awesome: 6, evil: 2 },
        { text: "Try to ask him what it is", awesome: 10, evil: 0 },
        { text: "Open it", awesome: 8, evil: 1 },
        { text: "Hand it to someone else", awesome: 3, evil: 7 },
        { text: "Take it to the police station", awesome: 9, evil: 0 }
    ] },
    { text: "You have a robot.", choices: [
        { text: "Teach it to be racist", awesome: 0, evil: 10 },
        { text: "Make it do your house chores", awesome: 10, evil: 0 },
        { text: "Become besties", awesome: 10, evil: 0 },
        { text: "Sell it", awesome: 3, evil: 7 },
        { text: "Make it do your homework", awesome: 7, evil: 1 }
    ] },
    { text: "You lost your memory.", choices: [
        { text: "Start a new life", awesome: 6, evil: 2 },
        { text: "Ask everyone about yourself", awesome: 10, evil: 0 },
        { text: "Go to a doctor", awesome: 8, evil: 1 },
        { text: "Try to remember", awesome: 7, evil: 0 },
        { text: "Kys", awesome: 0, evil: 10 }
    ] },
    { text: "You can control the weather for a day.", choices: [
        { text: "Make it snow a lot", awesome: 6, evil: 2 },
        { text: "Make it rain in dry places", awesome: 10, evil: 0 },
        { text: "Make normal weather", awesome: 8, evil: 1 },
        { text: "Make storms", awesome: 0, evil: 10 },
        { text: "Make it rain something unusual", awesome: 3, evil: 8 }
    ] },
    { text: "Your friend turned into a kitty.", choices: [
        { text: "Sell it", awesome: 0, evil: 9 },
        { text: "Teach it tricks", awesome: 10, evil: 0 },
        { text: "Take care of it", awesome: 10, evil: 0 },
        { text: "Take it to the doctor", awesome: 6, evil: 3 },
        { text: "Leave it on the street", awesome: 0, evil: 10 }
    ] },
    { text: "You have to spend a lot of money.", choices: [
        { text: "Build a kitty house and adopt many kittiez", awesome: 10, evil: 0 },
        { text: "Buy horses", awesome: 9, evil: 0 },
        { text: "Buy every Lego set", awesome: 8, evil: 0 },
        { text: "Buy a plane (B-2)", awesome: 7, evil: 0 },
        { text: "Buy gifts for your friends", awesome: 10, evil: 0 }
    ] },
    { text: "You can ask your future-self one thing.", choices: [
        { text: "Ask about your career", awesome: 8, evil: 0 },
        { text: "Ask about your financal situation", awesome: 9, evil: 0 },
        { text: "Ask about your family", awesome: 10, evil: 0 },
        { text: "Ask about the current world's state", awesome: 9, evil: 0 },
        { text: "Ask if you are still a minanu", awesome: 8, evil: 0 }
    ] },
    { text: "You can make one wish come true.", choices: [
        { text: "Unlimited wealth", awesome: 8, evil: 2 },
        { text: "Good health for yourself and your family", awesome: 10, evil: 0 },
        { text: "Good career", awesome: 8, evil: 1 },
        { text: "A dream house", awesome: 6, evil: 2 },
        { text: "A wife", awesome: 8, evil: 0 }
    ] },
    /*
    { text: ".", choices: [
        { text: "S", awesome: 6, evil: 2 },
        { text: "S", awesome: 10, evil: 0 },
        { text: "S", awesome: 8, evil: 1 },
        { text: "St", awesome: 3, evil: 7 },
        { text: "D", awesome: 0, evil: 10 }
    ] },
    */



    { text: "Your friend needs help with their homework.", choices: [
        { text: "Tell them to do it alone.", awesome: 0, evil: 10 },
        { text: "Help as much as you can.", awesome: 10, evil: 0 },
        { text: "Ignore them.", awesome: 1, evil: 9 },
        { text: "Try to help but not much.", awesome: 7, evil: 4 },
        { text: "Admit you don’t understand either.", awesome: 6, evil: 2 }
    ] },
    { text: "What would you do during an apocalypse?", choices: [
        { text: "Try to survive in your house.", awesome: 7, evil: 2 },
        { text: "Kys.", awesome: 4, evil: 5 },
        { text: "Hide in the shopping center.", awesome: 8, evil: 1 },
        { text: "Rescue as many animals as possible.", awesome: 10, evil: 0 },
        { text: "Stay behind and accept fate.", awesome: 0, evil: 10 }
    ] },
    { text: "Your friend asks to play Stardew Valley but you are busy.", choices: [
        { text: "Set a time when you won't be busy.", awesome: 7, evil: 3 },
        { text: "Tell them you're too tired.", awesome: 2, evil: 8 },
        { text: "Leave everything and play.", awesome: 10, evil: 0 },
        { text: "Tell them you can’t right now.", awesome: 4, evil: 5 },
        { text: "Ignore them.", awesome: 0, evil: 10 }
    ] },
    { text: "You are hungry and there's no food at home.", choices: [
        { text: "Stay hungry.", awesome: 1, evil: 10 },
        { text: "Go and buy some food.", awesome: 10, evil: 0 },
        { text: "Try to find some food at home.", awesome: 4, evil: 6 },
        { text: "Complain to a friend for no reason.", awesome: 2, evil: 5 },
        { text: "Eat kitty food.", awesome: 8, evil: 2 }
    ] },
    { text: "You feel eepy but had plans with your friends.", choices: [
        { text: "Tell them you are busy.", awesome: 1, evil: 9 },
        { text: "Fight the eepiness.", awesome: 10, evil: 0 },
        { text: "Apologize and reschedule.", awesome: 9, evil: 0 },
        { text: "Go to eep without telling them anything.", awesome: 0, evil: 10 },
        { text: "Tell them you’re eepy and then eep.", awesome: 4, evil: 5 }
    ] },
    { text: "Your friend has something exciting to tell you later.", choices: [
        { text: "Say 'Who asked?'.", awesome: 0, evil: 10 },
        { text: "Get excited too and listen happily.", awesome: 10, evil: 0 },
        { text: "Forget about it.", awesome: 0, evil: 7 },
        { text: "Listen but not care.", awesome: 2, evil: 8 },
        { text: "Tell them to shut up.", awesome: 0, evil: 10 }
    ] },
    { text: "You can visit one country/city.", choices: [
        { text: "Czech Republic.", awesome: 7, evil: 1 },
        { text: "Mecca.", awesome: 10, evil: 0 },
        { text: "India.", awesome: 1, evil: 10 },
        { text: "Switzerland.", awesome: 10, evil: 0 },
        { text: "France.", awesome: 1, evil: 9 }
    ] },
    { text: "You are given an envelope that says Do not open until 2050.", choices: [
        { text: "Throw it away", awesome: 0, evil: 7 },
        { text: "Open immediately ", awesome: 3, evil: 9 },
        { text: "Give it to someone else", awesome: 4, evil: 6 },
        { text: "Wait till 2050", awesome: 10, evil: 0 },
        { text: "Try to look though the paper of the envelope without opening it", awesome: 5, evil: 5 }
    ] },
    { text: "You want a hidden room in your house. What would be inside?", choices: [
        { text: "Lego collection", awesome: 9, evil: 0 },
        { text: "Slaves", awesome: 0, evil: 10 },
        { text: "Your Batman suit", awesome: 9, evil: 0 },
        { text: "A gaming setup", awesome: 0, evil: 0 },
        { text: "Full of kittiez", awesome: 10, evil: 0 }
    ] },
    { text: "You are invited to a dinner with a famous person. Who would you choose?", choices: [
        { text: "The Rock", awesome: 10, evil: 0 },
        { text: "D. Trump", awesome: 1, evil: 8 },
        { text: "A. Hitler", awesome: 0, evil: 10 },
        { text: "That guy who streams tanks and ppl games", awesome: 10, evil: 0 },
        { text: "No one", awesome: 5, evil: 5 }
    ] },
    { text: "You got your phone stolen. Police found 5 suspects. Who would you blame?", choices: [
        { text: "The white person", awesome: 3, evil: 8 },
        { text: "No one, since you didn't see who did it.", awesome: 10, evil: 0 },
        { text: "The black person", awesome: 3, evil: 8 },
        { text: "The Chinese person", awesome: 3, evil: 8 },
        { text: "The black person but with your phone in his hands", awesome: 10, evil: 0 }
    ] },
    { text: "You are stuck in an elevator with a stranger for hours. What would you talk with them about?", choices: [
        { text: "Kittiez", awesome: 10, evil: 0 },
        { text: "Planes", awesome: 7, evil: 0 },
        { text: "Courage the Cowardly Dog", awesome: 8, evil: 0 },
        { text: "Insult them", awesome: 0, evil: 10 },
        { text: "Nothing", awesome: 5, evil: 5 }
    ] },
    { text: "You overhear someone doing a crime", choices: [
        { text: "Tell them it's bad", awesome: 7, evil: 1 },
        { text: "Call the police", awesome: 10, evil: 0 },
        { text: "Stop them (You are Batman)", awesome: 10, evil: 0 },
        { text: "Help them", awesome: 0, evil: 10 },
        { text: "Watch and do nothing ", awesome: 5, evil: 8 }
    ] },
    { text: "You can eat only 1 kind of food for the rest of your life. What would you choose?", choices: [
        { text: "Chicken biryani", awesome: 7, evil: 1 },
        { text: "Mansaf", awesome: 10, evil: 0 },
        { text: "Chocolate", awesome: 6, evil: 2 },
        { text: "Watermelon", awesome: 2, evil: 8 },
        { text: "Ice cream", awesome: 5, evil: 5 }
    ] },
    { text: "You receive an anonymous threatening message", choices: [
        { text: "Ignore it", awesome: 1, evil: 1 },
        { text: "Send some back", awesome: 10, evil: 0 },
        { text: "Report it", awesome: 10, evil: 2 },
        { text: "Block the person", awesome: 10, evil: 0 },
        { text: "Get very scared", awesome: 0, evil: 5 }
    ] },
    { text: "You find out your neighbor is keeping a tyger illegally", choices: [
        { text: "Report it to the police", awesome: 10, evil: 0 },
        { text: "Pet the kitty", awesome: 10, evil: 0 },
        { text: "Donate money for kitty food", awesome: 6, evil: 2 },
        { text: "Help him make it legal", awesome: 10, evil: 0 },
        { text: "Steal the kitty and keep it", awesome: 4, evil: 5 }
    ] },
    { text: "You are seated in front of a loud classmate during an exam", choices: [
        { text: "Ask to change seats", awesome: 10, evil: 1 },
        { text: "Be loud too so he asks to change seats", awesome: 7, evil: 0 },
        { text: "Ignore it", awesome: 2, evil: 2 },
        { text: "Ask him to shut up", awesome: 8, evil: 2 },
        { text: "Leave the exam", awesome: 2, evil: 8 }
    ] },
    { text: "You see someone struggling to carry groceries", choices: [
        { text: "Help them carry it", awesome: 10, evil: 0 },
        { text: "Do nothing", awesome: 4, evil: 5 },
        { text: "Laugh at them", awesome: 0, evil: 8 },
        { text: "Tell them to stop buying too much", awesome: 0, evil: 7 },
        { text: "Give them your bags so they carry more", awesome: 0, evil: 10 }
    ] },
    { text: "You hear a strange noise downstairs in the nigth", choices: [
        { text: "Go check what it was", awesome: 9, evil: 0 },
        { text: "Do nothing", awesome: 1, evil: 3 },
        { text: "Send someone to check it", awesome: 3, evil: 8 },
        { text: "Send a kitty to check it", awesome: 0, evil: 10 },
        { text: "Go check it with a kitty", awesome: 10, evil: 0 }
    ] },
    { text: "You see a child being bullied at school", choices: [
        { text: "Ignore it", awesome: 2, evil: 5 },
        { text: "Bully the bullies", awesome: 10, evil: 0 },
        { text: "Bully the child too", awesome: 0, evil: 10 },
        { text: "Report it to a trusted adult", awesome: 10, evil: 0 },
        { text: "Watch and laugh", awesome: 1, evil: 6 }
    ] },
    { text: "You witness someone shoplifting in a store", choices: [
        { text: "Steal too", awesome: 0, evil: 10 },
        { text: "Call him the N word", awesome: 7, evil: 1 },
        { text: "Report him immediatelly", awesome: 10, evil: 0 },
        { text: "Tell him to stop", awesome: 8, evil: 1 },
        { text: "Ignore it", awesome: 5, evil: 5 }
    ] },
    { text: "You can live in different time period", choices: [
        { text: "1938-1945 (Germany)", awesome: 2, evil: 8 },
        { text: "With Dinosaurs and mamooths", awesome: 7, evil: 1 },
        { text: "When the Prophet Muhammad (peace be upon him) lived", awesome: 1, evil: 0 },
        { text: "This time period", awesome: 3, evil: 1 },
        { text: "When slavery was legal", awesome: 3, evil: 6 }
    ] },
    { text: "You find a wallet full of cash with no ID inside.", choices: [
        { text: "Go to the police", awesome: 10, evil: 0 },
        { text: "Keep the money", awesome: 0, evil: 10 },
        { text: "Try to find the owner by yourself", awesome: 5, evil: 2 },
        { text: "Leave it on the ground", awesome: 2, evil: 7 },
        { text: "Donate the money", awesome: 5, evil: 8 }
    ] },
    { text: "In a bus, would you sit next to:", choices: [
        { text: "A black person with a kitty.", awesome: 10, evil: 0 },
        { text: "The autistic kid (you are autistic too).", awesome: 8, evil: 1 },
        { text: "A white gay person.", awesome: 2, evil: 6 },
        { text: "A black gay person.", awesome: 2, evil: 7 },
        { text: "An indian.", awesome: 0, evil: 10 }
    ] }
];

let numQuestions = 10;
let selectedSituations = [];
let currentQuestionIndex = 0;
let awesomeScore = 0;
let evilScore = 0;
let selectedChoiceIndex = -1;

// UI elements
const setupContainer = document.getElementById("setup");
const gameContainer = document.getElementById("game-container");
const situationText = document.getElementById("situation-text");
const choicesContainer = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const questionCountInput = document.getElementById("questionCount");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

startBtn.onclick = () => {
    numQuestions = Math.min(Math.max(parseInt(questionCountInput.value), 1), situations.length);
    selectedSituations = shuffle([...situations]).slice(0, numQuestions);
    setupContainer.style.display = "none";
    gameContainer.style.display = "block";
    currentQuestionIndex = 0;
    awesomeScore = 0;
    evilScore = 0;
    displayQuestion();
};

function displayQuestion() {
    if (currentQuestionIndex >= selectedSituations.length) {
        showResult();
        return;
    }
    selectedChoiceIndex = -1;
    nextBtn.disabled = true;

    const situation = selectedSituations[currentQuestionIndex];
    situationText.textContent = situation.text;
    choicesContainer.innerHTML = "";

    situation.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.classList.add("choice-btn");
        btn.onclick = () => selectChoice(btn, index, choice.awesome, choice.evil);
        choicesContainer.appendChild(btn);
    });
}

function selectChoice(button, index, awesome, evil) {
    // Reset previous selection
    document.querySelectorAll(".choice-btn").forEach(btn => btn.classList.remove("selected"));

    // Highlight selected button
    button.classList.add("selected");

    // Update scores
    selectedChoiceIndex = index;
    awesomeScore += awesome;
    evilScore += evil;

    // Enable next button
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    if (selectedChoiceIndex === -1) return; // Prevent moving forward without a selection

    currentQuestionIndex++;
    displayQuestion();
};

function getCombinedMessage(awesomePercentage, evilPercentage) {
    // Calculate the total percentage of both awesome and evil
    const totalPercentage = awesomePercentage + evilPercentage;

    // Ensure the total adds up to 100%
    const finalAwesomePercentage = Math.min(awesomePercentage, 100);
    const finalEvilPercentage = Math.min(evilPercentage, 100);

    // If the combined percentage exceeds 100 due to rounding, adjust it
    const combinedPercentage = Math.min(finalAwesomePercentage + finalEvilPercentage, 100);

    let message = "";

    // Extreme cases for awesomePercentage
    if (finalAwesomePercentage >= 100) {
        message = "You are the awesomest little minanu! Truly, an awesomesauce blossom wiwiwi. A sigma.";
    } else if (finalAwesomePercentage >= 99) {
        message = "Almost, still a little minanu!";
    } else if (finalAwesomePercentage >= 95) {
        message = "Aaaamazingggg, you are so blossom";
    } else if (finalAwesomePercentage >= 90) {
        message = "You are a Minanu";
    } else if (finalAwesomePercentage >= 80) {
        message = "You're so skibidi";
    } else if (finalAwesomePercentage >= 70) {
        message = "Skibidi, but could be more awesome";
    } else if (finalAwesomePercentage >= 60) {
        message = "A sigma would score more awesomeness.";
    } else if (finalAwesomePercentage >= 50) {
        message = "You cannot be considered a Minanu.";
    } else if (finalAwesomePercentage >= 40) {
        message = "Minanus decide better!";
    } else if (finalAwesomePercentage >= 30) {
        message = "Quite naughty, aren't you?";
    } else if (finalAwesomePercentage >= 20) {
        message = "You must be an Evil Weewi!";
    } else if (finalAwesomePercentage >= 10) {
        message = "Not nice, Minanu would be disappointed.";
    } else if (finalAwesomePercentage >= 1) {
        message = "You are not a sigma.";
    } else {
        message = "You are an Evil Weevil.";
    }

    // Return the message
    return message;
}

function showResult() {
    // Calculate percentages for awesome and evil
    const awesomePercentage = (awesomeScore / (awesomeScore + evilScore)) * 100;
    const evilPercentage = (evilScore / (awesomeScore + evilScore)) * 100;

    // Ensure percentages add up to 100
    const finalAwesomePercentage = Math.min(awesomePercentage, 100);
    const finalEvilPercentage = Math.min(evilPercentage, 100);

    // Generate the message based on the percentages
    const message = getCombinedMessage(finalAwesomePercentage, finalEvilPercentage);

    // Display the result
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `
        <h2>Results</h2>
        <p>Awesome Score: ${Math.round(finalAwesomePercentage)}%</p>
        <p>Evil Score: ${Math.round(finalEvilPercentage)}%</p>
        <p>${message}</p>
    `;
}

