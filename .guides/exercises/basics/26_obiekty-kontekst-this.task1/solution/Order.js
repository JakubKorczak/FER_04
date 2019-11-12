
let Order = function (client, number, allOrders){
    //atttributes
    this.client = client;
    this.number = number;
    this.positions = [];
    this.totalValue = 0;

    //initialize
    client.addOrder(this);
    allOrders.addOrder(this);

    //methods
    this.addPosition = function(product, quantity){
        let orderItem = new OrderItem(this, product, quantity);
        this.positions.push(orderItem);
        this.countTotalValue();
    };

    this.countTotalValue = function(){
        this.positions.forEach( position => this.totalValue += position.calcValue() );
    };

    this.printOrderSummary = function(){
        console.log("======");
        console.log("Zamówienie numer: "+this.number);
        console.log("Klient: "+this.client.name);
        console.log("Pozycje:");
        this.positions.forEach( position => {
            console.log("Produkt: "+position.product.name);
            console.log("Cena: "+position.product.price);
            console.log("Ilość: "+position.quantity);
            console.log("Wartość: "+position.calcValue());
            console.log("---");
        })
        console.log("Wartość całkowita: "+this.totalValue);
        console.log("======")
    }

}