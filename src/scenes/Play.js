class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        //load images and tile sprites
        this.load.image('player', './assets/Player-star.png');
        this.load.image('friend', './assets/friend.png');
        this.load.image('starfield', './assets/sky.png');

        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        //place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 832, 624, 'starfield').setOrigin(0, 0);

        // white borders
        //this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        // green ui background
        //this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        // add rocket for p1
        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player').setOrigin(0, 0);

        //add stars
        this.star01 = new Star(this, game.config.width/2 + 100, game.config.height/2, 'friend').setOrigin (0, 0);
        this.star02 = new Star(this, game.config.width/2 - 100, game.config.height/2, 'friend').setOrigin (0, 0);
        this.star03 = new Star(this, game.config.width/2, game.config.height/2 + 100, 'friend').setOrigin (0, 0);
        this.star04 = new Star(this, game.config.width/2, game.config.height/2 - 100, 'friend').setOrigin (0, 0);

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
            this.starfield.tilePositionY += 2;
        }
        if(keyUP.isDown)
        {
            this.starfield.tilePositionY -= 2;
        }
        if(keyLEFT.isDown)
        {
            this.starfield.tilePositionX -= 2;
        }
        if(keyRIGHT.isDown)
        {
            this.starfield.tilePositionX += 2;
        }

        //scroll stars
        
        

        if (!this.gameOver) {
            //update rocket
            this.player.update();

            //update stars
            this.star01.update();
            this.star02.update();
            this.star03.update();
            this.star04.update();
        }

        //check collisions
        if(this.checkCollision(this.player, this.star01)) {
            this.star01.reset();
            this.shipExplode(this.star01);
        }
        if(this.checkCollision(this.player, this.star02)) {
            this.star02.reset();
            this.shipExplode(this.star02);
        }
        if(this.checkCollision(this.player, this.star03)) {
            this.star03.reset();
            this.shipExplode(this.star03);
        }
        if(this.checkCollision(this.player, this.star04)) {
            this.star04.reset();
            this.shipExplode(this.star04);
        }

    }

    checkCollision(player, friend) {
        // simple AABB checking
        if(player.x < friend.x + friend.width &&
            player.x + player.width > friend.x &&
            player.y < friend.y + friend.height && 
            player.height + player.y > friend.y) {
                return true;
                
            }
        else {
            return false;
        }
    }

    shipExplode(friend) {
        //temp hide ship
        friend.alpha = 0;
        
        // create explosion sprite at ship's position
        //let boom = this.add.sprite(ship.x, ship.y, 'explotion').setOrigin(0, 0);
        
        //play explode anim
        //boom.anims.play('explode');
        
        //callback after animation completes
        /*
        boom.on('animationcomplete', () => {
            friend.reset();                       //reset ship position
            friend.alpha = 1;                     //make ship visible again
            //boom.destroy();                     //remove explosion sprite
        });
        */



        //reseting without animation
        friend.reset();
        friend.alpha = 1;

        //score increment and repaint
        //this.p1Score += friend.points;
        //this.scoreLeft.text = this.p1Score;

        //sound plays
        //this.sound.play('sfx_explosion');
    }
}