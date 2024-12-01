document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 30,
        strings: [" ",
            "escrevi o que eu queria aqui", 

            " ",

            "Lorem ipsum dolor sit amet. Phasellus faucibus, eros. :O",

            " ",

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas leo vitae justo tincidunt eleifend. Duis hendrerit iaculis eros eu euismod. Suspendisse.",

            " ", 

            "Quisque gravida malesuada lacinia. Vivamus ultricies.,",

            "Mauris vehicula sapien ullamcorper libero facilisis, eu egestas urna.",
        
            " ",
            " ",
            " ",
            "EU TE AMO <3"],
        loop: false
    }).go()
})



// peguei aqui - https://www.mco2.com.br/artigos/como-fazer-o-efeito-de-jogar-confetes-com-javascript.html


document.getElementById("animate_confetti").addEventListener("click", () => {

	let params = {
		particleCount: 600, // Quantidade de confetes
		spread: 110, // O quanto eles se espalham
		startVelocity: 70, // Velocidade inicial
		origin: { x: 0, y: 0.5 }, // Posição inicial na tela
		angle: 45 // Ângulo em que os confetes serão lançados
	};

	// Joga confetes da esquerda pra direita
	confetti(params);

	// Joga confetes da direita para a esquerda
	params.origin.x = 1;
	params.angle = 135;
	confetti(params);

});


const beepBtn = document.querySelector('.beep-btn');
  const beepSound = document.getElementById('beep-sound');

  function playBeep() {
    beepSound.play();
  }

  beepBtn.addEventListener('click', playBeep);