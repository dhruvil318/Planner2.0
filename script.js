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
    document.getElementById("dropdown-menu").classList.toggle("show");
  }
  
