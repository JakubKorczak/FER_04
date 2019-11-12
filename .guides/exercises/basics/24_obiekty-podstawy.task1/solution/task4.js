

function raiseSallary(role, percent,usersArray){
    return usersArray.map( u => {
        if(u.role == role){
            u.sallary = u.sallary + (u.sallary*(percent/100));
        }
        return u;
    });
}