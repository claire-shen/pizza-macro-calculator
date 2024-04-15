var totalCalories = 0;
var totalProtein = 0;
var personalPizza = false;
var smallPizza = false;
var mediumPizza = false;
var largePizza = false;

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
        crustOption.value = option.value; // Assigning the value
        crustSelect.appendChild(crustOption);
    });
}

var crustSelect = document.getElementById('crust-select');
crustSelect.addEventListener('change', function () {
    selectedCrust = crustSelect.value; // Store the selected crust in the global variable
    console.log(selectedCrust);
});


