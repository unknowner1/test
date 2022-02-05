function Sleep(ms){
    return new Promise((r) => setTimeout(r, ms));
}

function Click(){
    if(color == 1) return 0;
    var er = document.getElementById("er");
    ground.removeChild(er);
    var x = index('x'), y = index('y');
    var block = document.createElement('img');
    block.setAttribute("style", "position: absolute; top: "+(y-11)*31+"px; left: "+(x-11)*31+"px;");
    block.setAttribute("src", "white.png");
    ground.appendChild(block);
    mat[y][x] = 20;
    for(var i=11; i<30; i++){
        for(var j=11; j<30; j++){
            if(Pwin(i, j) == 1) alert("white win");
        }
    }
    color = 1;

    Sleep(100).then(() => Ai());
}

function Move(){
    if(color == 1) return 0;
    var x = index('x'), y = index('y');
    if(first_player_move == 1){
        var er = document.createElement("img");
        er.setAttribute("id", "er");
        er.setAttribute("src", "whiter.png");
        er.setAttribute("style", "position: absolute; top: "+(y-11)*31+"px; left: "+(x-11)*31+"px;");
        er.setAttribute("onclick", "Click()");
        ground.appendChild(er);
        first_player_move = 0;
    }
    else{
        var er = document.getElementById("er");
        er.setAttribute("style", "position: absolute; top: "+(y-11)*31+"px; left: "+(x-11)*31+"px;");
    }
}    

function Pwin(row, col){
    var stack_0 = 0, stack_45 = 0, stack_90 = 0, stack_135 = 0;
    for(var i=0; i<5; i++) if(mat[row][col + i] == 20) stack_0++;
    for(var i=0; i<5; i++) if(mat[row - i][col + i] == 20) stack_45++;
    for(var i=0; i<5; i++) if(mat[row + i][col] == 20) stack_90++;
    for(var i=0; i<5; i++) if(mat[row + i][col + i] == 20) stack_135++;
    if((stack_0 == 5 && mat[row][col+5] !=20 && mat[row][col-1] !=20) || (stack_45 == 5 && mat[row-5][col+5] !=20 && mat[row+1][col-1] !=20) || (stack_90 == 5 && mat[row+5][col] !=20 && mat[row-1][col] !=20) || (stack_135 == 5 && mat[row+5][col+5] !=20) && mat[row-1][col-1] !=20) return 1;
    else return 0;      
}