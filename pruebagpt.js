// Cuenta regresiva
const countdownDate = new Date("Feb 1, 2025 12:00:00").getTime();

const dayValue = document.getElementById("dayValue");
const hourValue = document.getElementById("hourValue");
const minuteValue = document.getElementById("minuteValue");
const secondValue = document.getElementById("secondValue");

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza los valores en la cuenta regresiva
    dayValue.innerHTML = days < 10 ? '0' + days : days; // Formato de dos dígitos
    hourValue.innerHTML = hours < 10 ? '0' + hours : hours;
    minuteValue.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondValue.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // Mensaje al finalizar la cuenta regresiva
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡Es hora de celebrar!";
    }
}, 1000);


// Carrusel
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementById("carousel").getElementsByTagName("img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
}

function moveSlide(n) {
    const slides = document.getElementById("carousel").getElementsByTagName("img");
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    if (slideIndex < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}