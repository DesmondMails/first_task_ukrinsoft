const pizzas = {
    cap:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        sausage: 2,
        mashroom: 3,
        cheese: 1,
    },
    onions:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        meat: 1,
        cheese: 1,
    },
    king_one:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        mayo: 1,
        mashroom: 3,
        tomato: 2,
        cheese: 3,
        dill: 2,
        parsley: 2
    },
    gavay:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        ananas: 1,
        cheese: 2,
    },
    tonno:{
        dough: 1,
        tomato_sauce: 1,
        tuna: 2,
        kappers: 1,
        cheese: 1,
    },
    vegeterian:{
        dough: 1,
        tomato_sauce: 1,
        tomato: 2,
        kappers: 1,
        cucumber: 2,
        onion: 2,
        cheese: 1,
    }
};


const getPizzaInfo = (lastPizzas) => {
    // let popularsPizzas = lastPizzas.reduce((acc,pizza) => {
    //    acc[pizza] = (acc[pizza] || 0) + 1;
    // },{});
    let res = {};
    lastPizzas.forEach(pizza => {
        res[pizza] = res[pizza] + 1 || 1;
    });
    let resSorted = Object.keys(res).sort((a,b) => {return res[b] - res[a]});
    const popular = resSorted.slice(0, 5);

    let ingredientRes = {};
    popular.forEach(key => {
        let pizzaIngredients = Object.keys(pizzas[key]);
         pizzaIngredients.forEach(ingredient => {
             let count = pizzas[key][ingredient] * res[key];
             ingredientRes[ingredient] = (ingredientRes[ingredient] + count)  || count ;
         })
    });

    let ingredients = Object.keys(ingredientRes).sort(((a, b) =>{return ingredientRes[b] - ingredientRes[a]}));
    return {
        popular: popular,
        ingredients: ingredients
    }
};

const res = getPizzaInfo(['cap','cap','onions','gavay','cap', 'tonno','vegeterian', 'king_one']);
console.log(res);

