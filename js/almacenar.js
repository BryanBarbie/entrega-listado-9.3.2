var button = document.getElementById("agregar")
var input = document.getElementById("item")
var container = document.getElementById("contenedor")
var buttonClean = document.getElementById("limpiar")

window.addEventListener("load", function() {
    if(localStorage.getItem("dataLocalStorage")) {
        container.innerHTML += `<p>${localStorage.getItem("dataLocalStorage")}</p>`;
    }
});

button.addEventListener("click", function(){
    const inputValue = input.value;
    localStorage.setItem("dataLocalStorage", inputValue);
    

    container.innerHTML += `<p> ${localStorage.getItem("dataLocalStorage")} </p>`;
    input.value = "";

});

buttonClean.addEventListener("click", function(){
    localStorage.removeItem("dataLocalStorage");
    container.innerhtml = "";
    location.reload();
});