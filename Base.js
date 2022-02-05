const ground = document.getElementById("groundiv");
var mat = new Array(41);
for(var i=0; i<41; i++) mat[i] = new Array(41);
for(var i=0; i<41; i++) for(var j=0; j<41; j++) mat[i][j] = 300;
for(var i=11; i<30; i++) for(var j=11; j<30; j++) mat[i][j] = 0;
var color = 1;
var first_player_move = 1;
function index(c){
    if(c == 'x'){
        var po = event.clientX - ground.getBoundingClientRect().x;
        for(var i=0; i <19; i++) if(po >= i*31 && po < (i+1)*31) return i+11;
    }    
    else if(c == 'y'){
        var po = event.clientY - ground.getBoundingClientRect().y;
        for(var i=0; i <19; i++) if(po >= i*31 && po < (i+1)*31) return i+11;
    }   
}

