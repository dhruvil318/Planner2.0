function toggleCSS() {
    // get current css file
    var cssFile = document.getElementById("css-file");
  
    // change to other stylesheet
    if (cssFile.getAttribute("href") == "main.css") {
      cssFile.setAttribute("href", "alternate.css");
      // save the preference in a cookie
      document.cookie = "preferredStyle=alternate; path=/";
    } else {
      cssFile.setAttribute("href", "main.css");
      // save the preference in a cookie
      document.cookie = "preferredStyle=main; path=/";
    }
  }

  window.onload = function () {
    // get the preferred style from the cookie
    var preferredStyle = getCookie("preferredStyle");
  
    // if a preferred style was found, set the stylesheet accordingly
    if (preferredStyle) {
      var cssFile = document.getElementById("css-file");
      cssFile.setAttribute("href", preferredStyle + ".css");
    }
  };
  
  // helper function to get a cookie value by name
  function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      if (parts[0] == name) {
        return parts[1];
      }
    }
    return null;
  }
  

function toggleDropdown() {
    // show dropdown when language button clicked
    document.getElementByClass("dropdown-menu").classList.toggle("show");
}

