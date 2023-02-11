let sheetNumber = 1;
(function (window, document, undefined) {
    window.onload = init;
    function init() {
        const btn = document.getElementById("btn");
        btn.addEventListener("click", function (e) {
            stylesheet = document.head.getElementsByTagName("link")[0];
            if (sheetNumber === 1) {
                stylesheet.href = "styles2.css"
                sheetNumber = 2;
            } else {
                stylesheet.href = "styles1.css"
                sheetNumber = 1;
            }
        });
    }
})(window, document, undefined);