
var chocolateRB = document.getElementById("chocolate");
var vanillaRB = document.getElementById("vanilla");
var strawberryRB = document.getElementById("strawberry");
var image = document.getElementById("ice-cream-pic");
var MandMCheckbox = document.getElementById("m&m");
var sprinklesCheckbox = document.getElementById("sprinkles");
var chocSprinklesCheckbox = document.getElementById("chocsprinkles");
document.getElementById("show-me").addEventListener("click", showPicture, false);
function showPicture () {
    if (chocolateRB.checked) {
        image.setAttribute("src", chocolateRB.value);
    } else if (vanillaRB.checked) {
        image.setAttribute("src", vanillaRB.value);
    } else if (strawberryRB.checked) {
        image.setAttribute("src", strawberryRB.value);
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--alltoppings.png");
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "strawberry_icecream--m&m+sprinkles.png");
        }
    }
}


//review ur order page
document.getElementById("review-order").addEventListener("click",function () {
    console.log("Works");
    location.href = "reviewpage.html";
})
var reviewOrder = document.getElementById("review-order");
console.log(reviewOrder);

