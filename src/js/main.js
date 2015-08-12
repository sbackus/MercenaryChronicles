window.addEventListener('load', function () {
  'use strict';

  var ns = window['mercenarychronicles'];
  var game = new Phaser.Game(1240, 580, Phaser.AUTO, 'mercenarychronicles-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('player', ns.Player);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */
  game.state.start('boot');
}, false);
