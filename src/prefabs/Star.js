// Star prefab
class Star extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);

        //add Star sfx
        //this.sfxStarJingle = scene.sound.add(star jingle);
    }

    update() {
        //scoll stars
        if(keyDOWN.isDown)
        {
            this.y -= 4;
        }
        if(keyUP.isDown)
        {
            this.y += 4;
        }
        if(keyLEFT.isDown)
        {
            this.x += 4;
        }
        if(keyRIGHT.isDown)
        {
            this.x -= 4;
        }
    }

}