import GameCards from "./gameCardMini.js";
//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm = document.querySelector(".headerSearch");
const headerSearchInput = document.querySelector(".searchBarGroup__input");
const resultsContainer = document.querySelector('.gameCardContainer');
const searchPropositionsContainer = document.querySelector('.propositionsContainer');
//*Search Results
const searchResults = new GameCards(resultsContainer);
headerSearchForm?.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue = headerSearchInput.value.trim().toLowerCase();
    // Clean the containers before adding new results
    resultsContainer.innerHTML = "";
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
    resultsContainer.innerHTML = "";
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
import { updateTags, selectedTags } from "./tags.js";
updateTags();
document.addEventListener('SelectedTagsChanged', () => {
    //TODO filtrer les gc par rapport aux tags sélectionnés
    const selectedTagsArray = Array.from(selectedTags);
    resultsContainer.innerHTML = "";
    if (selectedTagsArray.length > 0) {
        searchResults.getGameCards((game) => {
            return selectedTagsArray.every((tag) => {
                return game.tags.includes(tag);
            });
        });
    }
});
