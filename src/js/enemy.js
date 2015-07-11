function Enemy(game, x, y) {
  this.image = game.add.sprite(x, y, 'monster');

  this.update = function(){
    this.image.x ++;
  };
};
