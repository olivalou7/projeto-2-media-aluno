/*

    ` `

*/
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
    let nota_2 = document.getElementById('nota-1').valueAsNumber;
    let nota_3 = document.getElementById('nota-1').valueAsNumber;
    let nota_4 = document.getElementById('nota-1').valueAsNumber;
    
    let validacaoNotas = (isNaN(nota_1) || isNaN(nota_2) || isNaN(nota_3) || isNaN(nota_4));
  if(validacaoNotas){
    alert("Informe todas as notas");
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
