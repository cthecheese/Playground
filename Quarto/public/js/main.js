'use strict';

var Board = {
  cells: [],
  element: '',
  height: '',
  width: '',
  cellWidth: '',
  cellHeight: '',
  cellSpacing: '',
  tallPieceHeight: 0,
  shortPieceHeight: 0,
  placePiece: function placePiece(x, y, piece) {
    if (!this.isOccupied(x, y)) {
      this.cells[x][y] = piece;

      this.generateGraphic(x, y, piece);
    }
  },
  isOccupied: function isOccupied(x, y) {
    if (typeof this.cells[x][y] != 'undefined') {
      return true;
    }
    return false;
  },
  initialize: function initialize(config) {
    for (var i = 0; i < config.size; i++) {
      this.cells.push(new Array(config.size));
    }

    this.element = config.element;

    this.cellSpacing = Math.floor($(this.element)[0].width / 20.8);
    this.cellWidth = Math.floor($(this.element)[0].width / 5.265822785);
    this.cellHeight = this.cellWidth;
    this.height = $(this.element).attr('height');
    this.width = $(this.element).attr('width');
    this.tallPieceHeight = $(this.element).height() / 6.93333333;
    this.shortPieceHeight = $(this.element).height() / 10.4;
  },
  generateGraphic: function generateGraphic(x, y, piece) {
    console.log(this.cellSpacing);
    console.log(this.cellWidth);
    console.log('Piece Width: ' + $(piece.element).width());
    var posX = x * this.cellSpacing + this.cellWidth * x - this.cellWidth + (.5 * this.cellWidth - .5);
    var posY = y * this.cellSpacing + (this.cellHeight * y - this.cellHeight) + (.5 * this.cellHeight - .5);
    if (piece.height === 1) {
      console.log('Board Tall Piece Height: ' + Board.tallPieceHeight);
      console.log('Board Short Piece Height: ' + Board.shortPieceHeight);
      posY += Board.tallPieceHeight - Board.shortPieceHeight;
    }
    console.log('Pos Y: ' + posY);
    console.log('Pos X: ' + posX);
    $(piece.element).css({
      'top': posY + 'px',
      'left': posX + 'px'
    });

    $(piece.element).appendTo('#the-board-wrapper');
  }
};

var Game = {
  ActivePlayer: '',
  TurnCount: 0,
  AvailablePieces: []
};

var Player = {
  name: '',
  wins: 0,
  losses: 0
};

var Piece = {
  /*
    Height:
    1 - Little (L), 2 - Big (B)
    Shape:
    1 - Square (S), 2 - Circle (O)
    Surface:
    1 - Full (W), 2 - Hollow (H)
    Color:
    1 - Tan (T), 2 - Grey (G)
  */
  id: 0,
  height: 0,
  shape: 0,
  surface: 0,
  color: 0,
  name: '',
  image: '',
  element: '',
  initialize: function initialize(height, shape, surface, color) {
    if (height == 0 || shape == 0 || surface == 0 || color == 0) {
      console.error('Check properties for 0: (Height, Shape, Surface, Color) ' + height + ', ' + shape + ', ' + surface + ', ' + color);
    } else {
      this.height = height;
      this.shape = shape;
      this.surface = surface;
      this.color = color;
      this.id = '' + height + shape + surface + color;
      this.setName();
      this.setImage();
      this.setElement();
    }
  },
  setName: function setName() {
    if (this.height == 0 || this.shape == 0 || this.surface == 0 || this.color == 0) {
      console.error("Can't set name: Properties of piece not set");
    }
    var tempName = '';
    tempName += this.height == 1 ? 'L' : 'B';
    tempName += this.shape == 1 ? 'S' : 'O';
    tempName += this.surface == 1 ? 'W' : 'H';
    tempName += this.color == 1 ? 'T' : 'G';

    this.name = tempName;
  },
  setImage: function setImage() {
    this.image = '../assets/' + this.name + '.svg';
  },
  setElement: function setElement() {
    this.element = $('<img />', {
      src: this.image,
      height: this.calculateHeight(),
      'class': 'board-piece'
    });
  },
  calculateHeight: function calculateHeight() {
    // If height is equal to 1, it's a short piece, else it's a tall piece.
    var height = this.height === 1 ? Board.height / 10.4 : Board.height / 6.933333333;
    return height;
  }
};

$(document).ready(function () {
  // Configure Board
  var config = {
    size: 4,
    element: '#the-board'
  };

  function createPieces() {
    var list = [];
    for (var size = 1; size <= 2; size++) {
      for (var shape = 1; shape <= 2; shape++) {
        for (var surface = 1; surface <= 2; surface++) {
          for (var color = 1; color <= 2; color++) {
            var tempPiece = Object.create(Piece);
            tempPiece.initialize(size, shape, surface, color);
            list.push(tempPiece);
          }
        }
      }
    }

    Game.AvailablePieces = list;
  }

  // Initialize Board
  Board.initialize(config);

  // Create all pieces
  createPieces();
  Board.placePiece(1, 1, Game.AvailablePieces[0]);

  // Populate GUI with Available Pieces

  for (var i = 0; i < Game.AvailablePieces; i++) {}

  /*
    Handling Command Input
  */

  // See if command matches valid input

  //
});