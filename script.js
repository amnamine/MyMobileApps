// App Data
const apps = [
  {
    name: "Calculator",
    description: "A simple and efficient calculator app to handle all your basic operations.",
    file: "downloads/calculator.apk",
    icon: "🧮",
  },
  {
    name: "Dice Roller",
    description: "Roll virtual dice and enjoy endless fun and randomness.",
    file: "downloads/dice.apk",
    icon: "🎲",
  },
  {
    name: "Dodge The Creeps!",
    description: "Your character must move and avoid the enemies for as long as possible.",
    file: "downloads/DodgeTheCreeps.apk",
    icon: "👾",
  },
  {
    name: "Press The Button",
    description: "Test your reflexes in this fun and interactive button-pressing game.",
    file: "downloads/PressTheButton.apk",
    icon: "🔘",
  },
  {
    name: "Snake",
    description: "Classic snake game with modern visuals and smooth controls.",
    file: "downloads/snake.apk",
    icon: "🐍",
  },
  {
    name: "Tic Tac Toe",
    description: "Play the classic Tic Tac Toe with an AI or a friend!",
    file: "downloads/tictactoe.apk",
    icon: "❌⭕",
  },
];

// Generate App Grid
const appGrid = document.getElementById("app-grid");

apps.forEach((app) => {
  const appCard = document.createElement("div");
  appCard.classList.add("app-card");

  appCard.innerHTML = `
    <div class="app-icon">${app.icon}</div>
    <h2 class="app-title">${app.name}</h2>
    <p class="app-description">${app.description}</p>
    <a class="download-btn" href="${app.file}" download>Download</a>
  `;

  appGrid.appendChild(appCard);
});
