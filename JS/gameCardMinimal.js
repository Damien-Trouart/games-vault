export default class GameCard {
    gctemplate; // Small Game Card Template
    title; // Game title
    cover; // Game cover
    checkbox; // Is the game saved in the vault?
    constructor( /*public name:string, public img:string, public inVault:boolean*/) {
        this.gctemplate = document.getElementById("game-card-template");
        this.gctemplate.innerHTML = `
            <div class="game-card">
                <h2 class="game-card-title"></h2>
                <img class="game-card-cover"/>
                <label for="InVaultCheck" class="InVaultLabel"></label>
                <input type="checkbox" class="InVaultCheckbox" id="InVaultCheck"></input>
            </div>
        `;
        this.title = this.gctemplate.content.querySelector('.game-card-title');
        this.cover = this.gctemplate.content.querySelector('.game-card-cover');
        this.checkbox = this.gctemplate.content.querySelector('.InVaultCheckbox');
    }
    ;
    /**
     * Fetch game data and fills the game card
    */
    async getGameCard(filter) {
        const response = await fetch("./../games.json");
        if (response.ok) {
            const gamesData = await response.json();
            if (filter) {
                gamesData.filter(filter);
            }
            gamesData.forEach((gameData) => {
                console.log(gameData);
                this.title.textContent = gameData.name;
                this.cover.src = gameData.img;
                this.checkbox.checked = gameData.inVault;
                const clone = this.gctemplate.content.cloneNode(true);
                document.querySelectorAll('.gameCardContainer').forEach(container => {
                    container.appendChild(clone);
                });
            });
        }
    }
}
