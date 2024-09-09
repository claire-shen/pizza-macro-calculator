import { cheeseDataT, cheeseDataCO, sauceInfo, crustSizeInfo, toppingInfo } from './dominosData.js';

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
var selectedSauce = '';
var crustSelected = false;
var sauceSelected = false;
var sizeSelected = false;

var cheeseOrToppings = '';
var cheeseLevelToppings = '';
var cheeseLevelCheese= '';

var sauceCalories = 0; 
var sauceProtein = 0; 
var sauceCarbs = 0; 
var sauceFats = 0; 

var toppingCalories = 0; 
var toppingProtein = 0; 
var toppingCarbs = 0; 
var toppingFats = 0; 

let selectedToppings = [];

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

    sauceCalories = 0; 
    sauceProtein = 0; 
    sauceCarbs = 0; 
    sauceFats = 0; 
    
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
    
    sauceOptions.innerHTML = `
    <select id="sauce-select" class="form-select font4 p-2" aria-label="Default select">
    <option class="grey-border" selected>Select your sauce</option>
    </select>
    `;
    sauceOptionDiv.appendChild(sauceOptions);

    var sauceSelect = document.getElementById('sauce-select');
    sauceSelect.addEventListener('change', function () {
        //to do: reset things after if changed again
        selectedSauce = sauceSelect.value; 
        sauceSelected = true; 
        calculateSauce(selectedSize, selectedCrust, selectedSauce);
        console.log(selectedSauce);

        //showing toppings
        if (cheeseOrToppings === "toppings") {
            addToppings();
            // Add event listeners to each checkbox
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', updateToppings);
            });
        }
        
        
    });
    
    if (selectedSize === 'Personal') {
        addSauceOptions([{ text: 'Select your sauce', value: 'saucePlaceholder' },
        { text: 'Pizza Sauce', value: 'pizzaSauce' },
        { text: 'BBQ Sauce', value: 'bbqSauce' }]);
    } else if (selectedSize === 'Small') {
        addSauceOptions([{ text: 'Select your sauce', value: 'saucePlaceholder' },
        { text: 'Pizza Sauce', value: 'pizzaSauce' },
        { text: 'Alfredo Sauce', value: 'alfredoSauce' },
        { text: 'BBQ Sauce', value: 'bbqSauce' },
        { text: 'Garlic Parmesan White Sauce', value: 'gpwSauce' },
        { text: 'Hearty Marinara Sauce', value: 'hmSauce' },
        { text: 'Ranch Sauce', value: 'ranchSauce' },
        { text: 'Butter Chicken Sauce', value: 'bcSauce' }]);
    } else if (selectedSize === 'Medium') {
        addSauceOptions([{ text: 'Select your sauce', value: 'saucePlaceholder' },
        { text: 'Pizza Sauce', value: 'pizzaSauce' },
        { text: 'Alfredo Sauce', value: 'alfredoSauce' },
        { text: 'BBQ Sauce', value: 'bbqSauce' },
        { text: 'Garlic Parmesan White Sauce', value: 'gpwSauce' },
        { text: 'Hearty Marinara Sauce', value: 'hmSauce' },
        { text: 'Ranch Sauce', value: 'ranchSauce' },
        { text: 'Butter Chicken Sauce', value: 'bcSauce' }]);
    } else if (selectedSize === 'Large') {
        addSauceOptions([{ text: 'Select your sauce', value: 'saucePlaceholder' },
        { text: 'Pizza Sauce', value: 'pizzaSauce' },
        { text: 'Alfredo Sauce', value: 'alfredoSauce' },
        { text: 'BBQ Sauce', value: 'bbqSauce' },
        { text: 'Garlic Parmesan White Sauce', value: 'gpwSauce' },
        { text: 'Hearty Marinara Sauce', value: 'hmSauce' },
        { text: 'Ranch Sauce', value: 'ranchSauce' },
        { text: 'Butter Chicken Sauce', value: 'bcSauce' }]);
    } else if (selectedSize === 'XLarge') {
        addSauceOptions([{ text: 'Select your sauce', value: 'saucePlaceholder' },
        { text: 'Pizza Sauce', value: 'pizzaSauce' },
        { text: 'Alfredo Sauce', value: 'alfredoSauce' },
        { text: 'BBQ Sauce', value: 'bbqSauce' },
        { text: 'Garlic Parmesan White Sauce', value: 'gpwSauce' },
        { text: 'Hearty Marinara Sauce', value: 'hmSauce' },
        { text: 'Ranch Sauce', value: 'ranchSauce' },
        { text: 'Butter Chicken Sauce', value: 'bcSauce' }]);
    }   
};

function addSauceOptions(sauceOptions) {
    var selectSauce = document.getElementById('sauce-select');
    selectSauce.innerHTML = ''; // Clear previous options
    
    sauceOptions.forEach(function (option) {
        var sauceOption = document.createElement('option');
        sauceOption.textContent = option.text;
        sauceOption.value = option.value; 
        selectSauce.appendChild(sauceOption);
    });
};

function calculateSauce(size, crust, sauce) {
    var info = sauceInfo[size][crust][sauce];
    sauceCalories = info.calories;
    sauceProtein = info.protein;
    sauceFats = info.fats;
    sauceCarbs = info.carbs;
    console.log("calories from sauce: " + sauceCalories);
};

function addToppings() {
    var toppingsDiv = document.getElementById('toppingsSection');
    var toppingsHTML= `
    <div class="row mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div class="col-12 toppings w-50 pt-3 pb-1 mb-4 font2 d-flex justify-content-center align-items-center" style="text-align: center;">
              <h4>Select Your Toppings</h4>
          </div>
          
          <div class="col-12 d-flex justify-content-center mb-4">
              <div class="row justify-content-center">
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="whiteCheddarCheese"><label for="whiteCheddarCheese";" >White Cheddar Cheese</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="bacon"><label for="bacon">Bacon</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="beefCrumble"><label for="beefCrumble">Beef Crumble</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="blackOlives"><label for="blackOlives">Black Olives</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="cheddarCheese"><label for="cheddarCheese">Cheddar Cheese</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="chicken"><label for="chicken">Chicken</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="fetaCheese"><label for="fetaCheese">Feta Cheese</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="greenPeppers"><label for="greenPeppers">Green Peppers</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="ham"><label for="ham">Ham</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="bananaPeppers"><label for="bananaPeppers">Banana Peppers</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="jalapenoPeppers"><label for="jalapenoPeppers">Jalapeno Peppers</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="mushrooms"><label for="mushrooms">Mushrooms</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="onions"><label for="onions">Onions</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="pepperoni"><label for="pepperoni">Pepperoni</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="xlPepperoni"><label for="xlPepperoni">Extra-Large Pepperoni</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="phillySteak"><label for="phillySteak">Philly Steak</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="pineapple"><label for="pineapple">Pineapple</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="provoloneCheese"><label for="provoloneCheese">Provolone Cheese</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="salami"><label for="salami">Salami</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="sausage"><label for="sausage">Sausage</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="parmesanAsiago"><label for="parmesanAsiago">Parmesan Asiago</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="tomatoes"><label for="tomatoes">Tomatoes</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="anchovies"><label for="anchovies">Anchovies</label></div>
                  <div class="col-6 col-md-2 custom-checkbox"><input type="checkbox" id="greenOlives"><label for="greenOlives">Green Olives</label></div>
              </div>
          </div>
      </div>`;

    toppingsDiv.innerHTML = toppingsHTML;
};


function updateToppings() {
    selectedToppings = [];
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Loop through checkboxes and add checked ones to the array
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.id); 
        }
    });
    
    // calculate here
    console.log('Selected Toppings:', selectedToppings);
    calculateToppings();
}

function calculateToppings(){
    toppingCalories = 0; 
    toppingProtein = 0; 
    toppingCarbs = 0; 
    toppingFats = 0; 

    selectedToppings.forEach(topping => {
        if (toppingInfo[topping]) {
            const info = toppingInfo[topping];
            toppingCalories += info.calories;
            toppingProtein += info.protein;
            toppingCarbs += info.carbs;
            toppingFats += info.fats;
        }
    });

    console.log("calories from toppings: " + sauceCalories);

}
