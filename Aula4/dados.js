const numero = Number(prompt(`Digite um número para ser analisado:`));
const numerotitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);

numerotitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada desse número é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado duas casas: ${numero.toFixed(2)}.</p>`;
