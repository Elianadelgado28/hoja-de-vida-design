function swapStyleSheet() {
    console.log("swapstylesheet")

    let mainSheet = document.getElementById("pagestyle").getAttribute("href");

    if (mainSheet == 'estilos.css') {
        document.getElementById("pagestyle").setAttribute("href", "estilos-dark.css");
    }
    else {
        document.getElementById("pagestyle").setAttribute("href", "estilos.css");
    }

}

function initate() {
    console.log("initiate");

    var style1 = document.getElementById("style_button");

    style1.onclick = function() { swapStyleSheet(); }
}

window.onload = initate;