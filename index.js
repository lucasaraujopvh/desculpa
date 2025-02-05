 // Função para o primeiro clique em "Sim"
 function sim() {
    alert("Eu te amo ❤");
    adicionarImagem();
    const imgContainer = document.getElementById('imageContainer');
    const img = document.getElementById('loveImage');
    const content = document.getElementById('content');
    const finalMessage = document.getElementById('finalMessage');
    
    // Define a imagem desejada utilizando o caminho relativo
    img.src = "./casal.jpg"; // Certifique-se de que 'casal.jpg' está na mesma pasta
    // Inicia a animação da imagem fixa
    imgContainer.style.left = "100%";
    
    // Após 6 segundos, esconde a tela inicial e mostra a mensagem final
    setTimeout(() => {
      imgContainer.style.display = 'none';
      content.style.display = 'none';
      finalMessage.style.display = 'block';
    }, 6000);
  }

  // Função para redirecionar ao clicar no "Sim" da mensagem final
  function finalSim() {
    alert("pretinha ❤");
    // Redireciona para o vídeo (substitua o link se necessário)
    window.location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
  }

  // Função para adicionar a imagem dinâmica que se move da esquerda para a direita
  function adicionarImagem() {
    const novaImagem = document.createElement("img");
    novaImagem.src = "./casal.jpg"; // Utilize o caminho relativo para 'casal.jpg'
    novaImagem.classList.add("moving-image");
    document.body.appendChild(novaImagem);
    
    // Após um breve delay, inicia a animação movendo a imagem para a direita
    setTimeout(() => {
      novaImagem.style.left = "100%";
    }, 100);
    
    // Remove a imagem após a animação (6.2 segundos)
    setTimeout(() => {
      novaImagem.remove();
    }, 6200);
  }

  // Função que reposiciona o botão "Não" ao passar o mouse
  function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
  }

  // Função auxiliar para gerar posições aleatórias
  function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
  }