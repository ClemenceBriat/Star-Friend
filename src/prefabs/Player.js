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

        //directional movement
        if(keyRIGHT.isDown && this.x <= 1604) {
            this.x += 4;
        }
        if(keyLEFT.isDown && this.x >= 0) {
            this.x -= 4;
        }
        if(keyUP.isDown && this.y >= 0) {
            this.y -= 4;
        }
        if(keyDOWN.isDown && this.y <= 1188) {
            this.y += 4;
        }

    }

}