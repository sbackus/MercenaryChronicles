(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();

      this.ready = true;
    },

    loadResources: function () {
      this.load.spritesheet('dude', 'assets/MercinaryChronicles.png', 1600, 1944, 2);
      this.load.image('player', 'assets/player.png');
      this.load.image('background', 'assets/background.jpg');
      this.load.spritesheet('monster', 'assets/enemy2.png',240,194,2);
      this.load.image('bullet', 'assets/bullet.png');
    },

    create: function () {

    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['mercenarychronicles'] = window['mercenarychronicles'] || {};
  window['mercenarychronicles'].Preloader = Preloader;
}());
