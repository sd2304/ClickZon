
const words = ['TRENDY', 'CHIC', 'FAVORITE'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isTransitioning = false;

function showNextLetter() {
    const highlightedWord = document.getElementById('highlighted-word');
    const currentWord = words[currentWordIndex];
    
    if (currentCharIndex >= currentWord.length) {
        if (!isTransitioning) {
            isTransitioning = true;
            setTimeout(startNextWordTransition, 1000); // Pause for 1000ms before transitioning to the next word
        }
        return;
    }

    const displayedText = currentWord.slice(0, currentCharIndex + 1);
    highlightedWord.textContent = displayedText;
    highlightedWord.style.color = 'red';
    
    currentCharIndex++;

    setTimeout(showNextLetter, 100); // Show next letter after 100ms
}

function startNextWordTransition() {
    isTransitioning = false;
    currentCharIndex = 0;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showNextLetter();
}

// Start the word rotation on page load
window.addEventListener('load', () => {
    showNextLetter();
});
