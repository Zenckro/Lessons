function escopo () {
    const form = document.querySelector('.form');
    //const pessoas = []

    function EventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const resultado = document.getElementById(`resultado`);

        resultado.innerHTML = `<p>Nome: ${nome.value} ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
    }
    form.addEventListener('submit',EventoForm)
}
escopo();