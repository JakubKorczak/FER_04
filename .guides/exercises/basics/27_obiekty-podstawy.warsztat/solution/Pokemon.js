let Pokemon = function (name, powers) {
    this.name = name;
    this.powers = powers;
    this.owner = null;

    this.fight = function (oponent) {
        let firstRound = this.totalAttachPoint() - oponent.totalDefencePoint();
        let secondRound = oponent.totalAttachPoint() - this.totalDefencePoint();
        let result = "win";

        if(firstRound > 0){
            result = "win";
        }else if(firstRound <= 0 && secondRound > 0){
            result = "lose";
        }else if( firstRound <= 0 && secondRound <= 0 ){
            result = "draw";
        }

        switch (result){
            case "win":
                this.owner.addPokemon(oponent);
                break;
            case "lose":
                oponent.owner.addPokemon(this);
                break;
        }

        return result;
    };

    this.totalAttachPoint = function () {
        return this.powers.reduce( (p,c) => p+c.attackPoints, 0);
    }

    this.totalDefencePoint = function () {
        return this.powers.reduce( (p,c) => p+c.defencePoints, 0)
    }
};