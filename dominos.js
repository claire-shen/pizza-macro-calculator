var totalCalories = 0;
var totalProtein = 0;
var totalCarbs = 0; 
var totalFats = 0;

var sizeSelect = document.getElementById('size-select');
var selectedCrust = ''; // Global variable to store selected crust

sizeSelect.addEventListener('change', function () {
    var selectedOption = sizeSelect.value;
    console.log(selectedOption);

    selectedCrust = ''; // Reset selectedCrust when size changes
    selectedCrust.innerHTML = '';

    if (selectedOption === 'Personal') {
        addCrustOptions([{ text: 'Hand Tossed', value: 'handTossed' }]);
    } else if (selectedOption === 'Small') {
        addCrustOptions([{ text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
        { text: 'Gluten Free Crust', value: 'glutenFreeCrust' }
        ]);
    } else if (selectedOption === 'Medium') {
        addCrustOptions([{ text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Hand Tossed Thin', value: 'handTossedThin' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' },
        { text: 'Handmade Pan', value: 'handmadePan' }
        ]);
    } else if (selectedOption === 'Large') {
        addCrustOptions([{ text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Hand Tossed Thin', value: 'handTossedThin' },
        { text: 'Crunchy Thin Crust', value: 'crunchyThinCrust' }
        ]);
    } else if (selectedOption === 'XLarge') {
        addCrustOptions([{ text: 'Original Hand Tossed', value: 'originalHandTossed' },
        { text: 'Hand Tossed Thin', value: 'handTossedThin' }
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
    selectedCrust = crustSelect.value; // Store the selected crust in the global variable
    console.log(selectedCrust);
});

var cheesePizzaBtn = document.getElementById('cheese-pizza-btn');
var toppingsPizzaBtn = document.getElementById('toppings-pizza-btn');
var pizzaOption = document.querySelector('.pizzaOption'); 

cheesePizzaBtn.addEventListener('click', function() {
    document.getElementById('chosen-pizza').innerHTML = "You have selected a cheese-only pizza";
    cheesePizzaBtn.style.backgroundColor = '#3b3e41';
    toppingsPizzaBtn.style.backgroundColor = '#e27704'

    // Create a new div element for cheese pizza
    var cheesePizzaDiv = document.createElement('div');
    cheesePizzaDiv.classList.add('select-cheese'); // Add the necessary class
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
    pizzaOption.appendChild(cheesePizzaDiv); // Append new div to container
});

toppingsPizzaBtn.addEventListener('click', function() {
    document.getElementById('chosen-pizza').innerHTML = "You have selected a pizza with toppings";
    toppingsPizzaBtn.style.backgroundColor = '#3b3e41';
    cheesePizzaBtn.style.backgroundColor = '#e27704'
});

