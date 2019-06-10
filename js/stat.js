'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var TEXT_LEVEL = COLUMN_GAP + GAP * 4;
var COLUMN_HEIGHT = 150;
var COLUMN_X = CLOUD_X + GAP;
var COLUMN_Y = COLUMN_GAP + GAP * 6;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

var getMinElement = function(arr) {
  var minElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }

  return minElement;
};

var times = [1000, 2000, 4300, 2500];

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'blue';
  ctx.font = "16px  PT Mono";
  ctx.fillText('Ура вы победили!', COLUMN_X, COLUMN_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, COLUMN_GAP + GAP * 2)

  var minTime = getMinElement(times);

  var columnHeight = 150 * (minTime / times[i])

  // var names = ['Вы', 'Иван', 'Юлия', 'bb'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, TEXT_LEVEL);
    ctx.fillRect(COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y, COLUMN_WIDTH, columnHeight;
  }
};
