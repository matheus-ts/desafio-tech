const music = document.getElementById("bg-music");


const slides = [
    { img: "./assets/images/hello.gif", text: "eu te amo ✨" },

    { img: "./assets/images/image-2.jpg", text: "Hoje é o seu dia, mas eu sou quem se sente presenteado por ter você na minha vida. Cada momento ao seu lado é um beijo de sorte ✨" },
    // { img: "./assets/images/image-3.jpg", text: "Você merece todo amor e felicidade 💕" },
    { img: "./assets/images/image-4.jpg", text: "Hoje celebro mais um ano da sua vida, mas a verdade é que todos os dias contigo são dignos de festa. Você é o presente que o universo me deu" },
    { img: "./assets/images/image-5.jpg", text: "Você tem esse poder de transformar qualquer momento simples em algo mágico.  ❤️‍🔥" },
    { img: "./assets/images/image-7.jpg", text: "Me questiono como posso fazer caretas nas fotos e você sempre sair perfeita! 🎂" },
    { img: "./assets/images/image-8.jpg", text: "Estar perto das flores me mostram o quão delicado nosso relacionamento é te amo com tudo que sou! 🎂" },
    { img: "./assets/images/image-6.jpg", text: "Estar noivo de você é saber que encontrei meu lugar no mundo. É olhar pra frente e ver um futuro cheio de planos, risadas, viagens, cumplicidade… e muito amor! 💑" },
];

let currentIndex = 0;

function nextSlide() {
    music.play();

    if (currentIndex === slides.length - 1) {
        Swal.fire({
            title: '🎉 Parabéns! 🎉',
            text: 'Você chegou ao final e eu só quero dizer: eu te amo mais do que tudo ❤️',
            icon: 'success',
            confirmButtonText: 'Obrigado 💕',
            background: '#ffe4e1',
            color: '#d63384'
        }).then(() => {
            launchConfetti();
        });;
        return;
    }
    currentIndex = (currentIndex + 1) % slides.length;
    document.getElementById("slide-image").src = slides[currentIndex].img;
    document.getElementById("slide-text").textContent = slides[currentIndex].text;
}


function launchConfetti() {
    const duration = 3 * 1000; // 3 segundos
    const end = Date.now() + duration;

    (function frame() {
        // Lado esquerdo
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        // Lado direito
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}