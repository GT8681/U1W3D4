const arrayTombola = [];

const Tomb = document.getElementById("tombola");

for( let i = 0; i < 90; i++){
    arrayTombola.push([i]);
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("casella");
    
    const cellH3 = document.createElement("h3");
    cellH3.innerText = i + 1;

    cellDiv.appendChild(cellH3);
    Tomb.appendChild(cellDiv);
}
                   const estrai = document.getElementById("number");
                   let numeriEstratti = [];


                   estrai.onclick = function(e){
                   let num = Math.ceil(Math.random()*90);
                  const list = document.querySelectorAll(".casella");

                  console.log(num,list[num -1]);

                   const cellEstratta = list[num-1];
                 cellEstratta.classList.add("selezione");
       }

    

window.addEventListener("domContentLoaded", function(){





});