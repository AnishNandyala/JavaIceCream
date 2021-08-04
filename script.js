/// button to get to order page

document.getElementById("place-order").addEventListener("click",function () {
    console.log("Works");
    location.href = "orderpage.html";
})
var placeOrder = document.getElementById("place-order");
console.log(placeOrder);


/// button to get to review page
document.getElementById("review-order").addEventListener("click",function () {
    console.log("Works");
    location.href = "reviewpage.html";
})
var reviewOrder = document.getElementById("review-order");
console.log(reviewOrder);