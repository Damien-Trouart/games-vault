import { Game } from "./interface";

const APIkey = "10157fe8e09247149b210eb9c8e9ae62"
const urlAPI = `https://api.rawg.io/api/games?key=${APIkey}&tags=action&ordering=-rating&page_size=20`;




function mapAPItoGame(APIgame: any): Game {
    return {
        id: APIgame.id,
        name: APIgame.name,
        img: APIgame.background_image || "", 
        description: APIgame.description_raw || APIgame.description || "",
        inVault: false, 
        metascore: APIgame.metacritic || 0,
        platforms: APIgame.platforms ? APIgame.platforms.map((p: any) => p.platform.name) : [],
        releaseDate: APIgame.released || "",
        developer: APIgame.developers ? APIgame.developers.map((d: any) => d.name).join(", ") : "",
        publisher: APIgame.publishers ? APIgame.publishers.map((p: any) => p.name).join(", ") : "",
        tags: APIgame.tags ? APIgame.tags.map((t: any) => t.name) : [],
        completionTime: {
            main: 0,
            mainExtra: 0,
            completionist: 0,
            average: 0
        }, 
        datesPlayed: [],
        dateAdded: "",
        type: "game" 
    };
}

export async function getGamesData(){
    const testResponse: Response = await fetch(urlAPI)
    if(testResponse.ok){
        const testData = await testResponse.json();
        console.log(testData.results);
return testData.results.map((APIgame: any) => mapAPItoGame(APIgame));
    }
}

// getGamesData().then((games: Game[]) => {
//     console.log(games);
// });