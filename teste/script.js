var button = document.getElementById("action-btn");

button.addEventListener("click", function() {

    var container = document.getElementById("container");

    if(container.style.display === "none"){
        container.style.display = "block";
    } else{
        container.style.display = "none";
    }
});

var buttonB = document.getElementById("action-btn-b");

buttonB.addEventListener("click", function() {

    var containerB = document.getElementById("container-b");

    containerB.classList.toggle("hide");

});