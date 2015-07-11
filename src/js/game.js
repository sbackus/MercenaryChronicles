(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      this.input.onDown.add(this.onInputDown, this);
      this.input.onDown.add(this.drawPlayer, this);
      this.player = this.add.sprite(32, this.world.height - 150, 'dude');
      this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function () {
      // this.input.keyboard..x += 5;
      if (this.cursors.right.isDown) {
        this.player.x += 5;
      }
    },
    onInputDown: function () {
      // this.game.state.start('menu');
    },
    drawPlayer: function() {
      // this.player = new Player();
    }
  };

  window['mercenarychronicles'] = window['mercenarychronicles'] || {};
  window['mercenarychronicles'].Game = Game;
}());
