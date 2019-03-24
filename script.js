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
    
    let image = document.createElement("img");
    image.src="flower2.png";
    document.getElementById("new_element").appendChild(image);

    let spans = document.getElementById("rainbow").toARRAY();
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

}