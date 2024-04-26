var totalCalories = 0;
var totalProtein = 0;
var totalCarbs = 0; 
var totalFats = 0;

var sizeSelect = document.getElementById('size-select');
var selectedCrust = ''; 
var selectedSize = '';
var crustSelected = false;
var sizeSelected = false;

var crustSizeInfo = {
    'Personal': {
        'handTossed': { calories: 144, protein: 12, fats: 5, carbs: 66 }
    },
    'Small': {
        'originalHandTossed': { calories: 780, protein: 24, fats: 9, carbs: 138 },
        'crunchyThinCrust': { calories: 440, protein: 12, fats: 18, carbs: 56 },
        'glutenFreeCrust': { calories: 390, protein: 6, fats: 4.5, carbs: 84 }
    },
    'Medium': {
        'originalHandTossed': { calories: 960, protein: 32, fats: 12, carbs: 184 },
        'crunchyThinCrust': { calories: 640, protein: 16, fats: 28, carbs: 88 },
        'handmadePan': { calories: 1520, protein: 40, fats: 64, carbs: 208 }
    },
    'Large': {
        'originalHandTossed': { calories: 1360, protein: 40, fats: 16, carbs: 248 },
        'crunchyThinCrust': { calories: 1360, protein: 40, fats: 16, carbs: 248 },
        'brooklynCrust': { calories: 780, protein: 24, fats: 9, carbs: 138 }
    },
    'XLarge': {
        'originalHandTossed': { calories: 1800, protein: 60, fats: 25, carbs: 320 },
        'brooklynCrust': { calories: 780, protein: 24, fats: 9, carbs: 138 }
    }
};

sizeSelect.addEventListener('change', function () {
    selectedSize = sizeSelect.value;
    sizeSelected = true; 
    console.log(selectedSize);

    selectedCrust = ''; // Reset selectedCrust when size changes
    selectedCrust.innerHTML = '';

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
    selectedCrust = crustSelect.value; 
    crustSelected = true; 
    calculateCrustSize(selectedSize, selectedCrust);
});

function calculateCrustSize(size, crust) {
    if (size in crustSizeInfo && crust in crustSizeInfo[size]) {
        var info = crustSizeInfo[size][crust];
        totalCalories = info.calories;
        totalProtein = info.protein;
        totalFats = info.fats;
        totalCarbs = info.carbs;
    } else {
        console.log("Invalid size or crust selection");
    }
    console.log(totalCalories);
}

var cheesePizzaBtn = document.getElementById('cheese-pizza-btn');
var toppingsPizzaBtn = document.getElementById('toppings-pizza-btn');
var pizzaOption = document.querySelector('.pizzaOption'); 

cheesePizzaBtn.addEventListener('click', function() {
    if (!sizeSelected || !crustSelected) {
        document.getElementById('chosen-pizza').innerHTML = "Please select a size and crust first";
        return;
    }
    document.getElementById('chosen-pizza').innerHTML = "You have selected a cheese-only pizza";
    cheesePizzaBtn.style.backgroundColor = '#3b3e41';
    toppingsPizzaBtn.style.backgroundColor = '#e27704'

    var cheesePizzaDiv = document.createElement('div');
    cheesePizzaDiv.classList.add('select-cheese'); 
    cheesePizzaDiv.innerHTML = `
        <select id="cheese-select" class="form-select font4 p-2" aria-label="Default select">
            <option class="grey-border" selected>Select your size</option>
            <option value="Light">Light Cheese</option>
            <option value="Regular">Regular Cheese</option>
            <option value="Extra">Extra Cheese</option>
            <option value="Double">Double Cheese</option>
            <option value="Triple">Triple Cheese</option>
        </select>
    `;
    pizzaOption.innerHTML = '';
    pizzaOption.appendChild(cheesePizzaDiv);
});

toppingsPizzaBtn.addEventListener('click', function() {
    if (!sizeSelected || !crustSelected) {
        document.getElementById('chosen-pizza').innerHTML = "Please select a size and crust first";
        return;
    }
    document.getElementById('chosen-pizza').innerHTML = "You have selected a pizza with toppings";
    toppingsPizzaBtn.style.backgroundColor = '#3b3e41';
    cheesePizzaBtn.style.backgroundColor = '#e27704'

    var toppingPizzaDiv = document.createElement('div');
    toppingPizzaDiv.classList.add('select-cheese'); 
    toppingPizzaDiv.innerHTML = `
        <select id="cheese-select" class="form-select font4 p-2" aria-label="Default select">
            <option class="grey-border" selected>Select your size</option>
            <option value="Light">Light Cheese</option>
            <option value="Regular">Regular Cheese</option>
            <option value="Extra">Extra Cheese</option>
            <option value="Double">Double Cheese</option>
            <option value="Triple">Triple Cheese</option>
        </select>
    `;
    pizzaOption.innerHTML = '';
    pizzaOption.appendChild(toppingPizzaDiv);
});


