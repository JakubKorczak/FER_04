
let orders = new Orders();

let productMouse = new Product("mouse", 20.50);
let productKeybord = new Product("keybord", 30.00);
let productPrinter = new Product("printer", 279.99);

let client = new Client("John Doe");
let order = new Order(client, "ZO/0001", orders);
order.addPosition(productMouse, 2);
order.addPosition(productKeybord, 4);
order.addPosition(productPrinter,1);

let client2 = new Client("John Brown");
let order2 = new Order(client2, "ZO/0002", orders);
order2.addPosition(productMouse, 2);
order2.addPosition(productKeybord, 4);
order2.addPosition(productPrinter,1);

orders.printAllOrders();
