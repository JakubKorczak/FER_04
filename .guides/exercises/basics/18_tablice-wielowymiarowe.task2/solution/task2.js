
function createArray(){
    let arr = [];
    let counter = 1;
    for(let i=0; i<3; i++){
        arr[i] = [];
        for(let j=0; j<4; j++){
            arr[i][j] = counter++;
        }
    }
    return arr;
}

