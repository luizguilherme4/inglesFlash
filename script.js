function revelarResposta() {
    //seleciona a <div> com o  id "#resposta"
    var resposta = document.querySelector("#resposta");
  
    //liga e desliga a classe "blur"
    resposta.classList.toggle("blur");
  }
  
  //array com objetos
  var perguntas = [
    {
      title: "Apple",
      description: "Maçã"
    },
  
    {
      title: "Lonely",
      description: "Sozinho"
    },
  
    {
      title: "Great",
      description: "Ótimo"
    },
  
    {
      title: "Somebody",
      description: "Alguém"
    },
  
    {
      title: "Girlfriend",
      description: "Namorada"
    },
  
    {
      title: "Water",
      description: "Água"
    },
  
    {
      title: "Tomorrow",
      description: "Amanhã"
    },
  
    {
      title: "Rule",
      description: "Regra"
    },
  
    {
      title: "Work",
      description: "Trabalho"
    },
  
    {
      title: "Juice",
      description: "Suco"
    }
  ];
  
  function proximaPergunta(proximaPergunta) {
    //seleciona a <div> com o id "#cardContainer"
    var proximo = document.querySelector("#cardContainer");
  
    //esvazia o que está dentro da <div> com essa id
    proximo.innerHTML = "";
  
    //cria um elemento <div>
    var cardDiv = document.createElement("div");
  
    //add a classe "card" na <div> criada e as classes de animação
    cardDiv.classList.add("card", "animate__animated", "animate__backInRight");
  
    //coloca template dentro da <div>
    cardDiv.innerHTML = `<div class="card-pergunta centralizar gradiente">
    <h1 class="card-titulo">Termo: ${proximaPergunta.title}</h1>
  </div>
  
  <div id="resposta" class="card-resposta blur">
    <p>
      Tradução: ${proximaPergunta.description}
    </p>
  </div>`;
  
    //acrescenta a var cardDiv na <div> do id "#cardContainer"
    proximo.appendChild(cardDiv);
  }
  
  function buscarInformacao() {
    //variável com random number entre 0 e tamanho do array
    var randomNum = Math.floor(Math.random() * perguntas.length);
  
    //variável com elemento do array "perguntas" no index random
    var perguntaAleatoria = perguntas[randomNum];
  
    //passando a var perguntaAleatoria como parâmetro da function
    proximaPergunta(perguntaAleatoria);
  }
  
  //verifa se a page carregou e retorna a function
  window.addEventListener("load", buscarInformacao);
  