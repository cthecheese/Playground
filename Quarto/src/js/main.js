var Board = {
  cells: [],
  element: '',
  cellWidth: '',
  cellHeight: '',
  cellSpacing: '',
  placePiece: function(x, y, piece){
    if(!this.isOccupied(x, y)){
      this.cells[x][y] = piece
    }
  },
  isOccupied: function(x, y){
    if(typeof this.cells[x][y] != 'undefined'){
      return true
    }
    return false
  },
  initialize: function(config){
    for(let i = 0; i < config.size; i++){
      this.cells.push(new Array(config.size))
    }

    this.element = config.element

    this.cellSpacing = Math.floor($(this.element).attr('width')/20.8)
    this.cellWidth = Math.floor($(this.element).attr('width')/5.265822785)
    this.cellHeight = this.cellWidth
  }
}

var Game = {
  ActivePlayer: '',
  TurnCount: 0,
  AvailablePieces: []
}

var Player = {
  name: '',
  wins: 0,
  losses: 0
}

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
  initialize: function(height, shape, surface, color){
    if(height == 0 || shape == 0 || surface == 0 || color == 0){
      console.error('Check properties for 0: (Height, Shape, Surface, Color) ' + height + ', ' + shape + ', ' + surface + ', ' + color)
    }
    else{
      this.height = height
      this.shape = shape
      this.surface = surface
      this.color = color
      this.id = ''+height+shape+surface+color
      this.setName()
      this.setImage()
    }
  },
  setName: function(){
    if(this.height == 0 || this.shape == 0 || this.surface == 0 || this.color == 0){
      console.error("Can't set name: Properties of piece not set")
    }
    let tempName = ''
    tempName += this.height == 1 ? 'L' : 'B'
    tempName += this.shape == 1 ? 'S' : 'O'
    tempName += this.surface == 1 ? 'W' : 'H'
    tempName += this.color == 1 ? 'T': 'G'

    this.name = tempName
  },
  setImage: function(){
    this.image = '../assets/'+this.name+'.svg'
  }
}

$(document).ready(function() {
  // Configure Board
  let config = {
    size: 4,
    element: $('#the-board')
  }

  function createPieces(){
    let list = []
    for(let size = 1; size <= 2; size++){
      for(let shape = 1; shape <= 2; shape++){
        for(let surface = 1; surface <= 2; surface++){
          for(let color = 1; color <= 2; color++){
            let tempPiece = Object.create(Piece)
            tempPiece.initialize(size, shape, surface, color)
            list.push(tempPiece)
          }
        }
      }
    }

    Game.AvailablePieces = list
  }

  Board.initialize(config)
  createPieces();

  // Populate GUI with Available Pieces
});
