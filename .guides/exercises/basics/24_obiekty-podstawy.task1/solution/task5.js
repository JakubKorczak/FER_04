

function printUsers(usersArray){
   usersArray.forEach( user => {
       console.log("name: "+user.name);
       console.log("surname: "+user.surname);
       console.log("sallary: "+user.sallary);
       console.log("role: "+user.role);
       console.log("----")
   })
}