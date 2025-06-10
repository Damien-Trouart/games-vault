export default class GameCard {
    gctemplate;
    title;
    cover;
    checkbox;
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
        // console.log(this.title);
        this.cover = this.gctemplate.content.querySelector('.game-card-cover');
        this.checkbox = this.gctemplate.content.querySelector('.InVaultCheckbox');
    }
    ;
    /**
     *
     */
    async getGameCard() {
        const response = await fetch("./../games.json");
        if (response.ok) {
            const gamesData = await response.json();
            gamesData.forEach((gameData) => {
                console.log(gameData);
                this.title.textContent = gameData.name;
                this.cover.src = gameData.img;
                this.checkbox.checked = gameData.inVault;
            });
        }
    }
}
//     render(): HTMLElement {
//         const clone = template.content.cloneNode(true) as DocumentFragment;
//         this.title = clone.querySelector('.title') as HTMLHeadingElement;
//         this.imgElem = clone.querySelector('.cover') as HTMLImageElement;
//         this.btn = clone.querySelector('.add-to-vault-btn') as HTMLButtonElement;
//         this.title.textContent = this.name;
//         this.imgElem.src = this.img;
//         // ... etc.
//         // Retourne le fragment prêt à être inséré dans le DOM
//         return clone;
//     }
// }
