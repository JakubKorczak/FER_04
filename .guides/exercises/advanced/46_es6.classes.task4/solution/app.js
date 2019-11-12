

class MenuGenerator{
    constructor(domElement, items){
        this.items = items;
        this.domEl = domElement;
    }

    getType(){
        return this.type;
    }

    showItems(){
        this.items.forEach( el => console.log( el ));
    }

    insert(){
        this.domEl.appendChild( this.createMenu() );
    }

    createMenu(){
        let ulEl = document.createElement("ul");
        this.items.forEach( el => {
            let liEl = document.createElement("li");
            let aEl = document.createElement("a");
            aEl.setAttribute("href", el.link);
            aEl.innerText = el.title;
            liEl.appendChild(aEl);
            ulEl.appendChild(liEl);
        });
        return ulEl;
    }
}

class HorizontalMenuGenerator extends  MenuGenerator{
    createMenu() {
        let menuEl = super.createMenu();
        menuEl.classList.add("horizontal");
        return menuEl;
    }
}

class VerticalMenuGenerator extends  MenuGenerator{
    createMenu() {
        let menuEl = super.createMenu();
        menuEl.classList.add("vertical");
        return menuEl;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("test");
    let hMenuGenetator = new HorizontalMenuGenerator(document.querySelector("header nav"), [{title:'start', link:'/start'}, {title:'about', link:'/about'}]);
    let vMenuGenetator = new VerticalMenuGenerator(document.querySelector("header nav"), [{title:'start', link:'/start'}, {title:'about', link:'/about'}]);

    hMenuGenetator.showItems();
    vMenuGenetator.showItems();

    hMenuGenetator.insert();
    vMenuGenetator.insert();

});