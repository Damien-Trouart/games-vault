const APIkey = "10157fe8e09247149b210eb9c8e9ae62";
const urlAPI = `https://api.rawg.io/api/games?key=${APIkey}&page=10&page_size=10`;
function mapAPIToGame(APIgame) {
    return {
        id: APIgame.id,
        name: APIgame.name,
        img: APIgame.background_image || "", // RAWG: background_image
        description: APIgame.description_raw || APIgame.description || "",
        inVault: false, // valeur par défaut, à adapter selon ta logique
        metascore: APIgame.metacritic || 0,
        platforms: APIgame.platforms ? APIgame.platforms.map((p) => p.platform.name) : [],
        releaseDate: APIgame.released || "",
        developer: APIgame.developers ? APIgame.developers.map((d) => d.name).join(", ") : "",
        publisher: APIgame.publishers ? APIgame.publishers.map((p) => p.name).join(", ") : "",
        tags: APIgame.tags ? APIgame.tags.map((t) => t.name) : [],
        completionTime: {
            main: 0,
            mainExtra: 0,
            completionist: 0,
            average: 0
        }, // RAWG ne fournit pas ces infos, tu peux les compléter plus tard
        datesPlayed: [],
        dateAdded: "",
        type: "game" // ou adapte selon le champ RAWG si besoin
    };
}
async function getGamesData() {
    const testResponse = await fetch(urlAPI);
    if (testResponse.ok) {
        const testData = await testResponse.json();
        console.log(testData.results);
        return testData.results.map((APIgame) => mapAPIToGame(APIgame));
    }
}
getGamesData();
export {};
