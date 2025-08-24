// Pronalazi element za bio tekst
const bioTextElement = document.querySelector('.bio-text');

// Originalni tekst koji treba da bude otkucan
const fullText = bioTextElement.textContent;

// Prazni originalni tekst dok ne počnemo sa kucanjem
bioTextElement.textContent = ''; 

// Inicijalizuje varijablu za praćenje pozicije kucanja
let index = 0;

// Funkcija za tipkanje
function typeWriter() {
    if (index < fullText.length) {
        // Dodaje jedno slovo na kraju teksta
        bioTextElement.textContent += fullText.charAt(index);
        index++;
        
        // Zakači sledeći karakter sa pauzom od 25ms
        setTimeout(typeWriter, 25);
    }
}

// Poziva funkciju da pokrene tipkanje
typeWriter();
