let validacaoNome;
let validacaoMatricula;
let validacaoDisciplina;

function confirmacaoInformacoesAluno(){
    validacaoNome = document.getElementById('nome-aluno').value;
    validacaoMatricula = document.getElementById('matricula-aluno').value;
    validacaoDisciplina = document.getElementById('disciplina-aluno').value;
    let validacaoInformacoesAluno = (validacaoNome != "") && (validacaoMatricula != "") && (validacaoDisciplina != "");
  
  if(validacaoInformacoesAluno){
      document.getElementById('principal-sub-area-1-2').style.display = 'block';
     /* document.getElementById('principal-sub-area-1-3').style.display = 'block';*/
  }else{
    alert("Preencha todos os campos");
  }
}

function resultado(){
    
    receber_notas();

    let validacaoNotas = (nota_1 >=0 && nota_1 <= 10) && (nota_2 >=0 && nota_2 <= 10) && (nota_3 >=0 && nota_3 <= 10) && (nota_4 >=0 && nota_4 <= 10);
    
    if(!validacaoNotas){
      alert("Você pode digitar uma nota de 0.0 a 10.0. Veja se existe algum campo vazio.");
    }else{
      let mediaAluno = processar_media();
      
      mensagem_aprovacao(mediaAluno);
    }
    
}

const quantidadeNotas = 4;

let nota_1;
let nota_2;
let nota_3;
let nota_4;

function receber_notas() {
    nota_1 = document.getElementById('nota-1').valueAsNumber;
    nota_2 = document.getElementById('nota-2').valueAsNumber;
    nota_3 = document.getElementById('nota-3').valueAsNumber;
    nota_4 = document.getElementById('nota-4').valueAsNumber;
}

function processar_media() {
    return (nota_1 + nota_2 + nota_3 + nota_4) / quantidadeNotas;
}

function mensagem_aprovacao(mediaAluno) {
    document.getElementById('principal-sub-area-1-3').style.display = 'block';
    
    let statusAprovado = mediaAluno >= 7.0 ? "aprovado" : "reprovado";
    
    let comunicadoStatusAprovado = `O aluno ${validacaoNome}, matrícula ${validacaoMatricula}, inscrito na disciplina ${validacaoDisciplina}, obteve média ${mediaAluno} e está ${statusAprovado}.`
    
    exibir_mensagem_na_tela("comprovante-resultado",comunicadoStatusAprovado);
    
    document.getElementById('comprovante-resultado-data').innerHTML = Date();
}

function exibir_mensagem_na_tela(elemento, mensagem) {
  let mensagem_para_usuario = document.getElementById(elemento);
  mensagem_para_usuario.innerHTML = mensagem;
} 

function reiniciar_operacao() {
  document.querySelector('#nome-aluno').value = "";
  document.querySelector('#matricula-aluno').value = "";
  document.querySelector('#disciplina-aluno').value = "";

  document.querySelector('#nota-1').value = "";
  document.querySelector('#nota-2').value = "";
  document.querySelector('#nota-3').value = "";
  document.querySelector('#nota-4').value = "";

  document.querySelector('#comprovante-resultado').innerHTML = "";
  document.querySelector('#comprovante-resultado-data').innerHTML = "";

  document.getElementById('principal-sub-area-1-2').style.display = 'none';
  document.getElementById('principal-sub-area-1-3').style.display = 'none';


}


