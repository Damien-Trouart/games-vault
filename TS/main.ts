import GameCards from "./gameCardMini.js"
import Carousel from "./carousel.js"
import { Game, CompletionTime } from "./interface.js";



//!DISCOVER SEARCH BAR RESULTS
const headerSearchForm: HTMLFormElement | null = document.querySelector(".headerSearch");
const headerSearchInput: HTMLInputElement | null = document.querySelector(".searchBarGroup__input");
const searchResultsContainer: HTMLDivElement | null = document.querySelector('.gameCardContainer');
const searchPropositionsContainer: HTMLDivElement | null = document.querySelector('.propositionsContainer');

//*Search Results
const searchResults = new GameCards(searchResultsContainer);
headerSearchForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const searchValue: string = headerSearchInput!.value.trim().toLowerCase();
    // Clean the containers before adding new results
    searchResultsContainer!.innerHTML = "";
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
    searchResultsContainer!.innerHTML = "";
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
//*TAGS COUNT & DISPLAY
/**
 * Fetches the games from the JSON file, counts occurrences of each tag and displays the top 5 tags with their counts.
 */
async function updateTagCounts() {
    const response = await fetch("./../games.json");
    if (response.ok) {
        const games = await response.json() as Game[];
        //Create an object, tagCounts, to store the count of each tag.
        const tagsCount: { [key: string]: number } = {};

        games.forEach(game => {
            //For each game, we navigate through its tags
            game.tags.forEach((tag: string) => {
                //for each tag of each game, we add its count to the tagsCount object already created or we initialize it to 1 if it doesn't exist yet (it would be "undefined" otherwise)
                tagsCount[tag] = (tagsCount[tag] || 0) + 1;
            });
        })


        //Now that we have the count of each tag in the tagsCount object, we can sort it to get the top 5 most used tags.
        const tagsCountEntries = Object.entries(tagsCount).sort((a, b) => {
            return b[1] - a[1];
        });
        const topTags = tagsCountEntries.slice(0, 5)
        const topTagsName = topTags.map(([tag]) => {
            return tag
        })

        const tagList: HTMLUListElement | null = document.querySelector('.tagList');
        /**
         * Creates a list of tags to be displayed in the tag list.
         * @param tagsInDisplay An array of tag names to be displayed in the tag list.
         */
        function createTagList(tagsInDisplay: string[]) {
            tagList!.innerHTML = ""; // Clear the existing options
            tagsInDisplay.forEach((tag) => {
                tagList!.innerHTML += `
                    <li>
                        <label>
                            <input type="checkbox" name="tag" class="tag" value="${tag}" />
                            ${tag} <span class="tagCount">(${tagsCount[tag] || 0})</span>
                        </label>
                    </li>
                `
            });
        }
        createTagList(topTagsName);

        const tagSearchInput = document.querySelector('.tagSearch-input') as HTMLInputElement;
        tagSearchInput.addEventListener('input', () => {
            const searchCleaned = tagSearchInput.value.trim().toLowerCase();
            if (searchCleaned.length === 0) {
                createTagList(topTagsName);
            } else {
                const filtered = Object.keys(tagsCount).filter(tag => tag.toLowerCase().includes(searchCleaned));
                createTagList(filtered);
            }
        });

    }
}
updateTagCounts();