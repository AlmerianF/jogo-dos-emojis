
const emojis = [
    
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐒",
    "🐒",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",

];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1); /*? é um if ternário*/

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement /*criando dinamicamente um elemento div no html*/
    ("div");
    box.className = "item"; /*Coloca a classe item no elemento.*/
    box.innerHTML = shuffleEmojis[i]/*Coloca o que vai estar dentro do elemento div. [i] é a posição que o elemento vai estar. */
    box.onclick = handleClick; /*Toda vez que eu clicar vou chamar a função handleClick*/
    /*Colocando esse elemento dentro da div game*/
    document.querySelector(".game").appendChild(box); /*appendChild Coloca o filho dentro do pai*/
}

/*handleClick Verifica se tenho menos de duas cartas abertas e guarda as cartas abertas em openCards para avaliar se são parecidas.*/

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen"); /*O elemento que eu clicar vou adicionar a classe boxOpen no  elemento*/
        openCards.push(this); /*Assim eu guardo essa caixa aberta no vetor openCards*/
    }

    /*Caso caia no if abaixo, a função checkMatch entra em ação e verifica se está ok, caso não retorna para o início.*/
    if(openCards.length == 2) {
        setTimeout(checkMatch, 500); /*O setTimeout vai fazer com que a função demore 500 milisegundos*/
    }

}

function checkMatch() {
    /*O if abaixo compara o conteúdo html da classe oppenCards na posição 1 com o da posição 2 do array criado no openCards.*/
    /*Se for idêntico eles terão a classe boxMatch adicionada.*/
    /*Caso não seja, a classe boxOpen é removida e o array volta a ficar vazio*/
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu! Pressione reset para recomeçar!")
    } /*Confere se todo os animais que estão em emojis foram selecionados.*/
}   
