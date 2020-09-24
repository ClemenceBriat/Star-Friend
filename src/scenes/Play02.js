class Play02 extends Phaser.Scene{
    constructor() {
        super("play02Scene");
    }

    preload() {
        //load images and tile sprites
        this.load.image('player', './assets/Player-star.png');
        //this.load.image('friend', './assets/friend.png');
        this.load.image('starfield', './assets/sky.png');
        this.load.image('satellite', './assets/satellite_01.png');

        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

}