import GameCard from "./gameCardMini.js"
import Carousel from "./carousel.js"
import { Game, CompletionTime } from "./interface.js";




//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm: HTMLFormElement | null = document.querySelector(".headerSearch");
const headerSearchInput: HTMLInputElement | null = document.querySelector(".searchBarGroup__input");
const headerSearchResultsContainer: HTMLDivElement | null = document.querySelector('.gameCardContainer');
const headerSearchPropositionsContainer: HTMLDivElement | null = document.querySelector('.propositionsContainer');

//*Search Results
const searchMatch = new GameCard(headerSearchResultsContainer);
headerSearchForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue: string = headerSearchInput!.value.trim().toLowerCase();
    // Clean the containers before adding new results
    headerSearchResultsContainer!.innerHTML = "";
    headerSearchPropositionsContainer!.innerHTML = "";

    if (searchValue.length <= 1) {
        return;
    }// If the search input is empty or too short, do not fetch any games
    else {
        searchMatch.getGameCard((game) => game.name.toLowerCase().trim().includes(searchValue), "card");
    }
});


//*Search Propositions
const searchPropositions = new GameCard(headerSearchPropositionsContainer);
headerSearchInput?.addEventListener("input", () => {
    const searchValue: string = headerSearchInput!.value.trim().toLowerCase();
    // Clean the containers before adding new results
    headerSearchResultsContainer!.innerHTML = "";
    headerSearchPropositionsContainer!.innerHTML = "";

    if (searchValue.length <= 1) {
        return;
    }// If the search input is empty or too short, do not fetch any games
    else {
        searchPropositions.getGameCard((game) => game.name.toLowerCase().trim().includes(searchValue), "proposition");
    }
});


//*CAROUSEL VAULT
//RECENTLY PLAYED
const recentCarouselHTML = document.querySelector('recentlyPlayed__carousel')
// const recentCarousel = new Carousel (recentCarouselHTML,)
//NOT PLAYED IN A WHILE
//NEVER PLAYED


//*TAGS COUNT

/**
 * Fetches the games from the JSON file, counts occurrences of each tag.
 */
async function updateTagCounts() {
    const response = await fetch("./../games.json");
    if (response.ok) {
        const games = await response.json() as Game[];
        //Create an object, tagCounts, to store the count of each tag for a specific game
        const tagsCount: { [key: string]: number } = {};
        games.forEach(game => {
            //For each game, we navigate through its tags
            game.tags.forEach((tag: string) => {
                //for each tag of each game, we add its count to the tagsCount object already created or we initialize it to 1 if it doesn't exist yet (it would be "undefined" otherwise)")
                tagsCount[tag] = (tagsCount[tag] || 0) + 1;
            });
        });

        //Now we have the count of each tag in the tagsCount object
        //We select all the inputs of the user on tags, meaning all the tags he has selected in this fieldset
        document.querySelectorAll('.tag').forEach((input) => {
            //For each tag selected, we get its value (the tag name) 
            const tag = input.getAttribute('value');
            //and the span that will display the count 
            const countSpan = input.parentElement?.querySelector('.tagCount');
            //if both exist,
            if (tag && countSpan) {
                //we change the value of the span displaying the count of the tag to the value corresponding in the tagsCount object if this tag exists, or to 0 if it doesn't
                const count = tagsCount[tag];
                countSpan.textContent = count ? `(${count.toString()})` : "0";
            }
        })
    }
}

updateTagCounts();