import GameCards from "./gameCardMini.js";
//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm = document.querySelector(".headerSearch");
const headerSearchInput = document.querySelector(".searchBarGroup__input");
const searchResultsContainer = document.querySelector('.gameCardContainer');
const searchPropositionsContainer = document.querySelector('.propositionsContainer');
//*Search Results
const searchResults = new GameCards(searchResultsContainer);
headerSearchForm?.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue = headerSearchInput.value.trim().toLowerCase();
    // Clean the containers before adding new results
    searchResultsContainer.innerHTML = "";
    searchPropositionsContainer.innerHTML = "";
    if (searchValue.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        searchResults.getGameCards((game) => game.name.toLowerCase().trim().includes(searchValue), "card");
    }
});
//*Search Propositions
const searchPropositions = new GameCards(searchPropositionsContainer);
headerSearchInput?.addEventListener("input", () => {
    const searchValue = headerSearchInput.value.trim().toLowerCase();
    // Clean the containers before adding new results
    searchResultsContainer.innerHTML = "";
    searchPropositionsContainer.innerHTML = "";
    if (searchValue.length <= 1) {
        return;
    } // If the search input is empty or too short, do not fetch any games
    else {
        searchPropositions.getGameCards((game) => game.name.toLowerCase().trim().includes(searchValue), "proposition");
    }
});
//*CAROUSEL VAULT
//RECENTLY PLAYED
const recentCarouselHTML = document.querySelector('recentlyPlayed__carousel');
// const recentCarousel = new Carousel (recentCarouselHTML,)
//NOT PLAYED IN A WHILE
//NEVER PLAYED
//!TAGS
import { updateTags } from "./tags.js";
updateTags();
