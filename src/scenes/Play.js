class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        //load images and tile sprites
        this.load.image('player', './assets/Player-star.png');
        //this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/sky.png');

        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        //place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // white borders
        //this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        // green ui background
        //this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        // add rocket for p1
        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player').setScale(0.5, 0.5).setOrigin(0, 0);

        //add spaceships (x3)
        //this.ship01 = new Spaceship(this, game.config.width +192, 132, 'spaceship', 0, 30).setOrigin (0, 0);
        //this.ship02 = new Spaceship(this, game.config.width +96, 196, 'spaceship', 0, 20).setOrigin (0, 0);
        //this.ship03 = new Spaceship(this, game.config.width, 260, 'spaceship', 0, 10).setOrigin (0, 0);

        // define keyboard keys
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        //animation config
        /*this.anims.create({
            key: 'explode', 
            frames: this.anims.generateFrameNumbers('explosion', {start: 0, end: 9, first: 0}), 
            frameRate: 30
        });
        */

        //score
        //this.player = 0;

        //score display
        /*
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141', 
            color: '#843605',
            align: 'right',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(69, 54, this.p1Score, scoreConfig);
        */

        //game over flag
        //this.gameOver = false;
    }

    update() {
        //chekc key input for restart
        /*
        if( this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.restand(this.p1Score);
        }
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
        */

        // scroll starfield
        if(keyDOWN.isDown)
        {
            this.starfield.tilePositionY += 4;
        }
        if(keyUP.isDown)
        {
            this.starfield.tilePositionY -= 4;
        }
        if(keyLEFT.isDown)
        {
            this.starfield.tilePositionX -= 4;
        }
        if(keyRIGHT.isDown)
        {
            this.starfield.tilePositionX += 4;
        }

        

        if (!this.gameOver) {
            //update rocket
            this.player.update();

            //update spaceship
            //this.ship01.update();
            //this.ship02.update();
            //this.ship03.update();
        }

        //check collisions
        /*
        if(this.checkCollision(this.player, this.ship03)) {
            this.player.reset();
            this.shipExplode(this.ship03);
        }
        if(this.checkCollision(this.player, this.ship02)) {
            this.player.reset();
            this.shipExplode(this.ship02);
        }
        if(this.checkCollision(this.player, this.ship01)) {
            this.player.reset();
            this.shipExplode(this.ship01);
        }
        */
    }

    checkCollision(rocket, ship) {
        // simple AABB checking
        /*
        if(rocket.x < ship.x + ship.width &&
            rocket.x + rocket.width > ship.x &&
            rocket.y < ship.y + ship.height && 
            rocket.height + rocket.y > ship.y) {
                return true;
            }
        else {
            return false;
        }
        */
    }

    shipExplode(ship) {
        //temp hide ship
        //ship.alpha = 0;
        // create explosion sprite at ship's position
        //let boom = this.add.sprite(ship.x, ship.y, 'explotion').setOrigin(0, 0);
        //play explode anim
        //boom.anims.play('explode');
        //callback after animation completes
        /*
        boom.on('animationcomplete', () => {
            ship.reset();                       //reset ship position
            ship.alpha = 1;                     //make ship visible again
            boom.destroy();                     //remove explosion sprite
        });
        //score increment and repaint
        this.player += ship.points;
        this.scoreLeft.text = this.p1Score;

        //sound plays
        this.sound.play('sfx_explosion');
        */
    }
}