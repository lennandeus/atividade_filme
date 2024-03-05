let titulo = document.getElementById("tituloPagina");
console.log(titulo);

document.getElementById("meuParagrafo").textContent = "Olá Mundo"

document.getElementById("meuElemento").style.backgroundColor = "green";

function changeBackgroundColor() {
    // Gera uma cor aleatória em formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Muda a cor de fundo do body
    document.body.style.backgroundColor = randomColor;
}

// Criar o elemento div
var divCard = document.createElement('div');
divCard.className = 'card';

// Adicionar o conteúdo ao card
divCard.innerHTML = `
  <img src="img/Kill_Bill_poster.jpg" alt="Imagem do Filme">
  <h2>Kill Bill</h2>
  <p>A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento.</p>
  <p>Volumes: 2</p>
  <p>Gênero: Ação</p>
`;

// Adicionar o card ao corpo do documento
document.body.appendChild(divCard);

// Criar o elemento div
var divCard2 = document.createElement('div');
divCard2.className = 'card';

// Adicionar o conteúdo ao card
divCard2.innerHTML = `
  <img src="img/422873.webp" alt="Imagem da Série">
  <h2>Hora de Aventura</h2>
  <p>Finn vive grandes aventuras na terra de Ooo na companhia de seu melhor amigo, Jake. De viagens a reinos alucinantes a lutas contra vampiros, os dois estão prontos para enfrentar qualquer perigo.</p>
  <p>Temporadas: 10</p>
  <p>Gênero: Aventura / Animação</p>
`;

// Adicionar o card ao corpo do documento
document.body.appendChild(divCard2);