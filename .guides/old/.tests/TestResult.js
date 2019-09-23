const origin = require('remote-origin-url');

class TestResult{
    constructor(taskUniqueSymbol){
        this.task = taskUniqueSymbol;
        this.maxPoints = 0;
        this.points = 0;
        this.date = Date.now();
        this.tests = [];
    }

    send(){
        (async()=> {
            this.gitRemote = await origin();
            if(this.gitRemote.indexOf("git@github.com")!=-1){
                this.login = this.gitRemote.replace("git@github.com:","").split("/")[0];
            }else if(this.gitRemote.indexOf("https://github.com")!=-1){
                this.login = this.gitRemote.replace("https://github.com/","").split("/")[0];
            }
            if(this.login){
                // console.log(this)
                //todo::send data

            }else{
                console.log("Nie podpięte zdalne repozytorium.");
            }

        })();
    }
}

module.exports = TestResult;
