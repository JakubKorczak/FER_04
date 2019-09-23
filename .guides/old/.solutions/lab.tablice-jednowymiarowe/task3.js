

function addArrays(array1, array2) {
    let newArray = [];
    let longerArr = [];
    let shorterArr = [];

    if(array1.length > array2.length){
        longerArr = array1;
        shorterArr = array2;
    }else{
        longerArr = array2;
        shorterArr = array1;
    }
    for(let i=0; i<longerArr.length; i++){
        newArray[i]=longerArr[i];
    }

    for(let i=0; i<shorterArr.length; i++){
        newArray[i] += shorterArr[i];
    }

    return newArray;
}





