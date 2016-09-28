/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(x in board){
        var a = []; 
        for(y in board[x]){
            if(board[x][y] == '.'){
                continue;
            }
            if(a.indexOf(board[x][y]) != -1){
                return false;
            }
            a.push(board[x][y]);
        }
    }
    for(x in board){
        var a = []; 
        for(y in board[x]){
            if(board[y][x] == '.'){
                continue;
            }
            if(a.indexOf(board[y][x]) != -1){
                console.log(board[y][x])
                return false;
            }
            a.push(board[y][x]);
        }
    }

     var a = []; 
    for(var i = 0; i<3;i++){
        for(var j = 0; j<3;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
    var a = []; 
    for(var i = 0; i<3;i++){
        
        for(var j = 3; j<6;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
    var a = [];
    for(var i = 0; i<3;i++){
        for(var j = 6; j<9;j++){
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }

    var a = [];
    for(var i = 3; i<6;i++){
        for(var j = 0; j<3;j++){
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
    var a = []; 
    for(var i = 3; i<6;i++){
        
        for(var j = 3; j<6;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
    var a = []; 
    for(var i = 3; i<6;i++){
        
        for(var j = 6; j<9;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
     var a = []; 
    for(var i = 6; i<9;i++){
       
        for(var j = 0; j<3;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
    var a = []; 
    for(var i = 6; i<9;i++){
        
        for(var j = 3; j<6;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }
     var a = []; 
    for(var i = 6; i<9;i++){
       
        for(var j = 6; j<9;j++){
            // console.log(board[i][j]);
           if(board[i][j] == '.'){
                continue;
            }
            if(a.indexOf(board[i][j]) != -1){
                return false;
            }
            a.push(board[i][j]); 
        }
    }

    return true;
};