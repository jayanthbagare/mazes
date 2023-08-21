let w = 0;
let h = 0;

function setup(){
    createCanvas(750,750);
    this.w = width;
    this.h = height;
    this.grid = new Grid(this.w,this.h,10);
}

function draw(){
    background(51);
    this.grid.show();
}