var container = document.getElementById("teste");
var button = document.getElementById("botao");

button.addEventListener("click", function() {

    var container = document.getElementById("teste");

    if(container.style.display === "none"){
        container.style.display = "block";
    } else{
        container.style.display = "none";
    }
});

console.log(teste)
console.log(button)
