// Write your solution in this file!
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake"

function addBurger(){
    const newBurger = "FlatBurger";
    burgers.push(newBurger)
 
    if (burgers){
        const anothernewBurger = "Maple Bacon Burger";
        burgers.push(anothernewBurger)
        console.log(burgers)
    }
};

changeFeaturedDrink = () => {
    featuredDrink = "The JavaShake"
    console.log(featuredDrink)
};

addBurger();
changeFeaturedDrink();


