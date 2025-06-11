interface CompletionTime{
    main: number; //Main Story
    mainExtra: number; //Main Story & Side Quests
    completionist: number; //100% of the game
    average: number; //Global average
}

interface Game{
    id:number;
    name:string; //Game title
    img:string; //Game cover
    description:string; 
    inVault:boolean; //Is the game saved in the vault?
    metascore:number; //Metascore rating
    platforms:string[]; 
    releaseDate:string; 
    developer:string; 
    publisher:string; 
    genres:string[]; 
    completionTime: CompletionTime; //Completion time estimates (How Long to Beat)
    datesPlayed:string[]; //Dates when the game was played
}


export default class GameCard{
    private gctemplate:HTMLTemplateElement|null; // Small Game Card Template
    private title: HTMLHeadingElement|null; // Game title
    private cover: HTMLImageElement|null; // Game cover
    private checkbox: HTMLInputElement|null; // Is the game saved in the vault?


    constructor( /*public name:string, public img:string, public inVault:boolean*/){
        this.gctemplate = document.getElementById("game-card-template") as HTMLTemplateElement;
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
    };
    
    
    /**
     * Fetch game data and fills the game card
    */
    async getGameCard(filter?:(game: Game) => boolean) {
        const response: Response = await fetch ("./../games.json");
        if (response.ok){
            const gamesData:Game[] = await response.json();

            if (filter) {
                gamesData.filter(filter);
            }

            gamesData.forEach((gameData) => {
                console.log(gameData);
                this.title!.textContent = gameData.name;
                this.cover!.src = gameData.img;
                this.checkbox!.checked = gameData.inVault;
                const clone:Node = this.gctemplate!.content.cloneNode(true);
                document.querySelectorAll('.gameCardContainer').forEach(container => {
                    container.appendChild(clone);
                });
            });
        }
    }
}
