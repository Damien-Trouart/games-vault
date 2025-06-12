import GameCard from "./gameCardMini.js";
export default class Carousel {
    gameCarousel;
    gameCards;
    // private title: HTMLHeadingElement;
    constructor() {
        this.gameCarousel = document.createElement('div');
        this.gameCarousel.classList.add('game-carousel');
        this.gameCards = new GameCard();
        // Ajout des boutons de navigation
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        prevButton.classList.add('carousel-prev');
        nextButton.classList.add('carousel-next');
    }
}
