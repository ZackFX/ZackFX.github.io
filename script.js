function greet() {
    window.alert("Hello everyone");
}

function init() {
    document.getElementById("first").src = "flower2.png"; 
    // document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    // document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src="flower2.png";
    images[3].src="flower2.png";
    document.getElementById("task3").innerHTML = "<div><p>Your are great!</p></div>";


}