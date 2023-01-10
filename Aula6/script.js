function escopo () {
    const form = document.querySelector('.form');
    const resultado = document.getElementById(`resultado`);

    const pessoas = [];
    
    function EventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}   Peso: ${peso.value}  Altura: ${altura.value}</p>`;
    }
    form.addEventListener('submit',EventoForm)
}
escopo();