export interface CompletionTime {
    main: number; //Main Story
    mainExtra: number; //Main Story & Side Quests
    completionist: number; //100% of the game
    average: number; //Global average
}

export interface Game {
    id: number;
    name: string; //Game title
    img: string; //Game cover
    description: string;
    inVault: boolean; //Is the game saved in the vault?
    metascore: number; //Metascore rating
    platforms: string[]; //Platforms the game is available on
    releaseDate: string;
    developer: string;
    publisher: string;
    tags: string[];
    completionTime: CompletionTime; //Completion time estimates (How Long to Beat)
    datesPlayed: string[]; //Dates when the game was played
    dateAdded: string; //Date when the game was added to the vault
    type: string; //Type of game (demo, full game, dlc, etc.)

}