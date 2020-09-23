// Player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);

        //add player sfx
        //this.sfxMovement = scene.sound.add(movement sound);
        //this.sfxJump = scene.sound.add(jump sound);
    }

    update() {
        //all direction movement
        /*
        if(keyRIGHT.isDown) {
            this.x += 2;
        }
        if(keyLEFT.isDown) {
            this.x -= 2;
        }
        if(keyUP.isDown) {
            this.y -= 2;
        }
        if(keyDOWN.isDown) {
            this.y += 2;
        }
        */

    }

}