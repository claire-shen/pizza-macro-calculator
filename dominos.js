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

sizeSelect.addEventListener('change', function () {
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
    if (!sizeSelected || !crustSelected) {
        document.getElementById('chosen-pizza').innerHTML = "Please select a size and crust first";
        return;
    }
    cheeseOrToppings = 'cheese';
    document.getElementById('chosen-pizza').innerHTML = "You have selected a cheese-only pizza";
    cheesePizzaBtn.style.backgroundColor = '#3b3e41';
    toppingsPizzaBtn.style.backgroundColor = '#e27704'
    
    var cheesePizzaDiv = document.createElement('div');
    cheesePizzaDiv.classList.add('select-cheese'); 
    cheesePizzaDiv.innerHTML = `
    <select id="cheese-select" class="form-select font4 p-2" aria-label="Default select">
    <option class="grey-border" selected>Select your size</option>
    <option value="CLight">Light Cheese</option>
    <option value="CRegular">Regular Cheese</option>
    <option value="CExtra">Extra Cheese</option>
    <option value="CDouble">Double Cheese</option>
    <option value="CTriple">Triple Cheese</option>
    </select>
    `;
    pizzaOption.innerHTML = '';
    pizzaOption.appendChild(cheesePizzaDiv);
    
    var cheeseListener = document.getElementById('cheese-select');
    cheeseListener.addEventListener('change', function() {
        cheeseCalories = 0; 
        cheeseProtein = 0; 
        cheeseFats = 0; 
        cheeseCarbs = 0; 
        cheeseLevelCheese = cheeseListener.value;
        console.log(cheeseLevelCheese);
        calculateCheeseCO(cheeseLevelCheese); 
    });
});

toppingsPizzaBtn.addEventListener('click', function() {
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
    pizzaOption.innerHTML = '';
    pizzaOption.appendChild(toppingPizzaDiv);
    
    var cheeseListener = document.getElementById('cheese-select-toppings');
    cheeseListener.addEventListener('change', function() {
        
        cheeseCalories = 0; 
        cheeseProtein = 0; 
        cheeseFats = 0; 
        cheeseCarbs = 0; 
        cheeseLevelToppings = cheeseListener.value;
        console.log(cheeseLevelToppings);
        calculateCheeseT(cheeseLevelToppings); 
    });
    
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
