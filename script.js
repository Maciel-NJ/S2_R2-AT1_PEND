const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {

    const texto = input.value;

    
    if (texto === "") {
        mensagem.textContent = "Tarefa vazia!";
        mensagem.className = "text-danger fw-bold";
    } else {

        
        const novoItem = document.createElement("li");
        novoItem.textContent = texto;
        novoItem.classList.add("list-group-item");

        lista.appendChild(novoItem);

        input.value = "";

      
        mensagem.textContent = "tarefa adicionada com suceso!";
        mensagem.className = "text-success fw-bold";
    }

});