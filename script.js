const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");


botao.addEventListener("click", function () {

    const texto = input.value;

    
    if (texto === "") {
        mensagem.textContent = "Tarefa vazia!";
        mensagem.className = "text-danger fw-bold";
        return;
    }

    const li = document.createElement("li");
    li.classList.add("list-group-item");

    
    li.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("btn", "btn-danger", "btn-sm", "ms-2");

    
    li.appendChild(botaoRemover);

   
    botaoRemover.addEventListener("click", function () {
        li.remove();
    });

  
    lista.appendChild(li);

  
    input.value = "";
  
    mensagem.textContent = "Tarefa adicionada!";
    mensagem.className = "text-success fw-bold";
});