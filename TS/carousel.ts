import GameCard from "./gameCardMini.js";
import { Game, CompletionTime } from "./interface.js";


export default class Carousel {
    private gcCarousel: HTMLDivElement;
    // private gcwrapper: HTMLHeadingElement;
    private gameCards: GameCard[];
    private currentIndex: number;

    constructor() {
        this.gameCards = [];
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
