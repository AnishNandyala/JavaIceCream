
var chocolateRB = document.getElementById("chocolate");
var vanillaRB = document.getElementById("vanilla");
var strawberryRB = document.getElementById("strawberry");
var image = document.getElementById("ice-cream-pic");
document.getElementById("show-me").addEventListener("click", showPicture, false);
function showPicture () {
    if (chocolateRB.checked) {
        image.setAttribute("src", chocolateRB.value);
    } else if (vanillaRB.checked) {
        image.setAttribute("src", vanillaRB.value);
    } else if (strawberryRB.checked) {
        image.setAttribute("src", strawberryRB.value);
    }
}

var mAndMCheckbox = document.getElementById("m&m");
var sprinklesCheckbox = document.getElementById("sprinkles");
var chocSprinklesCheckbox = document.getElementById("chocsprinkles");
