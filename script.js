// Função de validação geral do formulário
function validarCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const petNome = document.getElementById("petNome").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const servico = document.querySelector("input[name='servico']:checked");
    const metodo = document.querySelector("input[name='metodo']:checked");

    if (!nome || !cpf || !email || !petNome || !data || !hora) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (!servico) {
        alert("Selecione um serviço (Banho ou Tosa).");
        return;
    }

    if (!metodo) {
        alert("Selecione um método (Tele-busca ou Entrega).");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    document.getElementById("formCadastro").reset();
}


// Função chamada ao clicar em um serviço
function escolherServico() {
    const servicoSelecionado = document.querySelector("input[name='servico']:checked").value;
    console.log("Serviço selecionado:", servicoSelecionado);
}

// Função chamada ao clicar em um método
function escolherMetodo() {
    const metodoSelecionado = document.querySelector("input[name='metodo']:checked").value;
    console.log("Método escolhido:", metodoSelecionado);
}
