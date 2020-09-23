// Star prefab
class Star extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointCount) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);
        this.points = pointCount;

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

    reset()
    {
        //New position values
        this.x = Phaser.Math.Between(100, 1564);
        this.y = Phaser.Math.Between(100, 1148);

    }

}