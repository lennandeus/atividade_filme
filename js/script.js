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
function preencherInformacoesDoFilme() {
    
    document.getElementById("movie-title").textContent = "Kill Bill";
    document.getElementById("movie-year").textContent = "2004";
    document.getElementById("movie-genre").textContent = "Ação";
    document.getElementById("movie-director").textContent = "Quentin Tarantino";
}

// Chamar a função para preencher as informações do filme
preencherInformacoesDoFilme();