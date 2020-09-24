// Satellite prefab
class Satellite extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add an object to scene, displayList, updateList
        scene.add.existing(this);

        //add Star sfx
        //this.sfxStarJingle = scene.sound.add(star jingle);
    }

    update() {
        
    }

    reset()
    {
        //New position values
        this.x = Phaser.Math.Between(100, 1564);
        this.y = Phaser.Math.Between(100, 1148);
    }

}