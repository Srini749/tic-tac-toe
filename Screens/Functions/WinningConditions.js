
const getWinningConditions = (size) => {
    const winningConditions = new Array();
    for(var row =0 ; row<size; row++){

        //column wins
        if(row == 0){
            for(var col =0; col<size; col++){
                var colWinArray = [];
                var i = 0;
                while(i<size){
                    colWinArray.push([i, col]);
                    i++;
                }
                winningConditions.push(colWinArray);
            }
        }


        //row wins
        var rowWinArray = [];
        var i = 0;
        while(i<size){
            rowWinArray.push([row, i]);
            i++;
        }
        winningConditions.push(rowWinArray);
        

        //diagonal wins
        var diagonalWinArray = [];
        if(row==0){
            for(var i=0; i<size; i++){
                diagonalWinArray.push([i, i]); 
            }
            winningConditions.push(diagonalWinArray);
        } else if(row==size-1){
            var i=size-1;
            var j =0;
            while(i>=0 && j<size){
                diagonalWinArray.push([i, j]);
                i--;
                j++;
            }
            winningConditions.push(diagonalWinArray);
        }
        
    }
    return winningConditions;
}

export default getWinningConditions;