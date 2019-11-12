

function totalSallary(role, usersArray){
    return usersArray.filter( u => u.role==role).reduce( (p,c) => p += c.sallary, 0);
}