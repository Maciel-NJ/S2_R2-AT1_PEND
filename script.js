const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");


mensagem.textContent = "Clique no botão para mudar este texto.";


botao.addEventListener("click", function() {
mensagem.textContent = "Texto altreado com JavaScript!";

});
