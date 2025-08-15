// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the browser window.
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'SAML Tool',
    // Sets the window icon during development and for the app window itself.
    icon: path.join(__dirname, 'build/icon.png'),
    webPreferences: {
      // These settings are default and secure.
    },
  });

  // Load the index.html file into the window.
  mainWindow.loadFile('index.html');

  // Removes the default "File, Edit, View..." application menu.
  mainWindow.removeMenu();

  // Optional: Open the DevTools for debugging.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished initialization.
app.whenReady().then(() => {
  createWindow();

  // Handle macOS 'activate' event (re-create window when dock icon is clicked).
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});