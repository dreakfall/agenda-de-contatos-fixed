const form = document.getElementById('form-add-contact');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
})

function adicionaLinhas() {
    const inputNomeContato = document.getElementById('nomeAdicionar');
    const inputTelefoneContato = document.getElementById('telefoneAdicionar');


    let linha = document.createElement('tr');
    linha.innerHTML = `
    <td>${inputNomeContato.value}</td>
    <td>${inputTelefoneContato.value}</td>
    `;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.appendChild(linha);

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}