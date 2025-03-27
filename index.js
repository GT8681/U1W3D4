const arrayTombola = [];

const Tomb = document.getElementById("tombola");

for( let i = 0; i < 90; i++){
    arrayTombola.push([]);
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("casella");
    
    const cellH3 = document.createElement("h3");
    cellH3.innerText = i + 1;

    cellDiv.appendChild(cellH3);
    Tomb.appendChild(cellDiv);

    
const generateButton = document.getElementById("number");

generateButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 90) + 1;
    alert(`Numero generato: ${randomNumber}`);
});


}














window.addEventListener("domContentLoaded", function(){






});