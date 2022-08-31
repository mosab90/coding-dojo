function pizza(bcrustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.bcrustType = bcrustType;
    pizza.sauceType= sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizza("flower", "bbq", "3mek", ["olive", "tommeto slice", "mashrom"]);
var s2 = pizza("fdeep dish", "btraditional", ["mozzarella"], ["pepperoni", "sausage"]);
var s3 = pizza("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var s4 = pizza("fdeep dish", "btraditional", "mozzarella", ["mushrooms", "onions"]);
var s5 = pizza("fdeep dish", "btraditional", "mozzarella", ["mushrooms", "olives"]);

console.log(s1);

