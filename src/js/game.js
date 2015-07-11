(function() {
  'use strict';

  function Game() {}

  Game.prototype = {

    create: function () {
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.input.onDown.add(this.onInputDown, this);
      this.input.onDown.add(this.drawPlayer, this);
      this.instantiatePlayer();

      this.enemies = this.add.group()
      this.createEnemies();
      this.bulletCounter = 0;
      this.bullets = this.add.group();
      this.bullets.enableBody = true;
      this.physics.arcade.enable(this.player);
      this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function () {
      this.movePlayer();
    },

    onInputDown: function () {
      // this.game.state.start('menu');
    },

    drawPlayer: function() {
      // this.player = new Player();
    },

    createEnemies: function() {
      for(var i = 10; i > 0; i--) {
        this.enemies.create(new Enemy(this, i * 10, i * 40));
      }
    },

    instantiatePlayer: function() {
      this.player = this.add.sprite(32, this.world.height - 150, 'dude');
      this.physics.arcade.enable(this.player);
      this.player.body.bounce.y = 0.2;
      this.player.body.gravity.y = 300;
      this.player.body.collideWorldBounds = true;
      this.player.animations.add('left', [0, 1, 2, 3], 10, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);
      this.player.body.velocity.x = 0;
      this.player.body.collideWorldBounds = true;
    },
    spawnBullet: function() {
      if (this.bulletCounter == 0)
      {
        var b = this.bullets.create(this.player.x, this.player.y, 'bullet');
        b.body.velocity.setTo(0, -100);
      }
      this.bulletCounter += 1;
      if (this.bulletCounter > 60)
      {
        this.bulletCounter = 0
      }

    },
    movePlayer: function() {
      if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 50;
        this.player.animations.play('right');
      } else if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -50;
        this.player.animations.play('left');
      } else if (this.cursors.up.isDown) {
        this.player.body.velocity.y = -50;

        this.spawnBullet();
      }
      else {
        this.player.animations.stop();
        this.player.frame = 4;
      }
    }


  };




  window['mercenarychronicles'] = window['mercenarychronicles'] || {};
  window['mercenarychronicles'].Game = Game;
}());
