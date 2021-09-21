// Create a function in Javascript that checks if the html page that user is on is closed.

function isPageClosed() {
    //Check if the HTML page is closed 
    if (window.top != window.self) { 
        //The user is on a different page 
        return false; 
    }
    //The HTML page is closed 
    return true; 
}

// Create a function in Javascript that checks if the html page that user is on is open.

function isPageOpen() { 
    //Check if the HTML page is closed 
    if (window.top == window.self) { 
        //The user is on the same page 
        return false; 
    } 
    //The HTML page is open 
    return true; 
}

// Create a function in Javascript that changes the color of the textbox to red if the page is closed.

function changeColorIfClosed() { 
    //Send the message to the page 
    document.getElementById("textbox").value = "The page is closed!"; 
    //Change the CSS color of the textbox to red 
    document.getElementById("textbox").style.color = "red"; 
}

// Create a function in Javascript that changes the color of the textbox to green if the page is open.

function changeColorIfOpen() { 
    //Send the message to the page 
    document.getElementById("textbox").value = "The page is open!"; 
    //Change the CSS color of the textbox to green 
    document.getElementById("textbox").style.color = "green"; 
}

// Create a function in Javascript that adds an event listener for the click event to the textbox.

function addEventListener() { 
    //Listen for the click event on the textbox 
    document.getElementById("textbox").addEventListener("click", changeColorIfClosed); 
    //Listen for the click event on the textbox 
    document.getElementById("textbox").addEventListener("click", changeColorIfOpen); }

// Create a function in Javascript that stops listening for click events on the textbox.

function stopEventListen() { 
    document.getElementById("textbox").removeEventListener("click", changeColorIfClosed); 
    document.getElementById("textbox").removeEventListener("click", changeColorIfOpen); 
}

// Create a function in Javascript that triggers the event listener to close the page.

function closePage() { 
    //Trigger the event listener to close the page 
    if (isPageClosed()) { 
        stopEventListen(); 
        isPageClosed(); 
    } 
}

// Create a function in Javascript that triggers the event listener to open the page.

function openPage() { 
    //Trigger the event listener to open the page 
    if (isPageOpen()) { 
        stopEventListen(); 
        isPageOpen(); 
    } 
}

// Create a function in Javascript that adds the event listener to the page.

function attachEvents() { 
    //Add the event listener to the page i
    isPageClosed(); 
    isPageOpen(); 
}

// Create a function in Javascript that stops the event listener from listening for events.

function stopEventListen() { 
    //Stop listening for events 
    stopEventListen(); 
}