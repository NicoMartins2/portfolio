const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const text1 = "Nícolas Rodrigues Martins";
const text2 = "Desenvolvedor Web"; 
const arrayTitle = text1.split("");
const arraySubTitle = text2.split("");
let timer;

// função responsável por adicionar caractere por caractere ao item de texto do título e subtítulo. Dando efeito de escrita

function textDigit(arr, txt){
    if(arr.length > 0){
        txt.innerHTML += arr.shift();
        timer = setTimeout(() => textDigit(arr, txt), 100);
    }else{
        clearTimeout(timer);
    }
}

textDigit(arrayTitle, title); // usar os parâmetros facilita, assim basta substituir as variaveis do titulo pelo subtitulo, já que a função é a mesma

setTimeout(() => textDigit(arraySubTitle, subtitle), text1.length * 100 + 500); // adiciona tempo no timer quando a função é executada para o subtítulo