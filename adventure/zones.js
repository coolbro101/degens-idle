/***********************
 * ZONES DEFINITION (Modified order: Travel tasks first, then mandatory tasks, then the rest; updated ids)
 ***********************/
var zones = [
  {
    id: 1,
    name: "Beginner’s Bootcamp",
    img: "images/zones/zone1.jpg",
    tasks: [
      { id: 11, name: "Travel: Exit Bootcamp", type: "Travel", maxReps: 1, count: 0, baseTime: 1e4, description: "Leave bootcamp and begin your journey.<br><br>The dark green button indicates travel to the next zone.", skills: ["travel"] },
      { id: 12, name: "Combined Assembly Drill", type: "Training", maxReps: 1, count: 0, baseTime: 3e4, description: "A challenging drill combining physical<br>stamina and careful assembly.<br><br>The orange button indicates that this task is<br>mandatory to progress to next zone.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 13, name: "Small Talk Practice", type: "Training", maxReps: 4, count: 0, baseTime: 3e3, description: "Polish your social skills with casual chat.<br><br>The orange button indicates that this task is<br>mandatory to progress to next zone.", skills: ["charisma"], mandatory: true },
      { id: 14, name: "Warm-Up Jog in Place", type: "Training", maxReps: 7, count: 0, baseTime: 6e3, description: "Boost your stamina with a simple jog.", skills: ["endurance"] },
      { id: 15, name: "Assemble a Clockwork Toy", type: "Training", maxReps: 5, count: 0, baseTime: 6e3, description: "Practice assembling basic mechanisms.", skills: ["tinkering"] },
      { id: 16, name: "Practice Mirror Warmup", type: "Training", maxReps: 2, count: 0, baseTime: 9e3, description: "Engage in a friendly conversation with a mirror.", skills: ["charisma"] },
      { id: 17, name: "Brewmaster: Read an Alchemy Book", type: "Training", maxReps: 1, count: 0, baseTime: 5e4, description: "Study the ancient art of alchemy.<br><br>The ★ indicates that completing this task<br>for the first time will grant a perk.", skills: ["alchemy"], perk: "brewmaster" },
      { id: 18, name: "Brew a Simple Potion", type: "Training", maxReps: 18, count: 0, baseTime: 8e3, description: "Experiment with ingredients to create a potion.<br><br>The resource icon indicates that each completion<br>of this task will produce a resource.", skills: ["alchemy"], resources: ["energy_elixir"] }
    ]
  },
  {
    id: 2,
    name: "Urban Outskirts",
    img: "images/zones/zone2.jpg",
    tasks: [
      { id: 21, name: "Travel: Head to the City Core", type: "Travel", maxReps: 1, count: 0, baseTime: 2e4, description: "Venture into the bustling heart of the city.", skills: ["travel"] },
      { id: 22, name: "Map the City", type: "Training", maxReps: 4, count: 0, baseTime: 3e3, description: "Study the city’s layout to boost your intellect.", skills: ["intellect"], mandatory: true },
      { id: 23, name: "Spot the Details", type: "Training", maxReps: 6, count: 0, baseTime: 5e3, description: "Sharpen your senses by noticing urban subtleties.", skills: ["perception"], mandatory: true },
      { id: 24, name: "Combined Recall Drill", type: "Training", maxReps: 8, count: 0, baseTime: 3e4, description: "Run while recalling facts about your surroundings.", skills: ["endurance", "intellect"] },
      { id: 25, name: "Assemble a Magnifying Glass", type: "Training", maxReps: 14, count: 0, baseTime: 6e3, description: "Assemble a simple magnifying glass.", skills: ["tinkering"], resources: ["magnifying_glass"] },
      { id: 26, name: "Strike up a Quick Chat", type: "Training", maxReps: 2, count: 0, baseTime: 9e3, description: "Engage strangers in conversation.", skills: ["charisma"] },
      { id: 27, name: "Healthy Living: Explore Dietary Options", type: "Training", maxReps: 3, count: 0, baseTime: 6e5, description: "Learn about healthy eating habits.", skills: ["endurance", "intellect", "alchemy"], perk: "healthy_living" }
    ]
  },
  {
    id: 3,
    name: "City Core",
    img: "images/zones/zone3.jpg",
    tasks: [
      { id: 31, name: "Travel: Enter Corporate District", type: "Travel", maxReps: 1, count: 0, baseTime: 3e4, description: "Step into the orderly world of corporate business.", skills: ["travel"] },
      { id: 32, name: "Completionist: Run City Marathon", type: "Training", maxReps: 1, count: 0, baseTime: 2e5, description: "Test your stamina on a long city run.", skills: ["endurance"], mandatory: true, perk: "completionist" },
      { id: 33, name: "Workshop Fix a Broken Engine", type: "Training", maxReps: 5, count: 0, baseTime: 3e5, description: "Learn the basics of machinery repair.", skills: ["mechanics"] },
      { id: 34, name: "Basic Mech: Rudimentary Upgrade", type: "Training", maxReps: 1, count: 0, baseTime: 4e5, description: "Construct a basic biomechanical upgrade.", skills: ["mechanics", "intellect"], perk: "basic_mech" },
      { id: 35, name: "Study Urban Traffic Flow", type: "Training", maxReps: 10, count: 0, baseTime: 8e4, description: "Analyze traffic patterns using perception and intellect.", skills: ["perception", "intellect"] },
      { id: 36, name: "Assemble Goggles", type: "Training", maxReps: 12, count: 0, baseTime: 1.4e5, description: "Build yourself some eye protection.", skills: ["tinkering"], resources: ["goggles"] },
      { id: 37, name: "Self-Operating Gadget: Simple Automation", type: "Training", maxReps: 2, count: 0, baseTime: 1e7, description: "Utilize your mechanical expertise and tinkering skills to build a basic automated system that streamlines routine tasks.", skills: ["mechanics", "tinkering"], perk: "self_operating_gadget" }
    ]
  },
  {
    id: 4,
    name: "Corporate District",
    img: "images/zones/zone4.jpg",
    tasks: [
      { id: 41, name: "Travel: Proceed to Cyber Lab", type: "Travel", maxReps: 1, count: 0, baseTime: 4e4, description: "Advance to a high-tech cyber environment.", skills: ["travel"] },
      { id: 42, name: "Business Card Exchange", type: "Training", maxReps: 5, count: 0, baseTime: 2e4, description: "Practice your charisma in a corporate setting.", skills: ["charisma"], mandatory: true },
      { id: 43, name: "Tactical Office Skirmish Simulation", type: "Training", maxReps: 5, count: 0, baseTime: 3e5, description: "Engage in simulated corporate conflicts.", skills: ["endurance", "tinkering"], mandatory: true },
      { id: 44, name: "Workaholic: Finance Bro Advice", type: "Training", maxReps: 1, count: 0, baseTime: 3e7, description: "Learn how workaholics function.", skills: ["endurance", "charisma", "perception"], perk: "workaholic" },
      { id: 45, name: "Crunch Financial Numbers", type: "Training", maxReps: 10, count: 0, baseTime: 8e4, description: "Analyze corporate data with intellect and mechanics.", skills: ["intellect", "mechanics"] },
      { id: 46, name: "Gacha Machine: Mechanics of Luck", type: "Training", maxReps: 1, count: 0, baseTime: 2e5, description: "Build a simple gacha machine.", skills: ["mechanics"], perk: "gacha_machine" },
      { id: 47, name: "Battle Agent Smith", type: "Training", maxReps: 1, count: 0, baseTime: 1e8, description: "Take on this Matrix propagator. Might as well practice Combat.<br><br>This button is red - it's a boss fight.<br>Don't worry, you can move to next zone without it.", skills: ["combat"], boss_image: "images/bosses/agent_smith.jpg", resources: ["cool_sunglasses"], drainMult: 1.5, sound: agentSmithSound }
    ]
  },
  {
    id: 5,
    name: "Cyber Lab",
    img: "images/zones/zone6.jpg",
    tasks: [
      { id: 51, name: "Travel: Proceed to Combat Arena", type: "Travel", maxReps: 1, count: 0, baseTime: 5e4, description: "Step into the arena of combat.", skills: ["travel"] },
      { id: 52, name: "Cyber Infiltration Breach the Firewall", type: "Training", maxReps: 4, count: 0, baseTime: 4e4, description: "Learn basic system penetration.", skills: ["hacking"], mandatory: true },
      { id: 53, name: "Chemical Simulation", type: "Training", maxReps: 3, count: 0, baseTime: 6e6, description: "Simulate a chemical reaction.", skills: ["alchemy", "tinkering"], mandatory: true },
      { id: 54, name: "Create an Amphetamine Pill", type: "Training", maxReps: 6, count: 0, baseTime: 5e5, description: "Create a simple amphetamine pill.", skills: ["alchemy", "mechanics"], resources: ["amphetamine_pill"] },
      { id: 55, name: "Crack the Cipher", type: "Training", maxReps: 10, count: 0, baseTime: 5e5, description: "Decrypt secret codes.", skills: ["hacking", "endurance"] },
      { id: 56, name: "Debug Digital Puzzle", type: "Training", maxReps: 2, count: 0, baseTime: 4e6, description: "Solve a digital puzzle using coding skills.", skills: ["hacking", "mechanics"] },
      { id: 57, name: "Double Timer: System Revamp", type: "Training", maxReps: 2, count: 0, baseTime: 5e8, description: "Revamp a digital system to double its efficiency.", skills: ["hacking", "tinkering", "intellect"], perk: "double_timer" },
      { id: 58, name: "Noob Haxor: Study the Basics", type: "Training", maxReps: 1, count: 0, baseTime: 1e8, description: "Study the basics of hacking.", skills: ["hacking", "perception"], perk: "noob_haxor" },
      { id: 59, name: "Battle Shao Kahn", type: "Training", maxReps: 1, count: 0, baseTime: 1.3e8, description: "Some clown challenges you to mortal combat.", skills: ["combat"], boss_image: "images/bosses/shao_kahn.jpg", drainMult: 4, resources: ["shiny_helmet"], sound: shaoKahnSound }
    ]
  },
  {
    id: 6,
    name: "Combat Arena",
    img: "images/zones/zone5.jpg",
    tasks: [
      { id: 61, name: "Travel: Navigate to Abandoned Factory", type: "Travel", maxReps: 1, count: 0, baseTime: 1e5, description: "Descend deeper into the digital realm.", skills: ["travel"] },
      { id: 62, name: "Training Sparring Session", type: "Training", maxReps: 10, count: 0, baseTime: 1e5, description: "Learn the fundamentals of combat.", skills: ["combat"], mandatory: true },
      { id: 63, name: "Weapon Drills Simulated Battle", type: "Training", maxReps: 5, count: 0, baseTime: 8e6, description: "Practice with simulated weapons.", skills: ["combat", "hacking"] },
      { id: 64, name: "Tactical Coordination Group Skirmish", type: "Training", maxReps: 7, count: 0, baseTime: 4e8, description: "Develop team-based combat strategies.", skills: ["combat", "charisma"] },
      { id: 65, name: "Energetic Bliss: Painstaking Training", type: "Training", maxReps: 1, count: 0, baseTime: 4e12, description: "Engage in a grueling training session.", skills: ["combat", "endurance", "perception"], perk: "energetic_bliss" },
      { id: 66, name: "Concoct Some Steroids", type: "Training", maxReps: 4, count: 0, baseTime: 9e9, description: "Create a performance-enhancing steroid.", skills: ["alchemy", "tinkering", "intellect"], resources: ["steroids"] },
      { id: 67, name: "Kung Fu Zen: Talk Your Way", type: "Training", maxReps: 3, count: 0, baseTime: 4e10, description: "Convince the masters to help you improve your learning.", skills: ["charisma"], perk: "kung_fu_zen" },
      { id: 68, name: "Challenge Dojo Master Chuck Norris", type: "Training", maxReps: 1, count: 0, baseTime: 1e9, description: "Challenge the legendary martial artist.", skills: ["combat"], boss_image: "images/bosses/chuck_norris.jpg", drainMult: 8, resources: ["karate_belt"], sound: chuckNorrisSound },
    ]
  },
  {
    id: 7,
    name: "Abandoned Factory",
    img: "images/zones/zone7.jpg",
    tasks: [
      { id: 71, name: "Travel: Proceed to Rooftop Rendezvous", type: "Travel", maxReps: 1, count: 0, baseTime: 3e5, description: "Climb to the city rooftop.", skills: ["travel"] },
      { id: 72, name: "Neural Implant Test", type: "Training", maxReps: 7, count: 0, baseTime: 1e5, description: "Test cutting-edge neural implants.", skills: ["cybernetics"], mandatory: true },
      { id: 73, name: "Exosuit Upgrade Overhaul", type: "Training", maxReps: 5, count: 0, baseTime: 1e7, description: "Upgrade your cybernetic exosuit.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 74, name: "Copium Reactor: Synthesize a Contraption", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Create a contraption using advanced techniques.", skills: ["endurance", "alchemy", "mechanics"], perk: "copium_reactor" },
      { id: 75, name: "Save Some Touchable Grass", type: "Training", maxReps: 4, count: 0, baseTime: 5e8, description: "Spot touchable grass and pick some for later.", skills: ["intellect", "charisma"], resources: ["touchable_grass"] },
      { id: 76, name: "System Calibration Diagnostic Run", type: "Training", maxReps: 16, count: 0, baseTime: 5e7, description: "Calibrate cybernetic systems.", skills: ["cybernetics", "tinkering"] },
      { id: 77, name: "Futuristic Wrench: Find a Tool", type: "Training", maxReps: 1, count: 0, baseTime: 6e9, description: "Locate a futuristic wrench.", skills: ["perception"], perk: "futuristic_wrench" },
      { id: 78, name: "Battle Sauron", type: "Training", maxReps: 1, count: 0, baseTime: 4e9, description: "Take on the creator of just one ring.", skills: ["combat"], boss_image: "images/bosses/sauron.jpg", drainMult: 12, resources: ["one_ring"], sound: sauronSound }
    ]
  },
  {
    id: 8,
    name: "Rooftop Rendezvous",
    img: "images/zones/zone8.jpg",
    tasks: [
      { id: 81, name: "Travel: Descend to Digital Underground", type: "Travel", maxReps: 1, count: 0, baseTime: 9e5, description: "Head back into the digital depths.", skills: ["travel"] },
      { id: 82, name: "Tactics Broker a Deal", type: "Training", maxReps: 3, count: 0, baseTime: 5e5, description: "Hone your negotiation skills in high places.", skills: ["negotiation"], mandatory: true },
      { id: 83, name: "Cybernetic Potion", type: "Training", maxReps: 10, count: 0, baseTime: 1e8, description: "Create a cybernetic potion.", skills: ["alchemy", "cybernetics"], resources: ["cybernetic_potion"] },
      { id: 84, name: "Cybernetic Armor", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Carefully craft a cybernetic armor.", skills: ["tinkering", "cybernetics"], resources: ["cybernetic_armor"] },
      { id: 85, name: "High-Rise Debate Persuade the Crowd", type: "Training", maxReps: 10, count: 0, baseTime: 9e9, description: "Use your wit to sway opinions.", skills: ["negotiation", "charisma"] },
      { id: 86, name: "Rex: Adopt a Dog", type: "Training", maxReps: 1, count: 0, baseTime: 3e12, description: "Adopt a loyal dog.", skills: ["perception", "charisma"], perk: "rex" },
      { id: 87, name: "Luck of the Irish: Find the Clover", type: "Training", maxReps: 1, count: 0, baseTime: 7.77e10, description: "Locate a lucky clover.", skills: ["perception"], perk: "luck_of_the_irish" }
    ]
  },
  {
    id: 9,
    name: "Digital Underground",
    img: "images/zones/zone9.jpg",
    tasks: [
      { id: 91, name: "Travel: Emerge into Techno District", type: "Travel", maxReps: 1, count: 0, baseTime: 4e6, description: "Climb out to the bustling Techno District.", skills: ["travel"] },
      { id: 92, name: "Deep Data Dive Extract Encrypted Secrets", type: "Training", maxReps: 5, count: 0, baseTime: 1e9, description: "Extract and decode hidden data.", skills: ["aiMastery", "hacking"], mandatory: true },
      { id: 93, name: "Copius Alchemist: Advanced Manual", type: "Training", maxReps: 1, count: 0, baseTime: 1e14, description: "Study advanced alchemical techniques.", skills: ["alchemy", "perception"], perk: "copious_alchemist", mandatory: true },
      { id: 94, name: "Neural Net Optimize the System", type: "Training", maxReps: 10, count: 0, baseTime: 1e8, description: "Enhance and optimize neural networks.", skills: ["aiMastery", "intellect"] },
      { id: 95, name: "Virtual Simulated Skirmish", type: "Training", maxReps: 2, count: 0, baseTime: 3e8, description: "Engage in simulated digital battles.", skills: ["aiMastery", "combat"] },
      { id: 96, name: "Simulation Engine: Ultimate Feat of Engineering", type: "Training", maxReps: 1, count: 0, baseTime: 1e15, description: "Create the ultimate feat of engineering.", skills: ["tinkering", "cybernetics", "hacking"], perk: "simulation_engine" },
      { id: 97, name: "Battle Isshin", type: "Training", maxReps: 1, count: 0, baseTime: 1e10, description: "Challenge the master of the blade.", skills: ["combat"], boss_image: "images/bosses/isshin.jpg", drainMult: 20, resources: ["katana"], sound: isshinSound }
    ]
  },
  {
    id: 10,
    name: "Techno District",
    img: "images/zones/zone10.jpg",
    tasks: [
      { id: 101, name: "Travel: Venture to Research Facility", type: "Travel", maxReps: 1, count: 0, baseTime: 1e7, description: "Head to the hub of advanced AI research.", skills: ["travel"] },
      { id: 102, name: "Digital Frenzy Data Stream Challenge", type: "Training", maxReps: 10, count: 0, baseTime: 5e8, description: "Process rapid streams of digital data.", skills: ["intellect", "aiMastery"], mandatory: true },
      { id: 103, name: "Omega Resonator: Cybernetic Enhancement", type: "Training", maxReps: 10, count: 0, baseTime: 1e11, description: "Leverage AI to create a cybernetic combat enhancement.", skills: ["aiMastery", "cybernetics"], resources: ["omega_resonator"] },
      { id: 104, name: "System Override the Grid", type: "Training", maxReps: 5, count: 0, baseTime: 2e11, description: "Take control of the city's digital infrastructure.", skills: ["hacking", "intellect"] },
      { id: 105, name: "Hoverboard: Steal One", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Steal a hoverboard for high-speed travel.", skills: ["combat", "hacking"], perk: "hoverboard" },
      { id: 106, name: "Reinforcement Learning: Decent Algorithm", type: "Training", maxReps: 2, count: 0, baseTime: 2.5e6, description: "Train a reinforcement learning algorithm.", skills: ["aiMastery"], perk: "reinforcement_learning" },
      { id: 107, name: "Battle Kratos", type: "Training", maxReps: 1, count: 0, baseTime: 5e10, description: "Challenge the demi-god.", skills: ["combat"], boss_image: "images/bosses/kratos.jpg", drainMult: 30, resources: ["blades_of_chaos"], sound: kratosSound }
    ]
  },
  {
    id: 11,
    name: "Research Facility",
    img: "images/zones/zone11.jpg",
    tasks: [
      { id: 111, name: "Travel: Proceed to Forsaken Bastion", type: "Travel", maxReps: 1, count: 0, baseTime: 5e7, description: "Travel to the forsaken bastion.", skills: ["travel"] },
      { id: 112, name: "Cyber Defense Digital Barrier", type: "Training", maxReps: 2, count: 0, baseTime: 3e10, description: "Deploy a robust digital defense.", skills: ["hacking", "quantum"], mandatory: true },
      { id: 113, name: "Find Map to Forsaken Bastion", type: "Training", maxReps: 5, count: 0, baseTime: 1e14, description: "Find a map to the forsaken bastion.", skills: ["perception", "endurance"], mandatory: true },
      { id: 114, name: "Subatomic Experiment", type: "Training", maxReps: 10, count: 0, baseTime: 1e10, description: "Experiment with quantum particles.", skills: ["quantum", "intellect"] },
      { id: 115, name: "Algorithm Optimization Code Refinement", type: "Training", maxReps: 5, count: 0, baseTime: 1e11, description: "Refine and optimize complex algorithms.", skills: ["aiMastery", "intellect"] },
      { id: 116, name: "Immunity Device: Haggle for it", type: "Training", maxReps: 2, count: 0, baseTime: 1.6e7, description: "Haggle with a science nerd.", skills: ["negotiation"], perk: "immunity_device" },
      { id: 117, name: "Random Crystal: Sentience Attempt", type: "Training", maxReps: 2, count: 0, baseTime: 7e7, description: "Attempt to create a sentient crystal.", skills: ["aiMastery", "quantum"], resources: ["random_crystal"] },
      { id: 118, name: "Quantum Vitalizer: Energy Galore", type: "Training", maxReps: 1, count: 0, baseTime: 1e6, description: "Create a quantum vitalizer for health benefits.", skills: ["quantum"], perk: "quantum_vitalizer" },
      { id: 119, name: "Hyperlink Manipulation", type: "Training", maxReps: 7, count: 0, baseTime: 1e14, description: "A high-tech take on social engineering.", skills: ["cybernetics","charisma"] }
    ]
  },
  {
    id: 12,
    name: "Forsaken Bastion",
    img: "images/zones/zone12.jpg",
    tasks: [
      { id: 121, name: "Travel: Exit to Shattered Expanse", type: "Travel", maxReps: 1, count: 0, baseTime: 1e8, description: "Journey back to the shattered expanse.", skills: ["travel"] },
      { id: 122, name: "Travel Training", type: "Training", maxReps: 20, count: 0, baseTime: 1e8, description: "Train for long-distance travel.", skills: ["travel", "endurance"], mandatory: true },
      { id: 123, name: "Secure Vault Access Code Breaker", type: "Training", maxReps: 2, count: 0, baseTime: 1e15, description: "Breach a secure digital vault.", skills: ["hacking", "intellect"], mandatory: true },
      { id: 124, name: "Bunker Blitz High-Intensity Drill", type: "Training", maxReps: 7, count: 0, baseTime: 2e14, description: "Push your endurance to the limit in a confined space.", skills: ["endurance", "combat"] },
      { id: 125, name: "Neural Matrix: System Repair", type: "Training", maxReps: 5, count: 0, baseTime: 1e13, description: "Repair and optimize atomic systems.", skills: ["aiMastery", "hacking"], perk: "neural_matrix" },
      { id: 126, name: "Infuse a Sanity Cleanser", type: "Training", maxReps: 4, count: 0, baseTime: 1e11, description: "Create a potion that cleanses the mind.", skills: ["alchemy", "quantum"], resources: ["sanity_cleanser"] },
      { id: 127, name: "Knowledge Preserver: New Invention", type: "Training", maxReps: 3, count: 0, baseTime: 4e16, description: "Create a machine that preserves knowledge.", skills: ["tinkering", "intellect"], perk: "knowledge_preserver" },
      { id: 128, name: "Battle Deadpool", type: "Training", maxReps: 1, count: 0, baseTime: 2e11, description: "Challenge the merc with a mouth.", skills: ["combat"], boss_image: "images/bosses/deadpool.jpg", drainMult: 40, resources: ["beating_heart"], sound: deadpoolSound }
    ]
  },
  {
    id: 13,
    name: "Shattered Expanse",
    img: "images/zones/zone13.jpg",
    tasks: [
      { id: 131, name: "Travel: Journey to Ascendant Metropolis", type: "Travel", maxReps: 1, count: 0, baseTime: 7e8, description: "Approach a dazzling metropolis of the future.", skills: ["travel"] },
      { id: 132, name: "Beg for Ascension", type: "Training", maxReps: 3, count: 0, baseTime: 1e19, description: "Convince ascended beings to let you access their metropolis.", skills: ["intellect", "negotiation"], mandatory: true },
      { id: 133, name: "Sandstorm: Guerrilla Warfare Sprint", type: "Training", maxReps: 4, count: 0, baseTime: 2e16, description: "Sprint through a raging sandstorm.", skills: ["endurance", "combat"], perk: "sandstorm" },
      { id: 134, name: "Outpost Infiltration Silent Breach", type: "Training", maxReps: 5, count: 0, baseTime: 1e16, description: "Breach an enemy outpost undetected.", skills: ["hacking", "endurance"] },
      { id: 135, name: "Produce Augment Fuel", type: "Training", maxReps: 4, count: 0, baseTime: 1e18, description: "Synethesize some augment fuel.", skills: ["cybernetics", "mechanics"], resources: ["augment_fuel"] },
      { id: 136, name: "Wise Mechanic: Knowledge Expansion", type: "Training", maxReps: 1, count: 0, baseTime: 1e22, description: "Expand your knowledge of mechanics.", skills: ["tinkering", "intellect", "mechanics"], perk: "wise_mechanic" },
      { id: 137, name: "Battle Vegeta", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Challenge the prince of all Saiyans.", skills: ["combat"], boss_image: "images/bosses/vegeta.jpg", drainMult: 50, resources: ["saiyan_armor"], sound: vegetaSound }
    ]
  },
  {
    id: 14,
    name: "Ascendant Metropolis",
    img: "images/zones/zone14.jpg",
    tasks: [
      { id: 141, name: "Travel: Ascend to Nexus of Infinity", type: "Travel", maxReps: 1, count: 0, baseTime: 2e9, description: "Conquer the Nexus of Infinity.", skills: ["travel"] },
      { id: 142, name: "City Grid Optimization Neural Sync", type: "Training", maxReps: 5, count: 0, baseTime: 1e16, description: "Optimize urban networks with quantum precision.", skills: ["quantum", "intellect"], mandatory: true },
      { id: 143, name: "Corporate Espionage Information Heist", type: "Training", maxReps: 2, count: 0, baseTime: 3e17, description: "Steal confidential data using your omniscient insight.", skills: ["negotiation", "hacking"], mandatory: true },
      { id: 144, name: "Urban Warfare: Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 1e16, description: "Engage in a fast-paced digital battle.", skills: ["combat", "aiMastery"], perk: "urban_warfare" },
      { id: 145, name: "Prepare Hoverboard Fuel", type: "Training", maxReps: 16, count: 0, baseTime: 1e20, description: "Synthesize some fuel for your hoverboard.", skills: ["tinkering", "alchemy"], resources: ["hoverboard_fuel"] },
      { id: 146, name: "Cryto Wallet: Find on Street", type: "Training", maxReps: 1, count: 0, baseTime: 1e12, description: "Find a lost crypto wallet.", skills: ["perception"], perk: "crypto_wallet" },
      { id: 147, name: "Challenge Big Brother", type: "Training", maxReps: 1, count: 0, baseTime: 1e13, description: "Challenge Big Brother.", skills: ["combat"], boss_image: "images/bosses/big_brother.jpg", drainMult: 55, resources: ["surveillance_core"], sound: bigBrotherSound }
    ]
  },
  {
    id: 15,
    name: "Nexus of Infinity",
    img: "images/zones/zone15.jpg",
    tasks: [
      { id: 151, name: "Travel: Enter The Garden", type: "Travel", maxReps: 1, count: 0, baseTime: 1e10, description: "Where could the journey take you next?", skills: ["travel"] },
      { id: 152, name: "Mainframe Break-In Digital Siege", type: "Training", maxReps: 2, count: 0, baseTime: 5e19, description: "Penetrate a heavily fortified digital fortress.", skills: ["cybernetics", "mechanics"], mandatory: true },
      { id: 153, name: "Cyber Siege Digital Onslaught", type: "Training", maxReps: 10, count: 0, baseTime: 2e18, description: "Launch a final digital assault on enemy systems.", skills: ["hacking", "cybernetics"], mandatory: true },
      { id: 154, name: "Discover Serenity", type: "Prestige", maxReps: 1, count: 0, baseTime: 1e6, description: "Find inner peace and serenity.", skills: ["omniscience"], mandatory: true },
      { id: 155, name: "Master of AI: Ultimate Challenge", type: "Training", maxReps: 5, count: 0, baseTime: 1e19, description: "Solve a complex algorithm that tests your intellect.", skills: ["aiMastery", "intellect"], perk: "master_of_ai" },
      { id: 156, name: "Last Stand: Test of Endurance", type: "Training", maxReps: 5, count: 0, baseTime: 1e14, description: "Withstand an endless onslaught of foes.", skills: ["endurance"], perk: "last_stand" },
      { id: 157, name: "Puzzle Piece: Destiny", type: "Training", maxReps: 10, count: 0, baseTime: 1e17, description: "Find a piece of the ultimate puzzle to shape your destiny.", skills: ["aiMastery", "perception"], resources: ["puzzle_piece"] }
    ]
  },
  {
    id: 16,
    name: "The Garden",
    img: "images/zones/zone16.jpg",
    tasks: [
      { id: 161, name: "Travel: Journey to Nebular Nexus", type: "Travel", maxReps: 1, count: 0, baseTime: 3e10, description: "Leave The Garden behind and step into cosmic wonder.", skills: ["travel"] },
      { id: 162, name: "Plant the Seeds of Creation", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e23, description: "Sow the first seeds in fertile soil.", skills: ["alchemy", "intellect"], mandatory: true },
      { id: 163, name: "Nurture the Cosmic Flora", type: "Training", maxReps: 1, count: 0, baseTime: 4e16, description: "Cultivate the garden with care and vigor.", skills: ["tinkering"], mandatory: true },
      { id: 164, name: "Mechanical Genius: Radiodynamic Gardening", type: "Training", maxReps: 4, count: 0, baseTime: 2e17, description: "Harness the power of mechanical gardening.", skills: ["mechanics"], perk: "mechanical_genius" },
      { id: 165, name: "Prune the Stellar Vines", type: "Training", maxReps: 7, count: 0, baseTime: 1e23, description: "Trim and shape the living tendrils of cosmic life.", skills: ["tinkering", "perception"] },
      { id: 166, name: "Harvest the Celestial Blossoms", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e22, description: "Gather rare blossoms that glow with otherworldly light.", skills: ["alchemy", "charisma"], resources: ["celestial_blossom"] },
      { id: 167, name: "Growth Miracle: Nebula Soil", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e19, description: "Study the soil here to learn how to accelerate growth.", skills: ["alchemy"], perk: "growth_miracle" },
      { id: 168, name: "Battle Thanos (with hair)", type: "Training", maxReps: 1, count: 0, baseTime: 1e15, description: "Engage the Mad Titan in a clash of cosmic might. Maybe even take his glove.", skills: ["combat"], boss_image: "images/bosses/thanos.jpg", drainMult: 65, resources: ["infinity_gauntlet"], sound: thanosSound },
    ]
  },
  {
    id: 17,
    name: "Nebular Nexus",
    img: "images/zones/zone17.jpg",
    tasks: [
      { id: 171, name: "Travel: Journey to Quantum Abyss", type: "Travel", maxReps: 1, count: 0, baseTime: 1e11, description: "Depart the Nebular Nexus and approach the realm of probabilities.", skills: ["travel"] },
      { id: 172, name: "Map the Celestial Grid", type: "Training", maxReps: 10, count: 0, baseTime: 1.5e23, description: "Chart the intricate network of nebular pathways.", skills: ["intellect", "perception"], mandatory: true },
      { id: 173, name: "Align the Nebula Currents", type: "Training", maxReps: 1, count: 0, baseTime: 4e17, description: "Adjust the flow of cosmic energies to create balance.", skills: ["intellect"], mandatory: true },
      { id: 174, name: "Collect Stardust Samples", type: "Training", maxReps: 2, count: 0, baseTime: 1e24, description: "Gather sparkling particles scattered across the void.", skills: ["alchemy", "perception"], resources: ["stardust"] },
      { id: 175, name: "Calibrate Luminous Instruments", type: "Training", maxReps: 7, count: 0, baseTime: 7e23, description: "Fine-tune devices to capture the brilliance of nebular light.", skills: ["tinkering", "intellect"] },
      { id: 176, name: "Inspired Glow: Nebular Inspiration", type: "Training", maxReps: 3, count: 0, baseTime: 1e19, description: "Let the glow of the cosmos spark creative genius.", skills: ["charisma"], perk: "inspired_glow" },
      { id: 177, name: "Battle Darth Vader", type: "Training", maxReps: 1, count: 0, baseTime: 3e15, description: "Engage the dark enforcer in an intergalactic duel.", skills: ["combat"], boss_image: "images/bosses/darth_vader.jpg", drainMult: 70, resources: ["lightsaber"], sound: darthVaderSound },
    ]
  },
  {
    id: 18,
    name: "Quantum Abyss",
    img: "images/zones/zone18.jpg",
    tasks: [
      { id: 181, name: "Travel: Warp to Cybernetic Olympus", type: "Travel", maxReps: 1, count: 0, baseTime: 3e11, description: "Bend the fabric of space-time as you leave the abyss.", skills: ["travel"] },
      { id: 182, name: "Embrace Quantum Uncertainty", type: "Training", maxReps: 2, count: 0, baseTime: 1e17, description: "Dive into the realm of probabilistic wonders.", skills: ["quantum"], mandatory: true },
      { id: 183, name: "Stabilize the Particle Field", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e22, description: "Harness subatomic forces with precise adjustments.", skills: ["tinkering", "quantum"], mandatory: true },
      { id: 184, name: "Collect Quantum Residue", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e22, description: "Retrieve fleeting particles left in the void.", skills: ["alchemy", "quantum"], resources: ["quantum_residue"] },
      { id: 185, name: "Calibrate Waveform Oscillations", type: "Training", maxReps: 9, count: 0, baseTime: 2e25, description: "Adjust the frequencies of unseen oscillations.", skills: ["intellect", "mechanics"] },
      { id: 186, name: "Quantum Harmony: Uncertainty Principle", type: "Training", maxReps: 1, count: 0, baseTime: 1e20, description: "Blend chaos and order into perfect symmetry.", skills: ["intellect"], perk: "quantum_harmony" },
      { id: 187, name: "Battle Ultron", type: "Training", maxReps: 1, count: 0, baseTime: 1e16, description: "Confront the synthetic menace in a clash of logic.", skills: ["combat"], boss_image: "images/bosses/ultron.jpg", drainMult: 75, resources: ["adamantium"], sound: ultronSound },
    ]
  },
  // {
  //   id: 19,
  //   name: "Cybernetic Olympus",
  //   img: "images/zones/zone19.jpg",
  //   tasks: [
  //     { id: 191, name: "Travel: Ascend from Cybernetic Olympus to Cosmic Forge", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e23, description: "Leave the realm of circuits for the fires of creation.", skills: ["travel"] },
  //     { id: 192, name: "Interface with Machine Spirits", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e23, description: "Merge your mind with digital deities.", skills: ["cybernetics", "intellect"], mandatory: true },
  //     { id: 193, name: "Optimize Circuitry Harmony", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e23, description: "Refine the balance of mechanical precision.", skills: ["tinkering", "mechanics"], mandatory: true },
  //     { id: 194, name: "Extract Nano Components", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e23, description: "Scavenge vital microchips from abandoned systems.", skills: ["mechanics", "hacking"], resources: ["nano_chip"] },
  //     { id: 195, name: "Synchronize Data Streams", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e23, description: "Align the flow of digital information.", skills: ["intellect", "hacking"] },
  //     { id: 196, name: "Empower Digital Resonance", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e23, description: "Amplify the power of cybernetic energy.", skills: ["cybernetics", "intellect"], perk: "cyber_boost" },
  //     { id: 197, name: "Battle Unicron", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e23, description: "Confront the colossal force of cosmic destruction.", skills: ["combat", "intellect", "cybernetics"], resources: ["cosmic_shard"] }
  //   ]
  // },
  // {
  //   id: 20,
  //   name: "Cosmic Forge",
  //   img: "images/zones/zone20.jpg",
  //   tasks: [
  //     { id: 201, name: "Travel: Emerge from Cosmic Forge to Celestial Dominion", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e24, description: "Exit the blazing forge and ascend toward divine realms.", skills: ["travel"] },
  //     { id: 202, name: "Hammer the Celestial Anvil", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e24, description: "Shape raw cosmic materials with divine precision.", skills: ["tinkering", "endurance"], mandatory: true },
  //     { id: 203, name: "Heat the Stellar Crucible", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e24, description: "Ignite the furnace of creation to mold the universe.", skills: ["alchemy", "intellect"], mandatory: true },
  //     { id: 204, name: "Extract Cosmic Ore", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e24, description: "Mine rare metals from the heart of a star.", skills: ["mechanics", "alchemy"], resources: ["celestial_ore"] },
  //     { id: 205, name: "Mold Universal Alloys", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e24, description: "Combine elements to form structures of eternal strength.", skills: ["tinkering", "intellect"] },
  //     { id: 206, name: "Resonate with Stellar Flames", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e24, description: "Let the heat of creation empower your spirit.", skills: ["endurance", "intellect"], perk: "forge_fervor" },
  //     { id: 207, name: "Battle Doctor Manhattan", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e24, description: "Contend with the enigmatic force of atomic power.", skills: ["combat", "intellect", "alchemy"], resources: ["atomic_particle"] }
  //   ]
  // },
  // {
  //   id: 21,
  //   name: "Celestial Dominion",
  //   img: "images/zones/zone21.jpg",
  //   tasks: [
  //     { id: 211, name: "Travel: Exit Celestial Dominion to Neon Hypergrid", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e25, description: "Leave divine order behind and step into radiant energy.", skills: ["travel"] },
  //     { id: 212, name: "Proclaim Divine Edicts", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e25, description: "Establish your authority over celestial forces.", skills: ["charisma", "intellect"], mandatory: true },
  //     { id: 213, name: "Unify Stellar Legions", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e25, description: "Rally celestial forces into one harmonious chorus.", skills: ["charisma", "intellect"], mandatory: true },
  //     { id: 214, name: "Collect Star Fragments", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e25, description: "Gather shimmering remnants of ancient stars.", skills: ["alchemy", "perception"], resources: ["star_fragment"] },
  //     { id: 215, name: "Harmonize Celestial Chants", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e25, description: "Blend cosmic sounds to maintain universal balance.", skills: ["charisma", "intellect"] },
  //     { id: 216, name: "Invoke Divine Radiance", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e25, description: "Channel celestial light to inspire greatness.", skills: ["charisma", "intellect"], perk: "celestial_glory" },
  //     { id: 217, name: "Battle Galactus", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e25, description: "Engage the devourer of worlds in an epic showdown.", skills: ["combat", "intellect", "endurance"], resources: ["cosmic_energy"] }
  //   ]
  // },
  // {
  //   id: 22,
  //   name: "Neon Hypergrid",
  //   img: "images/zones/zone22.jpg",
  //   tasks: [
  //     { id: 221, name: "Travel: Shift from Neon Hypergrid to Omega Expanse", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e26, description: "Escape the dazzling glow and step into the ultimate frontier.", skills: ["travel"] },
  //     { id: 222, name: "Sync with Digital Frequencies", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e26, description: "Tune into the electric pulse of the grid.", skills: ["intellect", "hacking"], mandatory: true },
  //     { id: 223, name: "Illuminate Virtual Vistas", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e26, description: "Unleash radiant creativity through digital artistry.", skills: ["charisma", "intellect"], mandatory: true },
  //     { id: 224, name: "Extract Pixel Data", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e26, description: "Gather fragmented bits of digital information.", skills: ["hacking", "perception"], resources: ["data_bit"] },
  //     { id: 225, name: "Overclock Digital Circuits", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e26, description: "Boost the power of virtual infrastructures.", skills: ["tinkering", "cybernetics"] },
  //     { id: 226, name: "Surge with Neon Energy", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e26, description: "Channel the raw force of electric vibrance.", skills: ["charisma", "endurance"], perk: "electric_vigor" },
  //     { id: 227, name: "Battle Doomsday", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e26, description: "Face the unstoppable force of destruction.", skills: ["combat", "intellect", "hacking"], resources: ["energy_core"] }
  //   ]
  // },
  // {
  //   id: 23,
  //   name: "Omega Expanse",
  //   img: "images/zones/zone23.jpg",
  //   tasks: [
  //     { id: 231, name: "Travel: Venture from Omega Expanse to Digital Nebula", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e27, description: "Step from the vast expanse into an enigmatic digital cloud.", skills: ["travel"] },
  //     { id: 232, name: "Decode Alien Frequencies", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e27, description: "Interpret mysterious signals from beyond.", skills: ["intellect", "perception"], mandatory: true },
  //     { id: 233, name: "Harness Expanse Energy", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e27, description: "Channel raw cosmic power into your arsenal.", skills: ["endurance", "intellect"], mandatory: true },
  //     { id: 234, name: "Scavenge Cyber Relics", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e27, description: "Recover valuable remnants from forgotten networks.", skills: ["mechanics", "hacking"], resources: ["cyber_scrap"] },
  //     { id: 235, name: "Stabilize Dimensional Shifts", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e27, description: "Ensure harmony amid chaotic energies.", skills: ["tinkering", "quantum"] },
  //     { id: 236, name: "Resonate with Cosmic Pulse", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e27, description: "Feel the heartbeat of the universe.", skills: ["intellect", "perception"], perk: "expanse_echo" },
  //     { id: 237, name: "Battle T-800", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e27, description: "Engage the relentless cyborg in a test of survival.", skills: ["combat", "hacking", "intellect"], resources: ["cybernetic_implant"] }
  //   ]
  // },
  // {
  //   id: 24,
  //   name: "Digital Nebula",
  //   img: "images/zones/zone24.jpg",
  //   tasks: [
  //     { id: 241, name: "Travel: Depart Digital Nebula to Infinite Horizon", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e28, description: "Exit the digital cloud and step toward endless possibility.", skills: ["travel"] },
  //     { id: 242, name: "Decrypt Virtual Codes", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e28, description: "Unlock hidden messages in streams of data.", skills: ["hacking", "intellect"], mandatory: true },
  //     { id: 243, name: "Sync with Pixel Patterns", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e28, description: "Merge your vision with digital artistry.", skills: ["creativity", "perception"], mandatory: true },
  //     { id: 244, name: "Compile Data Clusters", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e28, description: "Gather and organize fragmented digital info.", skills: ["tinkering", "hacking"], resources: ["data_cluster"] },
  //     { id: 245, name: "Streamline Virtual Networks", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e28, description: "Enhance connectivity within the digital realm.", skills: ["cybernetics", "intellect"] },
  //     { id: 246, name: "Evoke Digital Dreams", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e28, description: "Let visions of code inspire new realities.", skills: ["charisma", "creativity"], perk: "cyber_inspiration" },
  //     { id: 247, name: "Battle HAL 9000", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e28, description: "Challenge the legendary AI in a clash of wits.", skills: ["combat", "hacking", "intellect"], resources: ["system_core"] }
  //   ]
  // },
  // {
  //   id: 25,
  //   name: "Infinite Horizon",
  //   img: "images/zones/zone25.jpg",
  //   tasks: [
  //     { id: 251, name: "Travel: Breakthrough from Infinite Horizon to Ethereal Matrix", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e29, description: "Shatter your limits and cross into the unknown.", skills: ["travel"] },
  //     { id: 252, name: "Transcend Finite Limits", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e29, description: "Push beyond the boundaries of the known universe.", skills: ["intellect", "endurance"], mandatory: true },
  //     { id: 253, name: "Embody Cosmic Potential", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e29, description: "Channel the energy of infinity into your being.", skills: ["alchemy", "charisma"], mandatory: true },
  //     { id: 254, name: "Harvest Celestial Wisdom", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e29, description: "Collect ancient insights from the cosmos.", skills: ["intellect", "perception"], resources: ["cosmic_scroll"] },
  //     { id: 255, name: "Drift Through Stellar Dreams", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e29, description: "Float among the endless expanse of space.", skills: ["tinkering", "charisma"] },
  //     { id: 256, name: "Ignite the Spark of Infinity", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e29, description: "Let the boundless energy of the universe fuel you.", skills: ["intellect", "creativity"], perk: "limitless_drive" },
  //     { id: 257, name: "Battle Godzilla", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e29, description: "Engage the king of monsters in a titanic struggle.", skills: ["combat", "endurance", "intellect"], resources: ["kaiju_scale"] }
  //   ]
  // },
  // {
  //   id: 26,
  //   name: "Ethereal Matrix",
  //   img: "images/zones/zone26.jpg",
  //   tasks: [
  //     { id: 261, name: "Travel: Leap from Ethereal Matrix to Temporal Paradox", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e30, description: "Exit the digital realm and jump into time’s mysterious currents.", skills: ["travel"] },
  //     { id: 262, name: "Merge with the Digital Spirit", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e30, description: "Harmonize with the underlying code of existence.", skills: ["hacking", "intellect"], mandatory: true },
  //     { id: 263, name: "Decode Ethereal Enigmas", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e30, description: "Solve the riddles of a shifting digital realm.", skills: ["intellect", "perception"], mandatory: true },
  //     { id: 264, name: "Extract Dream Fragments", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e30, description: "Gather rare remnants of lucid dreams.", skills: ["alchemy", "intellect"], resources: ["dream_fragment"] },
  //     { id: 265, name: "Synthesize Virtual Realities", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e30, description: "Blend imagination with binary data.", skills: ["creativity", "hacking"] },
  //     { id: 266, name: "Invoke Matrix Miracles", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e30, description: "Manifest unexpected wonders from the code.", skills: ["charisma", "intellect"], perk: "spectral_glow" },
  //     { id: 267, name: "Battle Cthulhu", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e30, description: "Confront the ancient horror from beyond reality.", skills: ["combat", "intellect", "hacking"], resources: ["eldritch_tentacle"] }
  //   ]
  // },
  // {
  //   id: 27,
  //   name: "Temporal Paradox",
  //   img: "images/zones/zone27.jpg",
  //   tasks: [
  //     { id: 271, name: "Travel: Navigate from Temporal Paradox to Ultra Dimension", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e31, description: "Step from warped time into a realm of infinite possibilities.", skills: ["travel"] },
  //     { id: 272, name: "Measure Shifting Chronologies", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e31, description: "Analyze the distortions in time’s fabric.", skills: ["intellect", "perception"], mandatory: true },
  //     { id: 273, name: "Synchronize Lost Moments", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e31, description: "Align fragmented memories across eras.", skills: ["tinkering", "intellect"], mandatory: true },
  //     { id: 274, name: "Capture Temporal Residue", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e31, description: "Secure remnants of fleeting time.", skills: ["alchemy", "perception"], resources: ["time_fragment"] },
  //     { id: 275, name: "Rewind Digital Echoes", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e31, description: "Manipulate echoes of the past.", skills: ["hacking", "intellect"] },
  //     { id: 276, name: "Amplify Chrono Clarity", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e31, description: "Focus your mind to see through time.", skills: ["intellect", "creativity"], perk: "time_glimpse" },
  //     { id: 277, name: "Battle Dr. Doom", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e31, description: "Face the master of misfortune in a clash of wills.", skills: ["combat", "intellect", "tinkering"], resources: ["doom_relic"] }
  //   ]
  // },
  // {
  //   id: 28,
  //   name: "Ultra Dimension",
  //   img: "images/zones/zone28.jpg",
  //   tasks: [
  //     { id: 281, name: "Travel: Traverse from Ultra Dimension to Transcendent Void", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e32, description: "Cross into a realm beyond conventional space and time.", skills: ["travel"] },
  //     { id: 282, name: "Align Multiversal Realms", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e32, description: "Bridge the gaps between infinite dimensions.", skills: ["intellect", "quantum"], mandatory: true },
  //     { id: 283, name: "Decode Dimensional Signatures", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e32, description: "Interpret the signals of alternate realities.", skills: ["perception", "intellect"], mandatory: true },
  //     { id: 284, name: "Collect Interdimensional Ore", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e32, description: "Mine rare materials from shifting planes.", skills: ["mechanics", "alchemy"], resources: ["dimensional_ore"] },
  //     { id: 285, name: "Synthesize Reality Fragments", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e32, description: "Merge elements from multiple realms into a new whole.", skills: ["tinkering", "intellect"] },
  //     { id: 286, name: "Harmonize the Multiverse", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e32, description: "Attune yourself to the symphony of infinite realities.", skills: ["intellect", "creativity"], perk: "dimension_mastery" },
  //     { id: 287, name: "Battle Darkseid", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e32, description: "Challenge the tyrant of apocalyptic power.", skills: ["combat", "intellect", "quantum"], resources: ["omega_force"] }
  //   ]
  // },
  // {
  //   id: 29,
  //   name: "Transcendent Void",
  //   img: "images/zones/zone29.jpg",
  //   tasks: [
  //     { id: 291, name: "Travel: Soar from Transcendent Void to Eternal Apex", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e33, description: "Leave the emptiness behind and ascend toward ultimate revelation.", skills: ["travel"] },
  //     { id: 292, name: "Embrace the Void's Wisdom", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e33, description: "Absorb the profound silence and insights of nothingness.", skills: ["intellect", "meditation"], mandatory: true },
  //     { id: 293, name: "Distill Absurdity", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e33, description: "Extract meaning from the chaos of the void.", skills: ["creativity", "intellect"], mandatory: true },
  //     { id: 294, name: "Harvest Void Residue", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e33, description: "Collect remnants left behind in the emptiness.", skills: ["alchemy", "perception"], resources: ["void_residue"] },
  //     { id: 295, name: "Resonate with Nihilistic Beats", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e33, description: "Vibrate with the rhythm of utter nothingness.", skills: ["tinkering", "intellect"] },
  //     { id: 296, name: "Invoke the Echo of Nothing", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e33, description: "Channel the void’s mysterious reverberations.", skills: ["intellect", "meditation"], perk: "void_echo" },
  //     { id: 297, name: "Battle Saitama", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e33, description: "Face the one-punch legend in an absurd trial of strength.", skills: ["combat", "intellect", "endurance"], resources: ["heroic_spirit"] }
  //   ]
  // },
  // {
  //   id: 30,
  //   name: "Eternal Apex",
  //   img: "images/zones/zone30.jpg",
  //   tasks: [
  //     { id: 301, name: "Travel: Ascend Beyond Eternal Apex", type: "Travel", maxReps: 1, count: 0, baseTime: 1.0e34, description: "Transcend all known limits and venture into the ultimate realm.", skills: ["travel"] },
  //     { id: 302, name: "Achieve Ultimate Ascension", type: "Training", maxReps: 10, count: 0, baseTime: 1.1e34, description: "Surpass mortal limitations and embrace divinity.", skills: ["omniscience", "intellect"], mandatory: true },
  //     { id: 303, name: "Merge with Cosmic Eternity", type: "Training", maxReps: 10, count: 0, baseTime: 1.2e34, description: "Unite your essence with the fabric of the infinite.", skills: ["alchemy", "intellect"], mandatory: true },
  //     { id: 304, name: "Collect Divine Radiance", type: "Training", maxReps: 7, count: 0, baseTime: 1.3e34, description: "Harvest luminous energy from the cosmos.", skills: ["charisma", "alchemy"], resources: ["divine_fragment"] },
  //     { id: 305, name: "Synthesize Universal Harmony", type: "Training", maxReps: 7, count: 0, baseTime: 1.4e34, description: "Craft a masterpiece of cosmic balance.", skills: ["tinkering", "creativity"] },
  //     { id: 306, name: "Ignite the Spark of Revelation", type: "Training", maxReps: 7, count: 0, baseTime: 1.5e34, description: "Unleash the inner light of infinite wisdom.", skills: ["intellect", "creativity"], perk: "cosmic_oneness" },
  //     { id: 307, name: "Battle One Above All", type: "Training", maxReps: 1, count: 0, baseTime: 1.6e34, description: "Confront the supreme force that transcends all realities.", skills: ["combat", "omniscience", "intellect"], resources: ["divine_core"] }
  //   ]
  // }
];

