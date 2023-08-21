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
        let rnd = 0;
        for(let y=0;y<this.h;y=y+this.cs){
            for(let x=0;x<this.w;x=x+this.cs){
                this.cell.id = numCount;
                this.cell.p1 = createVector(x,y);
                this.cell.p2 = createVector(x+this.cs,y);
                this.cell.p3 = createVector(x+this.cs,y+this.cs);
                this.cell.p4 = createVector(x,y+this.cs);
                this.cell.north = true;
                this.cell.east = true;
                this.cell.south = true;
                this.cell.west = true;
                this.grid.push(this.cell);
                this.cell = {};
                numCount++;
            }
        }
    }

    make_maze(){
        let rnd = 0;
        let tc = 0;
        let lc = 0;
        let py = 0;
        for(let i=0;i<this.grid.length;i++){
            rnd = random(1);
            if(rnd < 0.5){
                this.grid[i].east = false;
                tc = i - this.cellCount;
                if(!(tc<1)){
                    this.grid[tc].west = false;
                }
            }else{
                this.grid[i].south = false;
                lc = i - this.cellCount;
                
                if(!(lc<1)){
                    // py = this.grid[lc].p1.y;
                    // if(py == this.grid[i].p1.y){
                        
                    //     this.grid[lc].north = false;
                    // }
                    this.grid[lc].north = false;
                }
                
            }
        }
    }

    show_grid(){
        let c;
        for(let i=0;i<this.grid.length;i++){
            c = this.grid[i];

            if(c.north){
                line(c.p1.x,c.p1.y,c.p2.x,c.p2.y);//North
            }
            
            if(c.east){
                line(c.p2.x,c.p2.y,c.p3.x,c.p3.y);//East
            }

            if(c.south){
                line(c.p3.x,c.p3.y,c.p4.x,c.p4.y);//South
            }

            if(c.west){
                line(c.p4.x,c.p4.y,c.p1.x,c.p1.y);//West
            }
            text(c.id,c.p1.x+this.cs/2,c.p1.y+this.cs/2);
        }
    }
}