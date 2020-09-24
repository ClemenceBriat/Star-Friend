// Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);

        //add player sfx
        //this.sfxMovement = scene.sound.add(movement sound);
        //this.sfxJump = scene.sound.add(jump sound);

        //starting player position
        this.xPosition = x;
        this.yPosition = y;
    }

    update() {
        //all direction movement
        if(keyRIGHT.isDown && this.xPosition >= 1248 && this.xPosition <= 1604) {
            this.x += 4;
        }
        if(keyLEFT.isDown && this.xPosition >= 0 && this.xPosition <= game.config.width/2) {
            this.x -= 4;
        }
        if(keyUP.isDown && this.yPosition >= 0 && this.yPosition <= game.config.height/2) {
            this.y -= 4;
        }
        if(keyDOWN.isDown && this.yPosition >= 936 && this.yPosition <= 1188) {
            this.y += 4;
        }

    }

}