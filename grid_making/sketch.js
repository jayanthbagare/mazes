let w = 0;
let h = 0;

function setup(){
    createCanvas(600,600);
    this.w = width;
    this.h = height;
    this.grid = new Grid(this.w,this.h,6);
    this.grid.populate_grid();
}

function draw(){
    background("#FCFCFC");
    this.grid.show_grid();
    noLoop();
}