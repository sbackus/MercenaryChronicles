(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.input.onDown.add(this.onInputDown, this);
      this.input.onDown.add(this.drawPlayer, this);
      this.player = this.add.sprite(32, this.world.height - 150, 'dude');
      this.physics.arcade.enable(this.player);
      debugger;
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

    movePlayer: function() {
      if (this.cursors.right.isDown) {
        this.player.body.x += 5;
      } else if (this.cursors.left.isDown) {
        this.player.body.x -= 5;
      } else if (this.cursors.up.isDown) {
        this.player.body.y -= 5;
      } else if (this.cursors.down.isDown) {
        this.player.body.y += 5;
      }
    }
  };

  window['mercenarychronicles'] = window['mercenarychronicles'] || {};
  window['mercenarychronicles'].Game = Game;
}());
