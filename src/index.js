// import "./scripts/test.js";

// console.log("here");
import {GameView} from "./scripts/gameView.js";
import {Player} from "./scripts/player.js";


document.addEventListener("DOMContentLoaded", () => {
    testPlayer = new Player();
    const gameView = new GameView(testPlayer);
    console.log("hit")
});
