console.log("test")
chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "panel.html",
    function (panel) {
        // code invoked on panel creation
    }
);