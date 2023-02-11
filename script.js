// indicates whether styles1.css or styles2.css is being used
let sheetNumber = 1;

// lets page load and initialize before running
window.onload = function init() {
    // gets toggle button as object
    const btn = document.getElementById("btn");

    // runs when button is clicked
    btn.addEventListener("click", function (e) {
        // gets link of stylesheet currently being used
        stylesheet = document.getElementById("css-file");

        // if style1, sets to style2 and vice versa
        if (sheetNumber === 1) {
            stylesheet.href = "styles2.css"
            sheetNumber = 2;
        } else {
            stylesheet.href = "styles1.css"
            sheetNumber = 1;
        }
    });
};
