var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var gap = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + gap, CLOUD_Y + gap, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'blue';
  ctx.font = "16px  PT Mono";
  ctx.fillText('Ура вы победили!', 110, 75);
  ctx.fillText('Список результатов:', 110, 75 + gap*2);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  // ctx.fillText('Вы', 110, 75);
  // ctx.fillRect(160, 60, 430, 20);

  // ctx.fillText('Иван', 110, 105);
  // ctx.fillRect(160, 90, 430, 20);

  // ctx.fillText('Юлия', 110, 135);
  // ctx.fillRect(160, 120, 430, 20);
};
