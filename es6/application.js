var Food = require('./Food');
var display = require('./FoodManager').displayItems;
var findDiscount = require('./FoodManager').discount;

let iceCream = new Food(1001,'Vanila',45.00,'Images/Vanilan.jpg');

let pastry = new Food(1002,'Chocolate',50.00,'Images/Chocolate.jpg');

console.log(iceCream.name);


// Var discount = function(item){
// return item.ratePerUnit *.10
//}
let discount=(item) => item.ratePerUnit * .10;

console.log(discount(iceCream));
console.log(display);
//display(iceCream,pastry);

findDiscount(iceCream,.20);
findDiscount(pastry);
