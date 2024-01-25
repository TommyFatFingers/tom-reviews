// scripts.js

function toggleDiv(scoreId) {
    var e = document.getElementById(scoreId);
    if (!e)
        return true;
    if (getStyle(e, "display") == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return true;
}

function getStyle(el, name) {
    if (document.defaultView && document.defaultView.getComputedStyle) {
        var style = document.defaultView.getComputedStyle(el, null);
        if (style)
            return style[name];
    } else if (el.currentStyle)
        return el.currentStyle[name];

    return null;
}
