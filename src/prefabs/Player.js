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
        //left/right movement
        if(keyLEFT.isDown && this.x >= 47) {
            this.x -= 2;
        }
        else if(keyRIGHT.isDown && this.x <= 578) {
            this.x += 2;
        }

        // jump button
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.isJumping = true;
            //play sfx
            //this.sfxJump.play();
        }

        //if jumping, move up
        if(this.isJumping && this.y >= 108) {
            //idk
        }

    }

}