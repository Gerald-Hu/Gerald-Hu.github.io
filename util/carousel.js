const greetings = ['Bonjour', 'Ciao', 'Hola', '你好', 'Hej', 'こんにちは', '안녕하세요', 'Hi'];
let index = 0;
const slide = async() => {
    const carousel = document.getElementById('hero--carousel');
    carousel.style.transition = 'opacity 4s';
    carousel.style.opacity = 0;
    await new Promise(r => setTimeout(r, 4000));
    carousel.style.opacity = 1;
    carousel.innerHTML = greetings[index] + '.';
    index = (index === greetings.length - 1) ? 0 : index + 1;
}

setTimeout(()=>{slide()},500);

setInterval(() => {
    slide();
}, 8000);
