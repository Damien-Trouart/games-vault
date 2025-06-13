import GameCard from "./gameCardMini.js";
const headerSearchInput = document.querySelector(".headerSearch__input");
const headerSearchResultsContainer = document.querySelector('.gameCardContainer');
const testGameCard = new GameCard(headerSearchResultsContainer);
headerSearchInput?.addEventListener("input", () => {
    //TODO problème ici, même un console log ne fonctionne pas
    // console.log("Input event triggered");
    headerSearchResultsContainer.innerHTML = ""; // Clear previous results
    const headerSearchValueCleaned = headerSearchInput.value.trim().toLowerCase();
    // console.log(headerSearchValueCleaned); // Log the cleaned search input
    if (headerSearchValueCleaned.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        testGameCard.getGameCard((game) => game.name.toLowerCase().trim().includes(headerSearchValueCleaned));
    }
});
console.log(headerSearchInput?.value);
// const testGameCard = new GameCard();
// testGameCard.getGameCard((game)=>game.name.toLowerCase().includes(`witcher`.toLowerCase()));
// const recentlyPlayed = new Carousel();
// const recentlyPlayed = new GameCard();
// recentlyPlayed.getGameCard((game)=>{
//     if(!game.inVault){
//         return false;
//     }
//     else{
//         const today = new Date();
//         const todayNumber = today.getDate();
//         const minus14Days = today.setDate(todayNumber - 14); // Deux semaines en arrière
//         // const recent = (date) => {date >= minus14Days};
//         // return game.datesPlayed.some(recent)
//         return true; //!à effacer
//     }
// });
// const recentlyPlayedFilter = (game) => {
//     if (!game.inVault) return false;  // D'abord vérifier si le jeu est dans le vault
//     const twoWeeksAgo = new Date();
//     twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
//     return game.playDates.some(date => new Date(date) >= twoWeeksAgo);
// };
// const notPlayedRecentlyFilter = (game: Game): boolean => {
//     if (!game.inVault) return false;  // D'abord vérifier si le jeu est dans le vault
//     const twoWeeksAgo = new Date();
//     twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
//     return game.playDates.length > 0 && !game.playDates.some(date => new Date(date) >= twoWeeksAgo);
// };
// const neverPlayedFilter = (game: Game): boolean => {
//     return game.inVault && game.playDates.length === 0;  // Dans le vault mais jamais joué
// };
// // Création des trois carousels
// const recentlyPlayed = new GameCard();
// recentlyPlayed.getGameCard(recentlyPlayedFilter);
// const notPlayedRecently = new GameCard();
// notPlayedRecently.getGameCard(notPlayedRecentlyFilter);
// const neverPlayed = new GameCard();
// neverPlayed.getGameCard(neverPlayedFilter);
// const recentlyPlayed = new GameCard ();
// recentlyPlayed.getGameCard()
// const notPlayedRecently = new GameCard ();
// notPlayedRecently.getGameCard()
// const neverPlayed = new GameCard ();
// neverPlayed.getGameCard()
