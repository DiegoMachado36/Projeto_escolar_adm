
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio até validar

    const nome = document.getElementById("contato-nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const feedback = document.getElementById("mensagemFeedback");

    // Validação do nome
    if (nome === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação da mensagem
    if (mensagem === "") {
        alert("Por favor, escreva sua mensagem.");
        return;
    }

    // Se tudo estiver certo
    alert("Mensagem enviada com sucesso!");
    feedback.innerText = "Sua mensagem foi enviada!";
    feedback.style.display = "block";

    // limpa o formulário
    document.getElementById("formContato").reset();
});

