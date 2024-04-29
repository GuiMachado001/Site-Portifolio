
//ScrollOne

window.addEventListener('DOMContentLoaded', (event) => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal('#home', { duration: 2000 });
    

    sr.reveal('.containerBox', {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 3000,
        reset: false
    });

    sr.reveal('.containerBoxIcons', {
        rotate: { x: 100, y: 110, z: 0 },
        duration: 1000,
        reset: false
    });

    sr.reveal('.meusCursos', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false
    });
    
        sr.reveal('.containerCard1', {
            distance: '3000px',
            origin: 'left',
            duration: 1000,
            delay: 100,
            reset: false
        });
    sr.reveal('.containerCard2', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 300,
        reset: false
    });
    sr.reveal('.containerCard3', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 500,
        reset: false
    });
    sr.reveal('.containerCard4', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 700,
        reset: false
    });


    sr.reveal('.containerCard5', {
        distance: '3000px',
        origin: 'right',
        duration: 1000,
        delay: 100,
        reset: false
    });
    sr.reveal('.containerCard6', {
        distance: '3000px',
        origin: 'right',
        duration: 1000,
        delay: 300,
        reset: false
    });
    sr.reveal('.containerCard7', {
        distance: '3000px',
        origin: 'right',
        duration: 1000,
        delay: 500,
        reset: false
    });
    sr.reveal('.containerCard8', {
        distance: '3000px',
        origin: 'right',
        duration: 1000,
        delay: 700,
        reset: false
    });

});



//Background

const chk = document.getElementById("chk");

const containerHeaderID = document.getElementById("containerHeaderID");

const boxRGB = document.querySelector('.boxRGB');
const spnDownloadCV = document.querySelector('.spnDownloadCV');
const name3 = document.querySelector('.titleApresentação');
const lbl = document.querySelector('.lbl');
const ball = document.querySelector('.ball');


chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
    containerHeaderID.classList.toggle('light');

    
    name1.classList.toggle('light');
    name3.classList.toggle('light');
    boxRGB.classList.toggle('light');
    spnDownloadCV.classList.toggle('light');
    lbl.classList.toggle('light');
    ball.classList.toggle('light');
});



const initTypingAnimation = () => {
    const titleApresentação = document.querySelector('.titleApresentação h1')
    const span = document.querySelector('.titleApresentação span')
    const paragraph = document.querySelector('.titleApresentação p')

    const typingAnimation = (element, text, delay) => {
        setTimeout(() => {
            element.innerHTML = '' // Limpa o conteúdo atual
            const textToArray = text.split('') // Converte o texto em um array de caracteres

            // Itera sobre o array de caracteres e exibe-os com um atraso
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })
        }, delay)
    }

    // Inicia a animação para cada elemento com seu respectivo texto e atraso
    typingAnimation(titleApresentação, 'Olá, eu sou o ', 0)
    typingAnimation(span, 'Guilherme Machado', 1600)
    typingAnimation(paragraph, 'Desenvolvedor Front-End', 3700)
}

initTypingAnimation() // Chama a função para iniciar a animação
