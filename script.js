const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function() {

  
    const texto = input.value;


    const novoItem = document.createElement("li");

    novoItem.textContent = texto;
    novoItem.classList.add("list-group-item");

 
    lista.appendChild(novoItem);

});