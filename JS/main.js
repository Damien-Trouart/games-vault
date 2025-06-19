import GameCard from "./gameCardMini.js";
//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm = document.querySelector(".headerSearch");
const headerSearchInput = document.querySelector(".searchBarGroup__input");
const headerSearchResultsContainer = document.querySelector('.gameCardContainer');
const headerSearchPropositionsContainer = document.querySelector('.propositionsContainer');
//*Search Results
const searchMatch = new GameCard(headerSearchResultsContainer);
headerSearchForm?.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue = headerSearchInput.value.trim().toLowerCase();
    // Clean the containers before adding new results
    headerSearchResultsContainer.innerHTML = "";
    headerSearchPropositionsContainer.innerHTML = "";
    if (searchValue.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        searchMatch.getGameCard((game) => game.name.toLowerCase().trim().includes(searchValue), "card");
    }
});
//*Search Propositions
const searchPropositions = new GameCard(headerSearchPropositionsContainer);
headerSearchInput?.addEventListener("input", () => {
    const searchValue = headerSearchInput.value.trim().toLowerCase();
    // Clean the containers before adding new results
    headerSearchResultsContainer.innerHTML = "";
    headerSearchPropositionsContainer.innerHTML = "";
    if (searchValue.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        searchPropositions.getGameCard((game) => game.name.toLowerCase().trim().includes(searchValue), "proposition");
    }
});
//*CAROUSEL VAULT
//RECENTLY PLAYED
// const recentCarousel = new Carousel ()
//NOT PLAYED IN A WHILE
//NEVER PLAYED
