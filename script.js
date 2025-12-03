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
    const quantidadeNotas = 4;
    let nota_1 = document.getElementById('nota-1').valueAsNumber;
    let nota_2 = document.getElementById('nota-2').valueAsNumber;
    let nota_3 = document.getElementById('nota-3').valueAsNumber;
    let nota_4 = document.getElementById('nota-4').valueAsNumber;
    
    let validacaoNotas = (nota_1 >=0 && nota_1 <= 10) && (nota_2 >=0 && nota_2 <= 10) && (nota_3 >=0 && nota_3 <= 10) && (nota_4 >=0 && nota_4 <= 10);
    
    if(!validacaoNotas){
      alert("Você pode digitar uma nota de 0.0 a 10.0. Veja se existe algum campo vazio.");
    }else{
      let somaNotas = nota_1 + nota_2 + nota_3 + nota_4;
      let mediaNotas = somaNotas / quantidadeNotas;
      
      document.getElementById('principal-sub-area-1-3').style.display = 'block';
      
      let statusAprovado = mediaNotas >= 7.0 ? "Aprovado" : "Reprovado";
      
      
      let comunicadoStatusAprovado = "O aluno " + validacaoNome + ", matrícula " + validacaoMatricula + ", inscrito na disciplina " + validacaoDisciplina + ", obteve média " + mediaNotas.toFixed(1) + " e está " + statusAprovado + ".";
      
      document.getElementById('comprovante-resultado').innerHTML = comunicadoStatusAprovado;
      
      document.getElementById('comprovante-resultado-data').innerHTML = Date();
    }
    
}
