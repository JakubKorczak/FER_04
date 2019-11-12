

let Client = function (name){
    this.name = name;
    this.orders = [];

    this.addOrder = function(order){
        this.orders.push(order);
    }

    this.printOrdersSummary = function(){
        this.orders.forEach( order =>{
            order.printOrderSummary();
        })
    }
}