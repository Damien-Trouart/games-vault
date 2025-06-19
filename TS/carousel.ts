import GameCard from "./gameCardMini.js";
import { Game} from "./interface.js";


export default class Carousel {
    private gcCarousel: HTMLDivElement;
    private gcwrapper;
    private games: Game[];
    private currentIndex: number;

    constructor(carousel: HTMLDivElement, games:Game[]) {
        this.gcCarousel = carousel
        this.gcwrapper = new GameCard(this.gcCarousel)
        this.gcwrapper.getGameCard((game: Game) => true)
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
