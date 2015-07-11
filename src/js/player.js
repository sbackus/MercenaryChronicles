(function() {
  'use strict';

  function Player() {}

  Player.prototype = {
    create: function () {
     this.self = this.add.sprite(32, this.world.height - 150, 'dude');
     
    },

    update: function () {
      debugger;
    }
  };

  window['mercenarychronicles'] = window['mercenarychronicles'] || {};
  window['mercenarychronicles'].Player = Player;
}());
