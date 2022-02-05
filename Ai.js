var Bpoint = new Array(41);
var Wpoint = new Array(41);
for(var i=0; i<41; i++) { Bpoint[i] = new Array(41); Wpoint[i] = new Array(41); }

var Bban = new Array(41);
var Wban = new Array(41);
for(var i=0; i<41; i++) { Bban[i] = new Array(41); Wban[i] = new Array(41); }
for(var i=0; i<41; i++) for(var j=0; j<41; j++) { Bban[i][j] = 0; Wban[i][j] = 0; }

var put_count = 0;
if(put_count == 0){
    Put(20, 20);
}

function Put(y, x){
    var block = document.createElement('img');
    block.setAttribute("style", "position: absolute; top: "+(y-11)*31+"px; left: "+(x-11)*31+"px;");
    block.setAttribute("src", "black.png");
    ground.appendChild(block);
    mat[y][x] = 1;
    for(var i=11; i<30; i++){
        for(var j=11; j<30; j++){
            if(Awin(i, j) == 1) alert("black win");
        }
    }
    put_count++;
    first_player_move = 1;
    color = 20;
}

function Awin(row, col){           
    var stack_0 = 0, stack_45 = 0, stack_90 = 0, stack_135 = 0;
    for(var i=0; i<5; i++) if(mat[row][col + i] == 1) stack_0++;
    for(var i=0; i<5; i++) if(mat[row - i][col + i] == 1) stack_45++;
    for(var i=0; i<5; i++) if(mat[row + i][col] == 1) stack_90++;
    for(var i=0; i<5; i++) if(mat[row + i][col + i] == 1) stack_135++;
    if((stack_0 == 5 && mat[row][col+5] !=1 && mat[row][col-1] !=1) || (stack_45 == 5 && mat[row-5][col+5] !=1 && mat[row+1][col-1] !=1) || (stack_90 == 5 && mat[row+5][col] !=1 && mat[row-1][col] !=1) || (stack_135 == 5 && mat[row+5][col+5] !=1 && mat[row-1][col-1] !=1)) return 1;
    else return 0;      
}

function Four(color, inn, jn, i, j){  
    if(mat[i][j]+mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == color*4){                
        if(mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color){
            if(color == 1) Bpoint[i+inn*(-1)][j+jn*(-1)] += 256;
            else if(color == 20) Wpoint[i+inn*(-1)][j+jn*(-1)] += 256;
        }
        if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1) Bpoint[i+inn*4][j+jn*4] += 256;
            else if(color == 20) Wpoint[i+inn*4][j+jn*4] += 256;
        }
    }

    if(mat[i][j]+mat[i+inn*4][j+jn*4] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == color*2 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*5][j+jn*5] != color){
        if(mat[i+inn][j+jn] == 0){
            if(color == 1) Bpoint[i+inn][j+jn] += 256;
            else if(color == 20) Wpoint[i+inn][j+jn] += 256;
        }
        else if(mat[i+inn*2][j+jn*2] == 0){
            if(color == 1) Bpoint[i+inn*2][j+jn*2] += 256;
            else if(color == 20) Wpoint[i+inn*2][j+jn*2] += 256;
        }
        else if(mat[i+inn*3][j+jn*3] == 0){
            if(color == 1) Bpoint[i+inn*3][j+jn*3] += 256;
            else if(color == 20) Wpoint[i+inn*3][j+jn*3] += 256;
        }
    }
}

function Three(color, inn ,jn, i, j){
    if(mat[i][j]+mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == color*3 && mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color && mat[i+inn*4][j+jn*4] != color){
        if(mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 64; Bpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 64; Wpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
        }
        if(mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 64; Bpoint[i+inn*4][j+jn*4] += 32; }
            else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 64; Wpoint[i+inn*4][j+jn*4] += 32; }
        }

        if( (mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != 0) || (mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] == color) ){
            if(color == 1) Bpoint[i+inn*(-1)][j+jn*(-1)] += 32;
            else if(color == 20) Wpoint[i+inn*(-1)][j+jn*(-1)] += 32;
        }
        if( (mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color) ){
            if(color == 1) Bpoint[i+inn*3][j+jn*3] += 32;
            else if(color == 20) Wpoint[i+inn*3][j+jn*3] += 32;
        }
    }

    if(mat[i][j]+mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == color*3 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*3][j+jn*3] != color){
        if(mat[i+inn*(-1)][j+jn*(-1)] != 0 && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 32; Bpoint[i+inn*4][j+jn*4] += 32; }
            else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 32; Wpoint[i+inn*4][j+jn*4] += 32; }
        }
        if(mat[i+inn*3][j+jn*3] != 0 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 32; Bpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 32; Wpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
        }
        if(mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] == color && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 32; Bpoint[i+inn*4][j+jn*4] += 32; }
            else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 32; Wpoint[i+inn*4][j+jn*4] += 32; }
        }
        if(mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] == color && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 32; Bpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 32; Wpoint[i+inn*(-2)][j+jn*(-2)] += 32; }
        }
    }

    if(mat[i][j]+mat[i+inn*3][j+jn*3] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == color && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*4][j+jn*4] != color){
        if(mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color){
            if(mat[i+inn][j+jn] == 0){
                if(color == 1){ Bpoint[i+inn][j+jn] += 32; Bpoint[i+inn*(-1)][j+jn*(-1)] += 32; }
                else if(color == 20){ Wpoint[i+inn][j+jn] += 32; Wpoint[i+inn*(-1)][j+jn*(-1)] += 32; }
            }
            else if(mat[i+inn*2][j+jn*2] == 0){
                if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 32; Bpoint[i+inn*(-1)][j+jn*(-1)] += 32; }
                else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 32; Wpoint[i+inn*(-1)][j+jn*(-1)] += 32; }
            }
        }
        if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(mat[i+inn][j+jn] == 0){
                if(color == 1){ Bpoint[i+inn][j+jn] += 32; Bpoint[i+inn*4][j+jn*4] += 32; }
                else if(color == 20){ Wpoint[i+inn][j+jn] += 32; Wpoint[i+inn*4][j+jn*4] += 32; }
            }
            else if(mat[i+inn*2][j+jn*2] == 0){
                if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 32; Bpoint[i+inn*4][j+jn*4] += 32; }
                else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 32; Wpoint[i+inn*4][j+jn*4] += 32; }
            }
        }
    }

    if(mat[i][j]+mat[i+inn*4][j+jn*4] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == color && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*5][j+jn*5] != color){
        if(mat[i+inn][j+jn] == color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 32; Bpoint[i+inn*3][j+jn*3] += 32; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 32; Wpoint[i+inn*3][j+jn*3] += 32; }
        }
        else if(mat[i+inn*2][j+jn*2] == color){
            if(color == 1){ Bpoint[i+inn][j+jn] += 32; Bpoint[i+inn*3][j+jn*3] += 32; }
            else if(color == 20){ Wpoint[i+inn][j+jn] += 32; Wpoint[i+inn*3][j+jn*3] += 32; }
        }
        else if(mat[i+inn*3][j+jn*3] == color){
            if(color == 1){ Bpoint[i+inn][j+jn] += 32; Bpoint[i+inn*2][j+jn*2] += 32; }
            else if(color == 20){ Wpoint[i+inn][j+jn] += 32; Wpoint[i+inn*2][j+jn*2] += 32; }
        }
    }
}

function Two(color, inn, jn, i, j){
    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] != color && mat[i+inn*(-3)][j+jn*(-3)] != color){
        if(mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 28; Bpoint[i+inn*(-2)][j+jn*(-2)] += 24; Bpoint[i+inn*(-3)][j+jn*(-3)] += 4;}
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 28; Wpoint[i+inn*(-2)][j+jn*(-2)] += 24; Wpoint[i+inn*(-3)][j+jn*(-3)] += 4;}
        }
        if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 28; Bpoint[i+inn*3][j+jn*3] += 24; Bpoint[i+inn*4][j+jn*4] += 4;}
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 28; Wpoint[i+inn*3][j+jn*3] += 24; Wpoint[i+inn*4][j+jn*4] += 4;}
        }

        if( (mat[i+inn*(-3)][j+jn*(-3)] != 0) || (mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] == color) ){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 24; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 24; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
        }
        if( (mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color) ){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 24; Bpoint[i+inn*3][j+jn*3] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 24; Wpoint[i+inn*3][j+jn*3] += 4; }
        }
    }

    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*2][j+jn*2] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color && mat[i+inn*3][j+jn*3] != color){
        if(mat[i+inn*(-2)][j+jn*(-2)] != 0 && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*2][j+jn*2] += 24; Bpoint[i+inn*3][j+jn*3] += 24; Bpoint[i+inn*4][j+jn*4] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*2][j+jn*2] += 24; Wpoint[i+inn*3][j+jn*3] += 24; Wpoint[i+inn*4][j+jn*4] += 4; }
        }
        else if(mat[i+inn*3][j+jn*3] != 0 && mat[i+inn*(-2)][j+jn*(-2)]+mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] != color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 24; Bpoint[i+inn*(-2)][j+jn*(-2)] += 24; Bpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 24; Wpoint[i+inn*(-2)][j+jn*(-2)] += 24; Wpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
        }

        if(mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] == color && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*2][j+jn*2] += 24; Bpoint[i+inn*3][j+jn*3] += 24; Bpoint[i+inn*4][j+jn*4] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*2][j+jn*2] += 24; Wpoint[i+inn*3][j+jn*3] += 24; Wpoint[i+inn*4][j+jn*4] += 4; }
        }
        else if(mat[i+inn*(-2)][j+jn*(-2)] != 0 && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 24; Bpoint[i+inn*(-2)][j+jn*(-2)] += 24; Bpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 24; Wpoint[i+inn*(-2)][j+jn*(-2)] += 24; Wpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
        }
    }

    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)] != 0 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*4][j+jn*4] += 4; }
        else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*4][j+jn*4] += 4; }
    }
    else if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*2][j+jn*2] != 0 && mat[i+inn*2][j+jn*2] != color && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)]+mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] != color){
        if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; Bpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
        else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; Wpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
    }

    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] == color && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*4][j+jn*4] += 4; }
        else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*4][j+jn*4] += 4; }
    }
    else if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*2][j+jn*2] == 0 && mat[i+inn*3][j+jn*3] == color && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; Bpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
        else if(color == 20){ Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; Wpoint[i+inn*(-3)][j+jn*(-3)] += 4; }
    }

    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color && mat[i+inn*2][j+jn*2] == 0 && mat[i+inn*3][j+jn*3] != 0 && mat[i+inn*3][j+jn*3] != color){
        if(mat[i+inn*(-3)][j+jn*(-3)] != 0){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; Bpoint[i+inn*2][j+jn*2] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; Wpoint[i+inn*2][j+jn*2] += 4; }
        }
        else if(mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] == color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; Bpoint[i+inn*2][j+jn*2] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; Wpoint[i+inn*2][j+jn*2] += 4; }
        }
    }
    else if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] != color && mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != 0 && mat[i+inn*(-2)][j+jn*(-2)] != color){
        if(mat[i+inn*4][j+jn*4] != 0){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; }
        }
        else if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; }
        }
    }

    if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] == color){
        if(mat[i+inn*(-3)][j+jn*(-3)] != 0){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
        }
        else if(mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] == color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
        }
    }
    else if(mat[i][j]+mat[i+inn][j+jn] == color*2 && mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] != color && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] == color){
        if(mat[i+inn*4][j+jn*4] != 0){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4; }
        }
        else if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color){
            if(color == 1){ Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4; }
            else if(color == 20){ Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4; }
        }
    }

    if(mat[i][j]+mat[i+inn*2][j+jn*2] == color*2 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn][j+jn]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] != color && mat[i+inn*(-2)][j+jn*(-2)] != color){
        if(mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color && mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 24; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; Bpoint[i+inn][j+jn] += 28; Bpoint[i+inn*3][j+jn*3] += 24; Bpoint[i+inn*4][j+jn*4] += 4;}
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 24; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; Wpoint[i+inn][j+jn] += 28; Wpoint[i+inn*3][j+jn*3] += 24; Wpoint[i+inn*4][j+jn*4] += 4;}
        }
        else if( ( (mat[i+inn*(-2)][j+jn*(-2)] != 0) || (mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] == color) ) && mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn][j+jn] += 24; Bpoint[i+inn*3][j+jn*3] += 24; Bpoint[i+inn*4][j+jn*4] += 4;}
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn][j+jn] += 24; Wpoint[i+inn*3][j+jn*3] += 24; Wpoint[i+inn*4][j+jn*4] += 4;}
        }
        else if( ( (mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color) ) && mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
            if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn][j+jn] += 24; Bpoint[i+inn*(-1)][j+jn*(-1)] += 24; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4;}
            else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn][j+jn] += 24; Wpoint[i+inn*(-1)][j+jn*(-1)] += 24; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4;}
        }
        else if( ( (mat[i+inn*(-2)][j+jn*(-2)] != 0) || (mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] == color) ) && ( (mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color) ) ){
            if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*3][j+jn*3] += 4; }
            else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*3][j+jn*3] += 4; }
        }
    }   

    if(mat[i][j]+mat[i+inn*2][j+jn*2] == color*2 && mat[i+inn*(-1)][j+jn*(-1)] != 0 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*4][j+jn*4] += 4; }
        else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*4][j+jn*4] += 4; }
    }
    else if(mat[i][j]+mat[i+inn*2][j+jn*2] == color*2 && mat[i+inn*3][j+jn*3] != 0 && mat[i+inn*3][j+jn*3] != color && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
        if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
        else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
    }
    else if(mat[i][j]+mat[i+inn*2][j+jn*2] == color*2 && mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] == color && mat[i+inn*3][j+jn*3]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn*3][j+jn*3] += 4; Bpoint[i+inn*4][j+jn*4] += 4; }
        else if(color == 20){ Wpoint[i+inn*3][j+jn*3] += 4; Wpoint[i+inn*4][j+jn*4] += 4; }
    }
    else if(mat[i][j]+mat[i+inn*2][j+jn*2] == color*2 && mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*4][j+jn*4] == color && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != color){
        if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
        else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 4; }
    }

    if(mat[i][j]+mat[i+inn*3][j+jn*3] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == 0 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn][j+jn] += 24; Bpoint[i+inn*2][j+jn*2] += 24; Bpoint[i+inn*4][j+jn*4] += 4;}
        else if(color == 20){ Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn][j+jn] += 24; Wpoint[i+inn*2][j+jn*2] += 24; Wpoint[i+inn*4][j+jn*4] += 4;}
    }
    else if(mat[i][j]+mat[i+inn*3][j+jn*3] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == 0 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*4][j+jn*4] != color){
        if( ( (mat[i+inn*(-1)][j+jn*(-1)] != 0) || (mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] == color) ) && mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != color){
            if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*4][j+jn*4] += 4;}
            else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*4][j+jn*4] += 4;}
        }
        else if( ( (mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == color) ) && mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != color){
            if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*(-1)][j+jn*(-1)] += 4;}
            else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*(-1)][j+jn*(-1)] += 4;}
        }
    }

    if(mat[i][j]+mat[i+inn*4][j+jn*4] == color*2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*(-1)][j+jn*(-1)] != color && mat[i+inn*5][j+jn*5] != color){
        if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*2][j+jn*2] += 4; Bpoint[i+inn*3][j+jn*3] += 4;}
        else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*2][j+jn*2] += 4; Wpoint[i+inn*3][j+jn*3] += 4;}
    }
} 

function One(color, inn, jn, i, j){
    if(mat[i][j] == color && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3]+mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*(-2)][j+jn*(-2)]+mat[i+inn*(-3)][j+jn*(-3)] == 0 && mat[i+inn*(-4)][j+jn*(-4)] != color && mat[i+inn*4][j+jn*4] != color){
        if(color == 1){ Bpoint[i+inn][j+jn] += 4; Bpoint[i+inn*2][j+jn*2] += 2; Bpoint[i+inn*3][j+jn*3] += 1; Bpoint[i+inn*(-1)][j+jn*(-1)] += 4; Bpoint[i+inn*(-2)][j+jn*(-2)] += 2; Bpoint[i+inn*(-3)][j+jn*(-3)] += 1;}
        else if(color == 20){ Wpoint[i+inn][j+jn] += 4; Wpoint[i+inn*2][j+jn*2] += 2; Wpoint[i+inn*3][j+jn*3] += 1; Wpoint[i+inn*(-1)][j+jn*(-1)] += 4; Wpoint[i+inn*(-2)][j+jn*(-2)] += 2; Wpoint[i+inn*(-3)][j+jn*(-3)] += 1;}
    }
}

function Ban33(){
    var stack = 0;
    for(var p=11; p<30; p++){
        for(var q=11; q<30; q++){
            if(mat[p][q] != 0) continue;
            mat[p][q] = 1;
            for(var z=0; z<4; z++){
                if(z==0){ jn=1; inn=0; }
                else if(z==1){ jn=0; inn=1; }
                else if(z==2){ jn=1; inn=-1; }
                else if(z==3){ jn=1; inn=1; }
                for(var i=11; i<30; i++){
                    for(var j=11; j<30; j++){
                        if(mat[i][j]+mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == 3 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*3][j+jn*3] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != 1 && mat[i+inn*4][j+jn*4] != 1){
                            if(mat[i+inn*(-2)][j+jn*(-2)] == 0 && mat[i+inn*(-3)][j+jn*(-3)] != 1) stack++;
                            else if(mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] != 1) stack++;
                        }
                        if(mat[i][j]+mat[i+inn*3][j+jn*3] == 2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2] == 1 && mat[i+inn*(-1)][j+jn*(-1)]+mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*(-2)][j+jn*(-2)] != 1 && mat[i+inn*5][j+jn*5] != 1) stack++;
                    }
                }
            }
            if(stack>1){ Bpoint[p][q] = -1; mat[p][q] = 0; stack = 0; }
            else{ mat[p][q] = 0; stack = 0; }
        }
    }
}
function Ban44(){
    var stack = 0;
    for(var p=11; p<30; p++){
        for(var q=11; q<30; q++){
            if(mat[p][q] != 0) continue;
            mat[p][q] = 1;
            for(var z=0; z<4; z++){
                if(z==0){ jn=1; inn=0; }
                else if(z==1){ jn=0; inn=1; }
                else if(z==2){ jn=1; inn=-1; }
                else if(z==3){ jn=1; inn=1; }
                for(var i=11; i<30; i++){
                    for(var j=11; j<30; j++){
                        if(mat[i][j]+mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 4 && mat[i+inn*(-1)][j+jn*(-1)] != 1 && mat[i+inn*4][j+jn*4] != 1){
                            if( ( (mat[i+inn*(-1)][j+jn*(-1)] != 0) || (mat[i+inn*(-1)][j+jn*(-1)] == 0 && mat[i+inn*(-2)][j+jn*(-2)] == 1) ) && ( (mat[i+inn*4][j+jn*4] != 0) || (mat[i+inn*4][j+jn*4] == 0 && mat[i+inn*5][j+jn*5] == 1) ) ){}
                            else stack++;
                        }
                        if(mat[i][j]+mat[i+inn*4][j+jn*4] == 2 && mat[i+inn][j+jn]+mat[i+inn*2][j+jn*2]+mat[i+inn*3][j+jn*3] == 2 && mat[i+inn*(-1)][j+jn*(-1)] != 1 && mat[i+inn*5][j+jn*5] != 1) stack++;
                    }
                }
            }
            if(stack>1){ Bpoint[p][q] = -1; mat[p][q] = 0; stack = 0; }
            else{ mat[p][q] = 0; stack = 0; }
        }
    }
}

function Pointing(){
    for(var i=0; i<41; i++){
        for(var j=0; j<41; j++){
            if(mat[i][j] != 0){ Bpoint[i][j] = -1; Wpoint[i][j] = -1; }
            else { Bpoint[i][j] = 0; Wpoint[i][j] = 0; }
        }
    }

    var jn, inn;
    for(var z=0; z<4; z++){
        for(var c=1; c<21; c+=19){
            if(z==0){ jn=1; inn=0; }
            else if(z==1){ jn=0; inn=1; }
            else if(z==2){ jn=1; inn=-1; }
            else if(z==3){ jn=1; inn=1; }
            for(var i=11; i<30; i++){
                for(var j=11; j<30; j++){
                    Four(c, inn, jn, i, j);
                    Three(c, inn, jn, i, j);
                    Two(c, inn, jn, i, j);
                    One(c, inn, jn, i, j);
                }
            }
        }
    }
    Ban33();
    Ban44();
}

function Largest(arr){
    var keep;
    for(var i=0; i<arr.length - 1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] > arr[i]){ 
                keep = arr[i]; 
                arr[i] = arr[j];  
                arr[j] = keep;
            }
        }
    }
    return [arr[0], arr[1]];
}

function Thinking(){
    var sBpoint = new Array(41);
    var sWpoint = new Array(41);
    for(var i=0; i<41; i++) { sBpoint[i] = new Array(41); sWpoint[i] = new Array(41); }
    for(var i=0; i<41; i++) for(var j=0; j<41; j++) { sBpoint[i][j] = Bpoint[i][j]; sWpoint[i][j] = Wpoint[i][j]; }
    for(var p=11; p<30; p++){
        for(var q=11; q<30; q++){
            if(mat[p][q] != 0) continue;
            mat[p][q] = 1;
            Pointing();
            var Bgapst = new Array(), b = 0;
            for(var i=11; i<30; i++){
                for(var j=11; j<30; j++){
                    if(Bpoint[i][j] > sBpoint[i][j]){ Bgapst[b] = Bpoint[i][j]; b++; }
                }
            }
            var [bf, bs] = [0, 0];
            if(b>1) [bf, bs] = Largest(Bgapst);
            if(bf >= 48 && bf < 64 && bs >= 48 && bs < 64){ sBpoint[p][q] = bs; console.log(p+','+q+' 양수 감지 '+bs+'포인트'); }
            mat[p][q] = 0;
        }
    }
    for(var i=0; i<41; i++) for(var j=0; j<41; j++) Bpoint[i][j] = sBpoint[i][j];

    for(var p=11; p<30; p++){
        for(var q=11; q<30; q++){
            if(mat[p][q] != 0) continue;
            mat[p][q] = 20;
            Pointing();
            var Wgapst = new Array(), w = 0;
            for(var i=11; i<30; i++){
                for(var j=11; j<30; j++){
                    if(Wpoint[i][j] > sWpoint[i][j]){ Wgapst[w] = Wpoint[i][j]; w++; }
                }
            }
            var [wf, ws] = [0, 0];
            if(w>1) [wf, ws] = Largest(Wgapst);
            if(wf >= 48 && wf < 64 && ws >= 48 && ws < 64){ sWpoint[p][q] = ws; console.log(p+','+q+' 양수 감지 '+ws+'포인트'); }
            mat[p][q] = 0;
        }
    }
    for(var i=0; i<41; i++) for(var j=0; j<41; j++) Wpoint[i][j] = sWpoint[i][j];            
}

function Ai(){
    Pointing();
    Thinking();
    var Bbiggest = 0, Wbiggest = 0, n = 0;
    var bestX = new Array();
    var bestY = new Array();
    for(var i=11; i<30; i++){
        for(var j=11; j<30; j++){
            if(Bpoint[i][j] > Bbiggest) Bbiggest = Bpoint[i][j];
            if(Wpoint[i][j] > Wbiggest) Wbiggest = Wpoint[i][j];
        }
    }
    if(Bbiggest >= Wbiggest){
        for(var i=11; i<30; i++){
            for(var j=11; j<30; j++){
                if(Bpoint[i][j] == Bbiggest){
                    bestX[n] = j; 
                    bestY[n] = i; 
                    n++;
                }
            }
        }
    }
    else if(Bbiggest < Wbiggest){
        for(var i=11; i<30; i++){
            for(var j=11; j<30; j++){ 
                if(Wpoint[i][j] == Wbiggest){
                    bestX[n] = j; 
                    bestY[n] = i; 
                    n++;
                }
            }
        }
    }
    var random = Math.floor(Math.random() * n);
    Put(bestY[random], bestX[random]);
}