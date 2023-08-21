class Grid{
    constructor(width,height,cellCount){
        this.w = width;
        this.h = height;
        this.cellCount = cellCount;
        this.cs = abs(this.w/cellCount); //cs=Cell_Size
        this.cell = {};
        this.grid = [];
        textSize(this.w/50);
    }

    populate_grid(){
        let numCount = 0;
        for(let y=0;y<this.h;y=y+this.cs){
            for(let x=0;x<this.w;x=x+this.cs){
                this.cell.id = numCount;
                this.cell.p1 = createVector(x,y);
                this.cell.p2 = createVector(x+this.cs,y);
                this.cell.p3 = createVector(x+this.cs,y+this.cs);
                this.cell.p4 = createVector(x,y+this.cs);
                this.grid.push(this.cell);
                this.cell = {};
                numCount++;
            }
        }
    }

    show_grid(){
        let c;
        for(let i=0;i<this.grid.length;i++){
            c = this.grid[i];
            line(c.p1.x,c.p1.y,c.p2.x,c.p2.y);
            line(c.p2.x,c.p2.y,c.p3.x,c.p3.y);
            line(c.p3.x,c.p3.y,c.p4.x,c.p4.y);
            line(c.p4.x,c.p4.y,c.p1.x,c.p1.y);
            text(c.id,c.p1.x+this.cs/2,c.p1.y+this.cs/2);
        }
    }

    // show(){
    //     let numCount = 1;
    //     let p1,p2,p3,p4;
    //     for(let y=0;y<this.h;y=y+this.cs){
    //         for(let x=0;x<this.w;x=x+this.cs){
    //             stroke("#320E3B");
    //             noFill();
    //             p1 = createVector(x,y);
    //             p2 = createVector(x+this.cs,y);
    //             p3 = createVector(x+this.cs,y+this.cs);
    //             p4 = createVector(x,y+this.cs);
                
    //             let rnd = random(1);

    //             line(p1.x,p1.y,p2.x,p2.y);//North
    //             if(rnd < 0.5)
    //             {line(p2.x,p2.y,p3.x,p3.y);}//East
    //             else{line(p3.x,p3.y,p4.x,p4.y);}//South
    //             line(p4.x,p4.y,p1.x,p1.y);//West
    //             text("C"+numCount,x+this.cs/2,y+this.cs/2);
    //             numCount++;
    //         }
    //     }

    //}
}