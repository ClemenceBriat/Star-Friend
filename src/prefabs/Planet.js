// Planet prefab
class Planet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointCount) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);
        this.points = pointCount;

        //add Star sfx
        //this.sfxStarJingle = scene.sound.add(star jingle);
    }

    update() {
        
    }

    reset()
    {
        //New position values
        this.x = Phaser.Math.Between(0, 1664);      //adjust based on image size
        this.y = Phaser.Math.Between(10, 1248);

    }

}