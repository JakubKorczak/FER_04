

class Duck{
    constructor(){
        this.type = "zwykła";
    }

    quack(){
        console.log("kwa kwa");
    }

    swim(){
        console.log("płynę...");
    }

    print(){
        console.log("Wygląda jak "+this.type+" kaczka");
    }

    //task4
    fly(){
        console.log(`Kaczka ${this.type} leci`);
    }

}

