
var chocolateRB = document.getElementById("chocolate");
var vanillaRB = document.getElementById("vanilla");
var strawberryRB = document.getElementById("strawberry");
var image = document.getElementById("ice-cream-pic");
var MandMCheckbox = document.getElementById("m&m");
var sprinklesCheckbox = document.getElementById("sprinkles");
var chocSprinklesCheckbox = document.getElementById("chocsprinkles");
var countToppings = 0;
var flavor = document.getElementById("flavor");
var price = document.getElementById("price");
document.getElementById("show-me").addEventListener("click", showPicture, false);
function showPicture () {
    if (chocolateRB.checked) {
        image.setAttribute("src", chocolateRB.value);
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--alltoppings.png");
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m+sprinkles.png");
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m+chocsprinkles.png");
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--sprinkles+chocsprinkles.png");
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m.png");
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--sprinkles.png");
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--chocsprinkles.png");
        }
    } else if (vanillaRB.checked) {
        image.setAttribute("src", vanillaRB.value);
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--alltoppings.png");
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m+sprinkles.png");
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m+chocsprinkles.png");
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--sprinkles+chocsprinkles.png");
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m.png");
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--sprinkles.png");
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--chocsprinkles.png");
        }
    } else if (strawberryRB.checked) {
        image.setAttribute("src", strawberryRB.value);
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--alltoppings.png");
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m+sprinkles.png");
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m+chocsprinkles.png");
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--sprinkles+chocsprinkles.png");
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m.png");
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--sprinkles.png");
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--chocsprinkles.png");
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

