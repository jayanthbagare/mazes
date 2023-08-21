class Grid{
    constructor(width,height,cellCount){
        this.w = width;
        this.h = height;
        this.cellCount = cellCount;
        this.cellSize = abs(this.w/cellCount);
        textSize(this.w/50);
    }

    show(){
        let numCount = 0
        textSize(this.w/50);
        for(let y=0;y<this.h;y=y+this.cellSize){
            for(let x=0;x<this.w;x=x+this.cellSize){
                rect(x,y,this.cellSize,this.cellSize);
                numCount++;
                stroke("#320E3B");
                text(numCount,x+this.cellSize/2,y+this.cellSize/2);
            }
        }

    }
}