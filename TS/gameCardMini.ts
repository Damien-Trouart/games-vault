import { Game, CompletionTime } from "./interface.js";
export default class GameCard {
    private gcTemplate: HTMLTemplateElement | null; // Small Game Card Template
    private title: HTMLHeadingElement | null; // Game title
    private cover: HTMLImageElement | null; // Game cover
    private checkbox: HTMLInputElement | null; // Is the game saved in the vault?
    private gcContainer: HTMLDivElement | null; // Container for the game cards cloned


    constructor(container?: HTMLDivElement | null) {
        this.gcContainer = container || null;
        this.gcTemplate = document.querySelector('#game-card-template');
        this.title = this.gcTemplate!.content.querySelector('.gcTitle');
        this.cover = this.gcTemplate!.content.querySelector('.gcImg');
        this.checkbox = this.gcTemplate!.content.querySelector('.InVaultCheckbox');
    }


    /**
     * Fetch game data and fills the game card with the information.
     * @param filter Optional filter function to apply on the games data.
     * 
     */
    async getGameCard(filter?: (game: Game) => boolean, mode: "card" | "proposition" = "card") {
        const response: Response = await fetch("./../games.json");
        if (response.ok) {
            let gamesData: Game[] = await response.json();

            if (filter) {
                gamesData = gamesData.filter(filter);
            }

            gamesData.forEach((gameData) => {
                const clone = this.gcTemplate!.content.cloneNode(true) as HTMLElement;

                // Récupère les éléments du clone
                const title = (clone.querySelector('.gcTitle') as HTMLHeadingElement);
                const cover = (clone.querySelector('.gcImg') as HTMLImageElement);
                const checkbox = (clone.querySelector('.InVaultCheckbox') as HTMLInputElement);

                // Remplit les infos
                title.textContent = gameData.name;
                cover.src = gameData.img;
                checkbox.checked = gameData.inVault;
                this.gcContainer?.appendChild(clone);

                //ajout de classname selon le type de gc souhaité, proposition ou minigc
                if (mode === "card") {
                    this.gcContainer!.classList.add("gameCardContainer");
                }
                else if (mode === "proposition") {
                    this.gcContainer!.classList.add("propositionsContainer");
                }
            });
        }
    }
}
