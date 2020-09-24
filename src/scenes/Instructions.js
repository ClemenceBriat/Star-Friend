class Instructions extends Phaser.Scene{
    constructor() {
        super("instructionsScene");
    }

    create() {
        // starts next scene
        this.scene.start("play01Scene");

        //menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141', 
            color: '#843605',
            align: 'right',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer, 'Use WASD keys to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use WASD keys to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Make some friends', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + (textSpacer * 2), 'Press SPACE to Start', menuConfig).setOrigin(0.5);

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play01Scene");
        }
    }

}