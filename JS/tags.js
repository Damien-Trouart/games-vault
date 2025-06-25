//Création d'un set stockant les tags séléctionnés pour éviter d'afficher des doublons contrairement à un tableau
const selectedTags = new Set();
//On va avoir besoin de ces infos en dehors de la fonction updateTags() pour d'autres fichiers =>
export { selectedTags };
/**
 * Des datas du fichier games.json, création d'un objet stockant le nombre d'occurence de chaque tag.
 * Création d'une fonction affichant les 5 tags les plus présents dans le json
 * Barre de recherche pour trouver un tag spécifique.
 * système de checkbox sur chaque tag pour les cocher, affiner la sélection et les voir apparants dans la liste.
 */
export async function updateTags() {
    const response = await fetch("./../games.json");
    if (response.ok) {
        const games = await response.json();
        //Create an object, tagCounts, to store the count of each tag.
        const tagsCount = {};
        games.forEach(game => {
            //For each game, we navigate through its tags
            game.tags.forEach((tag) => {
                //for each tag of each game, we add its count to the tagsCount object already created or we initialize it to 1 if it doesn't exist yet (it would be "undefined" otherwise)
                tagsCount[tag] = (tagsCount[tag] || 0) + 1;
            });
        });
        //Now that we have the count of each tag in the tagsCount object, we can sort it to get the top 5 most used tags.
        const tagsCountEntries = Object.entries(tagsCount).sort((a, b) => {
            return b[1] - a[1];
        });
        const topTags = tagsCountEntries.slice(0, 5);
        const topTagsName = topTags.map(([tag]) => {
            return tag;
        });
        //Now the aim is to create a function that displays specific tags, these tags being attribute of the function
        //(that's why we created topTagsName, let's have it as attribute of the function to display the top 5 tags)
        const tagList = document.querySelector('.tagList');
        /**
         * Permet de créer une liste de tag à afficher dans l'<ul>
         * @param tagsInDisplay Tableau de nom de tags à afficher
        */
        function createTagList(tagsInDisplay) {
            //On fusionne les tags séléctionnés que l'on fusionne avec les tags à afficher sans doublons grâce au set.
            const allTagsToShow = Array.from(new Set([...selectedTags, ...tagsInDisplay]));
            tagList.innerHTML = "";
            allTagsToShow.forEach((tag) => {
                tagList.innerHTML += `
                <li>
                        <label>
                            <input type="checkbox" name="tag" class="tag" value="${tag}" />
                            ${tag} <span class="tagCount">(${tagsCount[tag] || 0})</span>
                        </label>
                    </li>
                `;
            });
            const generatedTags = Array.from(document.querySelectorAll('.tag'));
            generatedTags.forEach((generatedTag) => {
                //On vérifie si le tag est déjà séléctionné dans le set, auquel cas on le coche.
                if (selectedTags.has(generatedTag.value)) {
                    generatedTag.checked = true;
                }
                // generatedTag.checked = selectedTags.has(generatedTag.value)
                generatedTag.addEventListener('change', () => {
                    //si le tag est cohé, on l'ajoute au set des tags sélectionnés
                    if (generatedTag.checked) {
                        selectedTags.add(generatedTag.value);
                    }
                    else if (!generatedTag.checked) {
                        //sinon, on le retire d e ce set.
                        selectedTags.delete(generatedTag.value);
                    }
                    //Je créé un custom event ici pour notifier tous les autres fichiers le moindre changement dans le sset regroupant les tags séléectionnés
                    //Cela permet d'éviter de devoir faire des event listeners 'change' sur chaque checkbox dans chaque fichier
                    document.dispatchEvent(new CustomEvent('SelectedTagsChanged'));
                    //on met à jour la liste des tags affichés
                    TagSearchResult();
                });
            });
        }
        createTagList(topTagsName);
        const tagSearchInput = document.querySelector('.tagSearch-input');
        const tagSearchBtn = document.querySelector('.tagSearch-btn');
        tagSearchInput?.addEventListener('input', TagSearchResult);
        tagSearchBtn?.addEventListener('click', () => {
            tagSearchInput.value = "";
            createTagList(topTagsName);
        });
        /**
         * Permet de retourner:
         *  -   soit une liste des 5 tags les plus présents dans le json si la recherche est <= 1 charactère
         *  -   soit une liste de tags filtrée par rapport à la recherche de l'utilisateur.
         */
        function TagSearchResult() {
            const searchCleaned = tagSearchInput.value.trim().toLowerCase();
            if (searchCleaned.length <= 1) {
                createTagList(topTagsName);
            }
            else {
                const filteredSearch = Object.keys(tagsCount).filter((tag) => {
                    return tag.toLowerCase().includes(searchCleaned);
                });
                createTagList(filteredSearch);
            }
        }
        ;
        TagSearchResult();
    }
}
