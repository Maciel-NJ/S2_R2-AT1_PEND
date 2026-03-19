const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");


botao.addEventListener("click", function() {

    
    const nomeDigitado = input.value;

    
    mensagem.textContent = "Você digitou o nome: " + nomeDigitado;

});