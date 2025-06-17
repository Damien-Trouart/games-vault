import GameCard from "./gameCardMini.js";
//*DISCOVER SEARCH BAR RESULTS
const headerSearchInput = document.querySelector(".headerSearch__input");
const headerSearchResultsContainer = document.querySelector('.gameCardContainer');
const searchMatch = new GameCard(headerSearchResultsContainer);
//pour les resultats de la barre de recherche réactifs aux inputs de l'utilisateur
headerSearchInput?.addEventListener("input", () => {
    const headerSearchValueCleaned = headerSearchInput.value.trim().toLowerCase();
    if (headerSearchValueCleaned.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        headerSearchResultsContainer.innerHTML = ""; // Clear previous results
        searchMatch.getGameCard((game) => game.name.toLowerCase().trim().includes(headerSearchValueCleaned));
    }
});
//*CAROUSEL VAULT
//RECENTLY PLAYED
//NOT PLAYED IN A WHILE
//NEVER PLAYED
