function toggleCSS() {
    // get current css file
    var cssFile = document.getElementById("css-file");

    // change to other stylesheet
    if (cssFile.getAttribute('href') == 'main.css') {
        cssFile.setAttribute('href', 'alternate.css');
    } else {
        cssFile.setAttribute('href', 'main.css');
    }
}

function toggleDropdown() {
    // show dropdown when language button clicked
    document.getElementByClass("dropdown-menu").classList.toggle("show");
}

