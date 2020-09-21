//Game window config
let config = {
    type: Phaser.CANVAS, 
    width: 640,
    height: 480,
    scene: [Menu, Instructions, Play],
}

let game = new Phaser.Game(config);

//define game settings
//game.settings = {
    //friendCount = 0
//}

// reserve keyboard variables
let keySPACE, keyLEFT, keyRIGHT, keyUP, keyDOWN;