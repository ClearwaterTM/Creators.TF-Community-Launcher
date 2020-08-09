const { BrowserWindow } = require('electron');
const path = require("path");

var patchNotesWindow;

module.exports.OpenWindow = OpenWindow;
function OpenWindow() {
    global.log.info("Loading Patch Notes window...");
    patchNotesWindow = new BrowserWindow({
        parent: global.mainWindow,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true
        },
        modal: true,
        show: false,
        center: true,
        darkTheme: true,
        maximizable: true,
        resizable: true,
        autoHideMenuBar: true,
        minWidth: 800,
        minHeight: 450,
        width: 800,
        height: 450
    });

    patchNotesWindow.removeMenu();
    patchNotesWindow.loadFile(path.resolve(__dirname, "patchnotes.html"));
    patchNotesWindow.once("ready-to-show", () => {
        patchNotesWindow.show();
    });
}
