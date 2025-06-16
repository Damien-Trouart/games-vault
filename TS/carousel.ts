import GameCard from "./gameCardMini.js";
import {Game, CompletionTime} from "./interface.js";


export default class Carousel {
    private gameCarousel: HTMLDivElement;
    private gameCards: GameCard;
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
// import GameCard from "./gameCardMini.js";
// import { Game } from "./interface.js";

// interface CarouselOptions {
//     slidesToShow?: number;
//     autoplay?: boolean;
//     autoplaySpeed?: number;
//     loop?: boolean;
// }

// export default class Carousel {
//     private container: HTMLDivElement;
//     private wrapper: HTMLDivElement;
//     private slides: GameCard[];
//     private currentIndex: number;
//     private options: CarouselOptions;
    
//     constructor(containerId: string, games: Game[], options: CarouselOptions = {}) {
//         // Options par défaut
//         this.options = {
//             slidesToShow: 3,
//             autoplay: false,
//             autoplaySpeed: 3000,
//             loop: true,
//             ...options
//         };
        
//         this.slides = [];
//         this.currentIndex = 0;
        
//         // Création du conteneur principal
//         this.container = document.createElement('div');
//         this.container.classList.add('carousel-container');
        
//         // Création du wrapper pour les slides
//         this.wrapper = document.createElement('div');
//         this.wrapper.classList.add('carousel-wrapper');
        
//         // Création des boutons de navigation
//         const prevButton = document.createElement('button');
//         const nextButton = document.createElement('button');
//         prevButton.classList.add('carousel-prev');
//         nextButton.classList.add('carousel-next');
//         prevButton.innerHTML = '&#10094;'; // Flèche gauche
//         nextButton.innerHTML = '&#10095;'; // Flèche droite
        
//         // Ajout des écouteurs d'événements
//         prevButton.addEventListener('click', () => this.prev());
//         nextButton.addEventListener('click', () => this.next());
        
//         // Création des slides
//         this.createSlides(games);
        
//         // Construction du carousel
//         this.container.appendChild(prevButton);
//         this.container.appendChild(this.wrapper);
//         this.container.appendChild(nextButton);
        
//         // Ajout au DOM
//         const targetContainer = document.getElementById(containerId);
//         if (targetContainer) {
//             targetContainer.appendChild(this.container);
//         }
        
//         // Démarrage de l'autoplay si activé
//         if (this.options.autoplay) {
//             this.startAutoplay();
//         }
//     }
    
//     private createSlides(games: Game[]): void {
//         games.forEach(game => {
//             const card = new GameCard(game);
//             this.slides.push(card);
//             this.wrapper.appendChild(card.getElement());
//         });
//     }
    
//     public next(): void {
//         if (this.currentIndex < this.slides.length - this.options.slidesToShow!) {
//             this.currentIndex++;
//             this.updatePosition();
//         } else if (this.options.loop) {
//             this.currentIndex = 0;
//             this.updatePosition();
//         }
//     }
    
//     public prev(): void {
//         if (this.currentIndex > 0) {
//             this.currentIndex--;
//             this.updatePosition();
//         } else if (this.options.loop) {
//             this.currentIndex = this.slides.length - this.options.slidesToShow!;
//             this.updatePosition();
//         }
//     }
    
//     private updatePosition(): void {
//         const offset = -this.currentIndex * (100 / this.options.slidesToShow!);
//         this.wrapper.style.transform = `translateX(${offset}%)`;
//     }
    
//     private startAutoplay(): void {
//         setInterval(() => {
//             this.next();
//         }, this.options.autoplaySpeed);
//     }
    
//     public destroy(): void {
//         // Nettoyage des événements et suppression du carousel
//         this.container.remove();
//     }
// }