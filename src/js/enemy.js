
function Enemy(game) {
  this.image = game.add.sprite(32, 0, 'monster');

  this.update = function(){
    this.image.x ++;
  };
};
