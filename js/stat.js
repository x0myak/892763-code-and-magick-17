'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
// var textLevel = COLUMN_GAP + GAP * 4;
var MAX_COLUMN_HEIGHT = 150;
var columnX = CLOUD_X +COLUMN_GAP;
var columnY = CLOUD_Y + COLUMN_GAP * 5;
var TEXT_Y = 50;


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

var getRandomColor = function () {
  var randomColor = Math.random().toFixed(2);
  return 'rgba(0, 0, 255, ' + randomColor + ')';
};

var drawRect = function (ctx, x, y, height, width, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, height, width);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'gray';
  ctx.font = "16px  PT Mono";
  ctx.fillText('Ура вы победили!', columnX, TEXT_Y);
  ctx.fillText('Список результатов:', columnX, COLUMN_GAP + GAP * 2)

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var color = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    var x = columnX + (COLUMN_WIDTH + COLUMN_GAP) * i;
    ctx.fillText(names[i], x, columnY + (MAX_COLUMN_HEIGHT - MAX_COLUMN_HEIGHT * times[i]) / maxTime - GAP - CLOUD_Y);
    drawRect(ctx, x, columnY - GAP, COLUMN_WIDTH, (MAX_COLUMN_HEIGHT - MAX_COLUMN_HEIGHT * times[i]) / maxTime, color);
  };
};
