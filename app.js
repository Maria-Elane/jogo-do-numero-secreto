let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto){
 let campo = document.querySelector(tag)
 campo.innerHTML = texto;
 responsiveVoice.speak(texto,'Brazilian portuguese female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirNaTela('h1','Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();



function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobrio o número secreto com ${tentativas} ${palavraTentativas}`;
    if(chute == numeroSecreto){
        exibirNaTela('h1', 'Isso ai!');
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirNaTela('p', 'O número secreto é menor');
        } else{
            exibirNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

function numeroAleatorio(){
   let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeNumerosEscolidos = listaDeNumerosSorteados.length;
   if(quantidadeDeNumerosEscolidos == numeroLimite){
     listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolido)){
    return numeroAleatorio();
   } else{
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
        
   }
    
}

function limparCampo(){
    chute =document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}