
let wally = {
    name: "Wally",
    age: 2,
    proffesion: "Naprawianie innych robotów"
};

function saySomething(obj) {

    let {name, age, proffesion} = obj;
    return `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${proffesion}`;
}

console.log(saySomething(wally));
