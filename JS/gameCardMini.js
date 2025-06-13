export default class GameCard {
    gcTemplate; // Small Game Card Template
    title; // Game title
    cover; // Game cover
    checkbox; // Is the game saved in the vault?
    gcContainer; // Container for the game cards cloned
    constructor(container) {
        this.gcTemplate = document.querySelector('#game-card-template');
        if (this.gcTemplate) {
            this.gcTemplate.innerHTML = `
        <div class="game-card">
            <h2 class="game-card-title"></h2>
            <img class="game-card-cover"/>
            <label for="InVaultCheck" class="InVaultLabel"></label>
            <input type="checkbox" class="InVaultCheckbox" id="InVaultCheck"></input>
        </div>
    `;
        }
        this.title = this.gcTemplate.content.querySelector('.game-card-title');
        this.cover = this.gcTemplate.content.querySelector('.game-card-cover');
        this.checkbox = this.gcTemplate.content.querySelector('.InVaultCheckbox');
        this.gcContainer = container || null;
    }
    /**
     * Fetch game data and fills the game card with the information.
     * @param filter Optional filter function to apply on the games data.
     *
     */
    async getGameCard(filter) {
        const response = await fetch("./../games.json");
        if (response.ok) {
            let gamesData = await response.json();
            if (filter) {
                gamesData = gamesData.filter(filter);
            }
            gamesData.forEach((gameData) => {
                console.log(gameData);
                this.title.textContent = gameData.name;
                this.cover.src = gameData.img;
                this.checkbox.checked = gameData.inVault;
                const clone = this.gcTemplate.content.cloneNode(true);
                this.gcContainer?.appendChild(clone);
                // document.body.appendChild(clone); 
            });
        }
    }
}
