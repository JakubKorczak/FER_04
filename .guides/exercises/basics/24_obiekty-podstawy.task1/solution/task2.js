
function getUsersWithRole(role, usersArray){
    return usersArray.filter( user => user.role == role);
}