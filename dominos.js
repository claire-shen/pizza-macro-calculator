import { cheeseDataT } from './dominosData.js';
import { cheeseDataCO } from './dominosData.js';
import { crustSizeInfo } from './dominosData.js';

var totalCalories = 0;
var totalProtein = 0;
var totalCarbs = 0; 
var totalFats = 0;

var cheeseCalories = 0; 
var cheeseProtein = 0; 
var cheeseFats = 0; 
var cheeseCarbs = 0; 

var sizeSelect = document.getElementById('size-select');
var selectedCrust = ''; 
var selectedSize = '';
var crustSelected = false;
var sizeSelected = false;

var cheeseOrToppings = '';
var cheeseLevelToppings = '';
var cheeseLevelCheese= '';

var sauceCalories = 0; 
var sauceProtein = 0; 
var sauceCarbs = 0; 
var sauceFats = 0; 

sizeSelect.addEventListener('change', function () {
    sauceOptionDiv.innerHTML = '';
    pizzaOption.innerHTML = '';
    crustSelected = false; 
    toppingsPizzaBtn.style.backgroundColor = '#e27704'
    cheesePizzaBtn.style.backgroundColor = '#e27704';
    document.getElementById('chosen-pizza').innerHTML = "";
    selectedSize = sizeSelect.value;
    sizeSelected = true; 
    console.log(selectedSize);
    
    selectedCrust = ''; 
    
    totalCalories = 0;
    totalProtein = 0;
    totalFats = 0;
    totalCarbs = 0;
    
    if (selectedSize === 'Personal') {
        addCrustOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Hand Tossed', value: 'handTossed' }]);
    } else if (selectedSize === 'Small') {
        addCrustOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
        { text: 'Gluten Free Crust', value: 'glutenFreeCrust' }
    ]);
} else if (selectedSize === 'Medium') {
    addCrustOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
    { text: 'Original Hand Tossed', value: 'originalHandTossed' },
    { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
    { text: 'Handmade Pan', value: 'handmadePan' }
]);
} else if (selectedSize === 'Large') {
    addCrustOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
    { text: 'Original Hand Tossed', value: 'originalHandTossed' },
    { text: 'Brooklyn Crust', value: 'brooklynCrust' },
    { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' }
]);
} else if (selectedSize === 'XLarge') {
    addCrustOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
    { text: 'Original Hand Tossed', value: 'originalHandTossed' },
    { text: 'Brooklyn Crust', value: 'brooklynCrust' }
]);
}

document.getElementById('crust-dropdown').style.display = 'block';
});

function addCrustOptions(crustOptions) {
    var crustSelect = document.getElementById('crust-select');
    crustSelect.innerHTML = ''; // Clear previous options
    
    crustOptions.forEach(function (option) {
        var crustOption = document.createElement('option');
        crustOption.textContent = option.text;
        crustOption.value = option.value; 
        crustSelect.appendChild(crustOption);
    });
}

var crustSelect = document.getElementById('crust-select');
crustSelect.addEventListener('change', function () {
    pizzaOption.innerHTML = '';
    sauceOptionDiv.innerHTML = '';
    toppingsPizzaBtn.style.backgroundColor = '#e27704'
    cheesePizzaBtn.style.backgroundColor = '#e27704';
    document.getElementById('chosen-pizza').innerHTML = "";
    selectedCrust = crustSelect.value; 
    crustSelected = true; 
    calculateCrustSize(selectedSize, selectedCrust);
});

function calculateCrustSize(size, crust) {
    var info = crustSizeInfo[size][crust];
    totalCalories = info.calories;
    totalProtein = info.protein;
    totalFats = info.fats;
    totalCarbs = info.carbs;
    console.log("calories from size crust: " + totalCalories);
}

var cheesePizzaBtn = document.getElementById('cheese-pizza-btn');
var toppingsPizzaBtn = document.getElementById('toppings-pizza-btn');
var pizzaOption = document.querySelector('.pizzaOption'); //where the cheese options appear 

cheesePizzaBtn.addEventListener('click', function() {
    pizzaOption.innerHTML = '';
    sauceOptionDiv.innerHTML = ''; 
    if (!sizeSelected || !crustSelected) {
        document.getElementById('chosen-pizza').innerHTML = "Please select a size and crust first";
        return;
    }
    
    var cheesePizzaDiv = document.createElement('div');
    cheesePizzaDiv.innerHTML = ''; 
    cheeseOrToppings = 'cheese';
    document.getElementById('chosen-pizza').innerHTML = "You have selected a cheese-only pizza";
    cheesePizzaBtn.style.backgroundColor = '#3b3e41';
    toppingsPizzaBtn.style.backgroundColor = '#e27704'
    
    cheesePizzaDiv.classList.add('select-cheese'); 
    cheesePizzaDiv.innerHTML = `
    <select id="cheese-select" class="form-select font4 p-2" aria-label="Default select">
    <option class="grey-border" selected>Select your cheese</option>
    <option value="CLight">Light Cheese</option>
    <option value="CRegular">Regular Cheese</option>
    <option value="CExtra">Extra Cheese</option>
    <option value="CDouble">Double Cheese</option>
    <option value="CTriple">Triple Cheese</option>
    </select>
    `;
    pizzaOption.appendChild(cheesePizzaDiv);
});

toppingsPizzaBtn.addEventListener('click', function() {
    pizzaOption.innerHTML = '';
    sauceOptionDiv.innerHTML = '';
    if (!sizeSelected || !crustSelected) {
        document.getElementById('chosen-pizza').innerHTML = "Please select a size and crust first";
        return;
    }
    cheeseOrToppings = 'toppings';
    document.getElementById('chosen-pizza').innerHTML = "You have selected a pizza with toppings";
    toppingsPizzaBtn.style.backgroundColor = '#3b3e41';
    cheesePizzaBtn.style.backgroundColor = '#e27704'
    
    var toppingPizzaDiv = document.createElement('div');
    toppingPizzaDiv.classList.add('select-cheese-toppings'); 
    toppingPizzaDiv.innerHTML = `
    <select id="cheese-select-toppings" class="form-select font4 p-2" aria-label="Default select">
    <option class="Tgrey-border" selected>Select your cheese</option>
    <option value="TLight">Light Cheese</option>
    <option value="TRegular">Regular Cheese</option>
    <option value="TExtra">Extra Cheese</option>
    <option value="TDouble">Double Cheese</option>
    <option value="TTriple">Triple Cheese</option>
    </select>
    `;
    pizzaOption.appendChild(toppingPizzaDiv);
});



function calculateCheeseT() {
    var info = cheeseDataT[selectedSize][selectedCrust][cheeseLevelToppings];
    cheeseCalories += info.calories;
    cheeseProtein += info.protein;
    cheeseFats += info.fats;
    cheeseCarbs += info.carbs;
    console.log("calories from cheese: " + cheeseCalories);
};

function calculateCheeseCO() {
    var info = cheeseDataCO[selectedSize][selectedCrust][cheeseLevelCheese];
    cheeseCalories += info.calories;
    cheeseProtein += info.protein;
    cheeseFats += info.fats;
    cheeseCarbs += info.carbs;
    console.log("calories from cheese: " + cheeseCalories);
};

pizzaOption.addEventListener('change', function(event) {
    cheeseCalories = 0; 
    cheeseProtein = 0; 
    cheeseFats = 0; 
    cheeseCarbs = 0; 
    
    const target = event.target;
    
    if (target.id === 'cheese-select-toppings') {
        cheeseLevelToppings = target.value; 
        console.log(cheeseLevelToppings);
        calculateCheeseT(cheeseLevelToppings); 
    } else if (target.id === 'cheese-select') {   
        cheeseLevelCheese = target.value; 
        console.log(cheeseLevelCheese);
        calculateCheeseCO(cheeseLevelCheese); 
    }
    insertSauceOptions();
});


function insertSauceOptions() {
    sauceOptionDiv.innerHTML = '';
    var sauceOptions = document.createElement('div');
    sauceOptions.classList.add('select-sauce');
    
    // sauceOptions.innerHTML = `
    // <select id="sauce-select" class="form-select font4 p-2" aria-label="Default select">
    // <option class="grey-border" selected>Select your sauce</option>
    // </select>
    // `;
    sauceOptionDiv.appendChild(sauceOptions);
    
    if (selectedSize === 'Personal') {
        addSauceOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Hand Tossed', value: 'handTossed' }]);
    } else if (selectedSize === 'Small') {
        addSauceOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
        { text: 'Gluten Free Crust', value: 'glutenFreeCrust' }]);
    } else if (selectedSize === 'Medium') {
        addSauceOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
        { text: 'Handmade Pan', value: 'handmadePan' }]);
    } else if (selectedSize === 'Large') {
        addSauceOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Brooklyn Crust', value: 'brooklynCrust' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' }]);
    } else if (selectedSize === 'XLarge') {
        addSauceOptions([{ text: 'Select your crust', value: 'crustPlaceholder' },
        { text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Brooklyn Crust', value: 'brooklynCrust' }]);
    }   
}


function addSauceOptions(sauceOptions) {
    var selectSauce = document.getElementById('select-sauce');
    selectSauce.innerHTML = ''; // Clear previous options
    
    selectSauce.forEach(function (option) {
        var sauceOption = document.createElement('option');
        sauceOption.textContent = option.text;
        sauceOption.value = option.value; 
        selectSauce.appendChild(sauceOption);
    });
}
