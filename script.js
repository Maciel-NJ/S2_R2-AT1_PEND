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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    
    const span = document.createElement("span");
    span.textContent = texto;

  
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("btn", "btn-danger", "btn-sm", "ms-2");


    checkbox.onchange = function () {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
};

    botaoRemover.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botaoRemover);

    lista.appendChild(li);

    input.value = "";

    mensagem.textContent = "Tarefa adicionada!";
    mensagem.className = "text-success fw-bold";
});