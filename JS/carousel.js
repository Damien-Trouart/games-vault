import GameCard from "./gameCardMini.js";
export default class Carousel {
    gcCarousel;
    gcwrapper;
    games;
    currentIndex;
    constructor(carousel, games) {
        this.gcCarousel = carousel;
        this.gcwrapper = new GameCard(this.gcCarousel);
        this.gcwrapper.getGameCard((game) => true);
        this.games = games;
        this.currentIndex = 0;
        this.gcCarousel = document.createElement('div');
        this.gcCarousel.classList.add('game-carousel');
        // Ajout des boutons de navigation
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        prevButton.classList.add('carousel-prev');
        nextButton.classList.add('carousel-next');
        prevButton.textContent = '←';
        nextButton.textContent = '→';
    }
}
