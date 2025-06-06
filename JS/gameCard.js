"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameCard {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.clone = template.content.cloneNode(true);
        const template = document.getElementById("game-card-template");
    }
}
exports.default = GameCard;
