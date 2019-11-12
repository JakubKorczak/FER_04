
function randomize(param1, param2, callback){
    if(typeof callback != 'function') throw Error('callback param is not a function');
    
    return Math.round((Math.random() * (param2-param1)) + param1 );
}
