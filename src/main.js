//Game window config
let config = {
    type: Phaser.CANVAS, 
    width: 1280,
    height: 960,
    scene: [ Menu, Play],
}

let game = new Phaser.Game(config);

//define game settings
game.settings = {
    friendCount = 0
}

// reserve keyboard variables
let keySPACE, keyLEFT, keyRIGHT;