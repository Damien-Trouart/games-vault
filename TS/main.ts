import GameCards from "./gameCardMini.js"
import Carousel from "./carousel.js"
import { Game, CompletionTime } from "./interface.js";



//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm: HTMLFormElement | null = document.querySelector(".headerSearch");
const headerSearchInput: HTMLInputElement | null = document.querySelector(".searchBarGroup__input");
const resultsContainer: HTMLDivElement | null = document.querySelector('.gameCardContainer');
const searchPropositionsContainer: HTMLDivElement | null = document.querySelector('.propositionsContainer');

//*Search Results
const searchResults = new GameCards(resultsContainer);
headerSearchForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue: string = headerSearchInput!.value.trim().toLowerCase();
    // Clean the containers before adding new results
    resultsContainer!.innerHTML = "";
    searchPropositionsContainer!.innerHTML = "";

    if (searchValue.length <= 1) {
        return;
    }// If the search input is empty or too short, do not fetch any games
    else {
        searchResults.getGameCards((game) => game.name.toLowerCase().trim().includes(searchValue), "card");
    }
});


//*Search Propositions
const searchPropositions = new GameCards(searchPropositionsContainer);
headerSearchInput?.addEventListener("input", () => {
    const searchValue: string = headerSearchInput!.value.trim().toLowerCase();
    // Clean the containers before adding new results
    resultsContainer!.innerHTML = "";
    searchPropositionsContainer!.innerHTML = "";

    if (searchValue.length <= 1) {
        return;
    }// If the search input is empty or too short, do not fetch any games
    else {
        searchPropositions.getGameCards((game) => game.name.toLowerCase().trim().includes(searchValue), "proposition");
    }
});


//*CAROUSEL VAULT
//RECENTLY PLAYED
const recentCarouselHTML = document.querySelector('recentlyPlayed__carousel')
// const recentCarousel = new Carousel (recentCarouselHTML,)
//NOT PLAYED IN A WHILE
//NEVER PLAYED



//!TAGS
import {updateTags, selectedTags} from "./tags.js";
updateTags()

document.addEventListener('SelectedTagsChanged', () =>{
    //TODO filtrer les gc par rapport aux tags sélectionnés
    const selectedTagsArray: string[] = Array.from(selectedTags);
    resultsContainer!.innerHTML=""
    if (selectedTagsArray.length > 0) {
        searchResults.getGameCards((game: Game) => {
            return selectedTagsArray.every((tag: string) => {
                return game.tags.includes(tag);
            });
        });
    }
})
        