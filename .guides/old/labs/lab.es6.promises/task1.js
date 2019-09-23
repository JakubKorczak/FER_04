
let getNames = function(){
    let names = JSON.stringify(["Jan", "Piotr", "Anna"]);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( names);
        }, 2000);
    });
};