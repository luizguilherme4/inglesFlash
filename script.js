function revelarResposta() {
    var resposta = document.querySelector("#answer");
  
    resposta.classList.toggle("blur");
  }
  
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
    var proximo = document.querySelector("#cardContainer");
  
    proximo.innerHTML = "";
  
    var cardDiv = document.createElement("div");
  
    cardDiv.classList.add("card", "animate__animated", "animate__backInUp");
  
    cardDiv.innerHTML = `<div class="card-question center gradiente">
    <h1 class="card-title">Termo: ${proximaPergunta.title}</h1>
  </div>
  
  <div id="answer" class="card-answer blur">
    <p>
      Tradução: ${proximaPergunta.description}
    </p>
  </div>`;
  
    proximo.appendChild(cardDiv);
  }
  
  function buscarInformacao() {
    var randomNum = Math.floor(Math.random() * perguntas.length);
  
    var perguntaAleatoria = perguntas[randomNum];
  
    proximaPergunta(perguntaAleatoria);
  }
  
  window.addEventListener("load", buscarInformacao);
  