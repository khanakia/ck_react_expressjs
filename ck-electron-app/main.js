const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const globalShortcut = electron.globalShortcut


const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// global.sharedObj = {prop1: null};
// electron.remote.getGlobal('sharedObj')



function openNewWindow() {
    // var win = new BrowserWindow({width: 800, height: 600})
    var win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: false,
        'plugins': true
      },
      'minHeight': 600,
      'minWidth': 1250,
       width: 1250, 
       height: 750,
       title: "London BetExchange"
    })
    win.loadURL("http://localhost:3000")
}

function createWindow () {


  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      'plugins': true
    },
    'minHeight': 600,
    'minWidth': 1250,
     width: 1250, 
     height: 750,
     title: "London BetExchange"
   })

  // mainWindow.loadURL("http://localhost:3000")
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))


  mainWindow.on('focus', () => {

      if (mainWindow.isFocused()) {
         
          globalShortcut.register('CommandOrControl+T', () => {
            console.log('CommandOrControl+X is pressed')
            openNewWindow()
          })

          globalShortcut.register('CommandOrControl+Shift+I', () => {
            console.log('CommandOrControl+Shift+I is pressed')
            mainWindow.webContents.openDevTools()
          })
      }
  });

  //  ** THE IMPORTANT PART **
  // Unregister a 'Backspace' shortcut listener when leaving window.
  mainWindow.on('blur', () => {

      globalShortcut.unregister('CommandOrControl+T');
      // console.log('Backspace is unregistered!'); //comment-out or delete when ready.
  });



  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


// app.commandLine.appendSwitch('--harmony')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
