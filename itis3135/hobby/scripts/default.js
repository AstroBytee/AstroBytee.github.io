// Gets all sections
const elements = document.getElementsByTagName("section");

// Hides all sections except for "what" (Home page)
for (let element of elements) {
    if (element.id !== "what") {
        element.style.display = 'none';
    }
}

// Saves the current page
let currentPageID = "what";

function changePage(id) {
    document.getElementById(currentPageID).style.display = 'none';
    currentPageID = id; 
    document.getElementById(currentPageID).style.display = 'block';
}