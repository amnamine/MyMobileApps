// App Data
const apps = [
  {
    name: "Calculator",
    description: "A powerful calculator with scientific functions and beautiful material design.",
    file: "downloads/calculator.apk",
    icon: "🧮",
    size: "2.3 MB",
    version: "1.0.0",
    downloads: "10K+"
  },
  {
    name: "Dice Roller",
    description: "A beautifully animated dice roller with multiple dice types and customization options.",
    file: "downloads/dice.apk",
    icon: "🎲",
    size: "1.8 MB",
    version: "1.1.0",
    downloads: "5K+"
  },
  {
    name: "Dodge The Creeps!",
    description: "An exciting arcade game with smooth animations and challenging gameplay.",
    file: "downloads/DodgeTheCreeps.apk",
    icon: "👾",
    size: "3.2 MB",
    version: "2.0.1",
    downloads: "15K+"
  },
  {
    name: "Press The Button",
    description: "Test your reflexes in this addictive game with multiple difficulty levels.",
    file: "downloads/PressTheButton.apk",
    icon: "🔘",
    size: "1.5 MB",
    version: "1.2.0",
    downloads: "8K+"
  },
  {
    name: "Snake",
    description: "The classic snake game reimagined with modern graphics and power-ups.",
    file: "downloads/snake.apk",
    icon: "🐍",
    size: "2.7 MB",
    version: "1.3.0",
    downloads: "20K+"
  },
  {
    name: "Tic Tac Toe",
    description: "Play against AI with multiple difficulty levels or challenge your friends locally.",
    file: "downloads/tictactoe.apk",
    icon: "❌",
    size: "2.1 MB",
    version: "1.4.0",
    downloads: "12K+"
  },
];

// Generate App Grid
const appGrid = document.getElementById("app-grid");

// Function to show toast notification
const showToast = (message, type = 'info') => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Function to handle downloads
const handleDownload = (event, app) => {
  event.preventDefault();
  const button = event.target;
  
  // Show loading state
  button.innerHTML = `
    <svg class="loading-spinner" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
    </svg>
    Downloading...
  `;
  button.style.opacity = "0.7";
  button.style.pointerEvents = "none";
  
  // Simulate download (replace with actual download logic)
  setTimeout(() => {
    window.location.href = app.file;
    
    // Show success message
    showToast(`${app.name} download started!`, 'success');
    
    // Reset button state after a short delay
    setTimeout(() => {
      button.innerHTML = `
        <svg class="download-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 15.575L16.95 10.625L15.8875 9.5625L12.75 12.7V4.5H11.25V12.7L8.1125 9.5625L7.05 10.625L12 15.575ZM6.5 19.5V15H5V19.5C5 20.2 5.3 20.7917 5.9 21.275C6.5 21.7583 7.2 22 8 22H16C16.8 22 17.5 21.7583 18.1 21.275C18.7 20.7917 19 20.2 19 19.5V15H17.5V19.5H6.5Z"/>
        </svg>
        Download
      `;
      button.style.opacity = "1";
      button.style.pointerEvents = "auto";
    }, 1000);
  }, 500);
};

// Create and append app cards
apps.forEach((app, index) => {
  const appCard = document.createElement("div");
  appCard.classList.add("app-card");
  appCard.style.animationDelay = `${index * 0.15}s`;

  appCard.innerHTML = `
    <div class="app-icon">${app.icon}</div>
    <h2 class="app-title">${app.name}</h2>
    <p class="app-description">${app.description}</p>
    <div class="app-meta">
      <span>Version ${app.version}</span>
      <span>•</span>
      <span>${app.size}</span>
      <span>•</span>
      <span>${app.downloads} downloads</span>
    </div>
    <a class="download-btn" href="${app.file}" download>
      <svg class="download-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 15.575L16.95 10.625L15.8875 9.5625L12.75 12.7V4.5H11.25V12.7L8.1125 9.5625L7.05 10.625L12 15.575ZM6.5 19.5V15H5V19.5C5 20.2 5.3 20.7917 5.9 21.275C6.5 21.7583 7.2 22 8 22H16C16.8 22 17.5 21.7583 18.1 21.275C18.7 20.7917 19 20.2 19 19.5V15H17.5V19.5H6.5Z"/>
      </svg>
      Download
    </a>
  `;

  // Add download handler
  const downloadBtn = appCard.querySelector(".download-btn");
  downloadBtn.addEventListener("click", (e) => handleDownload(e, app));

  appGrid.appendChild(appCard);
});

// Add error handling for failed downloads
window.addEventListener("error", (e) => {
  if (e.target.tagName === "A" && e.target.classList.contains("download-btn")) {
    showToast("Download failed. Please try again later.", 'error');
    const button = e.target;
    button.innerHTML = `
      <svg class="download-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 15.575L16.95 10.625L15.8875 9.5625L12.75 12.7V4.5H11.25V12.7L8.1125 9.5625L7.05 10.625L12 15.575ZM6.5 19.5V15H5V19.5C5 20.2 5.3 20.7917 5.9 21.275C6.5 21.7583 7.2 22 8 22H16C16.8 22 17.5 21.7583 18.1 21.275C18.7 20.7917 19 20.2 19 19.5V15H17.5V19.5H6.5Z"/>
      </svg>
      Download
    `;
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  }
});

// Mouse tracking effect for cards
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.app-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
