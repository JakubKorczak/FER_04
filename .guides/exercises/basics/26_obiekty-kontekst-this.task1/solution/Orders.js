let Orders = function () {

    this.orders = [];
    this.addOrder = function (order) {
        this.orders.push(order);
    };

    this.printAllOrders = function () {
        this.orders.forEach(order => order.printOrderSummary());
    };

    this.getHighestValueOrder = function () {
        let highestOder = null;
        this.orders.forEach(order => {
            if (highestOder == null || order.totalValue > highestOder.totalValue) {
                highestOder = order
            }
        });
        return highestOder;
    };




};