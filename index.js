const tombolone = document.getElementsByClassName("tombolone") //apro il contenitore
for (let i = 1; i <= 76; i++) {
   const cella = document.createElement("div") 
   cella.classList.add("cella")
   cella.innerText = i;
   tombolone.appendChild(cella)
}




for (let j = 1; j <= 76; j++) {
  const numero = document.createElement("div");
  numero.classList.add("numero");
  numero.innerText = j;
  cella.appendChild(numero);
}


