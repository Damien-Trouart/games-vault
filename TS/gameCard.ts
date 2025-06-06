"use strict"

export default class GameCard{
    public title: HTMLHeadingElement
    public img: HTMLElement
    public btn: HTMLButtonElement


    constructor( public name:string, public img:string){

        const template = document.getElementById("game-card-template") as HTMLTemplateElement;
    }
    const clone = template.content.cloneNode(true) as DocumentFragment;

}
// export default class GameCard {
//     // Propriétés pour stocker les éléments DOM
//     public title: HTMLHeadingElement;
//     public imgElem: HTMLImageElement;
//     public btn: HTMLButtonElement;

//     // Propriétés de données (du jeu)
//     constructor(
//         public name: string,
//         public img: string,
//         public desc: string
//     ) {}

//     render(): HTMLElement {
//         const template = document.getElementById("game-card-template") as HTMLTemplateElement;
//         const clone = template.content.cloneNode(true) as DocumentFragment;

//         this.title = clone.querySelector('.title') as HTMLHeadingElement;
//         this.imgElem = clone.querySelector('.cover') as HTMLImageElement;
//         this.btn = clone.querySelector('.add-to-vault-btn') as HTMLButtonElement;

//         this.title.textContent = this.name;
//         this.imgElem.src = this.img;
//         // ... etc.

//         // Retourne le fragment prêt à être inséré dans le DOM
//         return clone;
//     }
// }