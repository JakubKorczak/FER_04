

let users = [
  {id: 1, username: "Jan"},
  {id: 2, username: "Piotr"},
  {id: 3, username: "Adam"},
  {id: 4, username: "Ewa"}
];


users.sort( (a,b) => (a.username > b.username)? 1 : -1 );
console.log(users);
