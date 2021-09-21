//Game window config
let config = {
    type: Phaser.CANVAS, 
    width: 832, //832  1280  640
    height: 624, //624  960   480
    scene: [Menu, Instructions, Play01, Play02],
}

let game = new Phaser.Game(config);



//define game settings

game.settings = {
    friendCount: 1,
    heartCount: 3
}


// reserve keyboard variables
let keySPACE, keyLEFT, keyRIGHT, keyUP, keyDOWN;