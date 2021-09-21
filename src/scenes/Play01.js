class Play01 extends Phaser.Scene{
    constructor() {
        super("play01Scene");
    }

    preload() {
        //load images and tile sprites
        this.load.image('player', './assets/Player-star.png');
        this.load.image('friend', './assets/friend.png');
        this.load.image('starfield', './assets/sky.png');
        this.load.image('front_stars', './assets/sky front.png');
        this.load.image('satellite', './assets/satellite_01.png');
        this.load.image('bullet', './assets/bullet.png');
        this.load.image('heart', './assets/heart.png');

        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        //place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 1664, 1248, 'starfield').setOrigin(0, 0);
        this.front_stars = this.add.tileSprite(0, 0, 1664, 1248, 'front_stars').setOrigin(0, 0);


        // add rocket for p1
        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player').setOrigin(0, 0);

        //add hearts

        let heartSpacer = 10;

        this.heart03 = new Heart(this, heartSpacer, heartSpacer, 'heart', 0).setOrigin (0, 0);
        this.heart02 = new Heart(this, 70, heartSpacer, 'heart', 0).setOrigin (0, 0);
        this.heart01 = new Heart(this, 130, heartSpacer, 'heart', 0).setOrigin (0, 0);
        this.heart01.setScrollFactor(0, 0);
        this.heart02.setScrollFactor(0, 0);
        this.heart03.setScrollFactor(0, 0);

        this.heartAffected = this.heart01;

        //add stars
        this.star01 = new Star(this, game.config.width/2 +100, game.config.height/2, 'friend', 0, 1).setOrigin (0, 0);
        this.star02 = new Star(this, game.config.width/2 - 100, game.config.height/2, 'friend', 0, 1).setOrigin (0, 0);
        this.star03 = new Star(this, game.config.width/2, game.config.height/2 + 100, 'friend', 0, 1).setOrigin (0, 0);
        this.star04 = new Star(this, game.config.width/2, game.config.height/2 - 100, 'friend', 0, 1).setOrigin (0, 0);

        //add satellites
        let randomX = Phaser.Math.Between(0, 1514);
        let randomY = Phaser.Math.Between(0, 1098);
        this.satellite01 = new Satellite(this, randomX, randomY, 'satellite', 0, 1).setOrigin (0.5, 0.5);
        this.randomizeCoordinates(randomX, randomX);
        this.satellite02 = new Satellite(this, randomX, randomY, 'satellite', 0, 1).setOrigin (0.5, 0.5);
        this.randomizeCoordinates(randomX, randomX);
        this.satellite03 = new Satellite(this, randomX, randomY, 'satellite', 0, 1).setOrigin (0.5, 0.5);
        this.randomizeCoordinates(randomX, randomX);
        this.satellite04 = new Satellite(this, randomX, randomY, 'satellite', 0, 1).setOrigin (0.5, 0.5);
        this.randomizeCoordinates(randomX, randomX);
        this.satellite05 = new Satellite(this, randomX, randomY, 'satellite', 0, 1).setOrigin (0.5, 0.5);

        // define keyboard keys
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //camera
        // bounds of the background asset 
        this.cameras.main.setBounds(0, 0, 1664, 1248);
        // bounds of the canvas 
        this.cameras.main.setViewport(0, 0, 832, 624);
        // this follows the player & zoomed in 
        this.cameras.main.startFollow(this.player);


        //animation config
        /*this.anims.create({
            key: 'explode', 
            frames: this.anims.generateFrameNumbers('explosion', {start: 0, end: 9, first: 0}), 
            frameRate: 30
        });
        */

        //score and life
        this.friendCount = 0;
        this.heartCount = 3;


        //score display
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px', 
            align: 'right',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.scoreLeft = this.add.text(69, 54, this.friendCount, scoreConfig);
        this.scoreLeft.setScrollFactor(0, 0);

        //next level flag
        this.nextLevel = false;

    }

    update() {

        //parallax scrolling


        if ((this.player.x <= 1604 - game.config.width/2) && (this.player.x >= 0 + game.config.width/2)){
            if(keyRIGHT.isDown){
                this.front_stars.tilePositionX += 4;
            }
            else if(keyLEFT.isDown){
                this.front_stars.tilePositionX -= 4;
            }
        }
        if ((this.player.y <= 1188 - game.config.height/2) && (this.player.y >= 0 + game.config.height/2)){
            if(keyDOWN.isDown){
                this.front_stars.tilePositionY += 4;
            }
            else if(keyUP.isDown){
                this.front_stars.tilePositionY -= 4;
            }
        }

        //satellite movement
        this.satellite01.update();
        this.satellite02.update();
        this.satellite03.update();
        this.satellite04.update();
        this.satellite05.update();


        //chekc key input for restart
        if(this.nextLevel && Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play02Scene");
        }

        //check progress status
        if(this.friendCount >= 1)
        {
            this.nextLevel = true;
        }
                
        //update all characters
        
        //update player
        this.player.update();

        //check collisions with star friends
        if(this.checkCollision(this.player, this.star01)) {
            this.star01.reset();
            this.collectFriend(this.star01);
        }
        if(this.checkCollision(this.player, this.star02)) {
            this.star02.reset();
            this.collectFriend(this.star02);
        }
        if(this.checkCollision(this.player, this.star03)) {
            this.star03.reset();
            this.collectFriend(this.star03);
        }
        if(this.checkCollision(this.player, this.star04)) {
            this.star04.reset();
            this.collectFriend(this.star04);
        }


        //check collision with satellites
        if(this.checkCollision(this.player, this.satellite01)) {
           this.stopMoving(this.player, this.satellite01);
           this.satelliteExplode(this.satellite01);
           this.heartLoss(this.heartAffected);
        }
        if(this.checkCollision(this.player, this.satellite02)) {
            this.stopMoving(this.player, this.satellite02);
            this.satelliteExplode(this.satellite02);
            this.heartLoss(this.heartAffected);
        }
        if(this.checkCollision(this.player, this.satellite03)) {
            this.stopMoving(this.player, this.satellite03);
            this.satelliteExplode(this.satellite03);
            this.heartLoss(this.heartAffected);
        }
        if(this.checkCollision(this.player, this.satellite04)) {
            this.stopMoving(this.player, this.satellite04);
            this.satelliteExplode(this.satellite04);
            this.heartLoss(this.heartAffected);
        }
        if(this.checkCollision(this.player, this.satellite05)) {
            this.stopMoving(this.player, this.satellite05);
            this.satelliteExplode(this.satellite05);
            this.heartLoss(this.heartAffected);
        }

    }

    randomizeCoordinates(x, y){
        x = Phaser.Math.Between(0, 1514);
        y = Phaser.Math.Between(0, 1098);
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

    heartLoss(heart){

        //heart dissapears
        heart.alpha = 0;

        //life meter goes down
        this.heartCount -= 1;

        if(this.heartCount == 2){
            this.heartAffected = this.heart02;
        }
        else if (this.heartCount == 1){
            this.heartAffected = this.heart03;
        }
        
    }

    satelliteExplode(satellite){
        satellite.alpha = 0;
        satellite.reset();
        satellite.alpha = 1;
    }

    collectFriend(friend) {
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
        this.friendCount += friend.points;
        this.scoreLeft.text = this.friendCount;

        //sound plays
        //this.sound.play('sfx_explosion');
    }

    stopMoving(player, satellite) {
        if(keyRIGHT.isDown){
            player.x -= 4;
        }
        if(keyLEFT.isDown){
            player.x += 4;
        }
        if(keyDOWN.isDown){
            player.y -= 4;
        }
        if(keyUP.isDown){
            player.y += 4;
        }
    }

}