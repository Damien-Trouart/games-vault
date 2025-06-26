const resultsContainer = document.querySelector('.gameCardContainer');
const searchPropositionsContainer = document.querySelector('.propositionsContainer');
export default class GameCards {
    gcTemplate; // Small Game Card Template
    title; // Game title
    cover; // Game cover
    checkbox; // Is the game saved in the vault?
    gcContainer; // Container for the game cards cloned
    constructor(container) {
        this.gcContainer = container || null;
        this.gcTemplate = document.querySelector('#game-card-template');
        this.title = this.gcTemplate.content.querySelector('.gcTitle');
        this.cover = this.gcTemplate.content.querySelector('.gcImg');
        this.checkbox = this.gcTemplate.content.querySelector('.InVaultCheckbox');
    }
    /**
     * Fetch game data and fills the game card with the information.
     * @param filter Optional filter function to apply on the games data.
     * @param mode allow to add a class "card" or "proposition" depending what we want our card to look like.
     */
    async getGameCards(filter, mode = "card") {
        const response = await fetch("./../games.json");
        if (response.ok) {
            let gamesData = await response.json();
            // let gamesData: Game[] = await getGamesData();
            resultsContainer.innerHTML = "";
            searchPropositionsContainer.innerHTML = "";
            if (filter) {
                gamesData = gamesData.filter(filter);
            }
            gamesData.forEach((gameData) => {
                const clone = this.gcTemplate.content.cloneNode(true);
                // Récupère les éléments du clone
                const title = clone.querySelector('.gcTitle');
                const cover = clone.querySelector('.gcImg');
                const checkbox = clone.querySelector('.InVaultCheckbox');
                // Remplit les infos
                title.textContent = gameData.name;
                cover.src = gameData.img;
                checkbox.checked = gameData.inVault;
                console.log(title, cover, checkbox);
                this.gcContainer?.appendChild(clone);
                //ajout de classname selon le type de gc souhaité, proposition ou minigc
                if (mode === "card") {
                    this.gcContainer.classList.add("gameCardContainer");
                }
                else if (mode === "proposition") {
                    this.gcContainer.classList.add("propositionsContainer");
                }
            });
        }
    }
}
