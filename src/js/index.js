// OBEJETIVO - quando clicarmos na aba, temos que mostraso conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo d aba Anterior

// - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTMLAllCollection
// - passo 2 - dar um jeito de identificar o clique  no elemento aba
// - passo 3 - quando o usuário clicar, desmarcara aba selecionada
// - passo 4 - marcar a aba clicada como selecionada                    
// - passo 5 - esoconder o conteudo anterior
// - passo 6 - mostrar o conteudo da aba selecionada



// - passo 1 - dar um jeito de pegar os elementos  que representam as abas no HTML
// console.log(document.querySelectorAll(".aba"));
const abas = document.querySelectorAll(".aba");
// console.log(abas);

// - passo 2 - dar um jeito de identificar o clique no elemento aba
abas.forEach(aba => {

    aba.addEventListener("click", function() {

        if (aba.classList.contains("selecionada")){
         // console.log("nao clicou na aba");
          return
        }
        //  console.log("clicou na aba", aba);


        selecionarAba(aba)
        mostrarInformacao(aba)
    })
})
function selecionarAba(aba){

    // - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    // console.log(abaSelecionada);
    abaSelecionada.classList.remove("selecionada");

    // - passo 4 - marcar a aba clicada como selecionada
     aba.classList.add("selecionada");
}





function mostrarInformacao(aba){
    //  passo 5 - esoconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");


    // - passo 6 - mostrar o conteudo da aba selecionada    
    // console.log(aba.id);
    const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionada"); 
}