'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var textLevel = COLUMN_GAP + GAP * 4;
var MAX_COLUMN_HEIGHT = 150;
var columnX = CLOUD_X + GAP;
var columnY = COLUMN_GAP + GAP * 6;
TEXT_Y = 50;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var times = [1000, 2000, 4300, 2500];

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'blue';
  ctx.font = "16px  PT Mono";
  ctx.fillText('Ура вы победили!', columnX, TEXT_Y);
  ctx.fillText('Список результатов:', columnX + GAP, COLUMN_GAP + GAP * 2)

  var maxTime = getMaxElement(times);

  // var names = ['Вы', 'Иван', 'Юлия', 'bb'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], columnX + (COLUMN_WIDTH + COLUMN_GAP) * i, textLevel);
    ctx.fillRect(columnX + (COLUMN_WIDTH + COLUMN_GAP) * i, columnY, COLUMN_WIDTH, MAX_COLUMN_HEIGHT * (maxTime / times[i]));
  };
};
