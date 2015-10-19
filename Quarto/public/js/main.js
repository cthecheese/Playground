'use strict';

$(document).ready(function () {
  var board = document.getElementById('the-board');
  var piece = document.getElementsByClassName('piece')[0];
  var cellSpacing = Math.floor(board.height / 20.8);
  var cellWidth = Math.floor(board.width / 5.265822785);
  var cellHeight = cellWidth;
  piece.height = Math.floor(board.height / 6.9333);
  console.log('Board Height: ' + board.height);
  console.log('Assumed Height of Piece: ' + board.height / 6.93333);
  console.log('Actual Height of Piece: ' + piece.height);
  console.log('Piece Width: ' + piece.width);
  console.log('Cell Height: ' + cellHeight);
  console.log('Cell Width: ' + cellWidth);
  console.log('Cell Spacing: ' + cellSpacing);

  function movePiece(x, y) {
    var posX = x * cellSpacing + x * cellWidth - cellWidth + (.5 * cellWidth - .5 * piece.width);
    var posY = y * cellSpacing + y * cellHeight - cellHeight + (.5 * cellHeight - .5 * piece.height) + 0;
    // posX = (x*cellSpacing)+(cellWidth*x)-cellWidth

    piece.style.top = posY + 'px';
    piece.style.left = posX + 'px';
  }
  movePiece(1, 2);
});