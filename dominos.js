import { cheeseDataT } from './cheeseData.js';

var totalCalories = 0;
var totalProtein = 0;
var totalCarbs = 0; 
var totalFats = 0;

var sizeSelect = document.getElementById('size-select');
var selectedCrust = ''; 
var selectedSize = '';
var crustSelected = false;
var sizeSelected = false;

var cheeseOrToppings = '';
var cheeseLevelToppings = '';
var cheeseLevelCheese= '';

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
        cheeseLevelToppings = cheeseListener.value;
        console.log(cheeseLevelToppings);
        calculateCheeseT(cheeseLevelToppings); 
    });
    
});


function calculateCheeseT(level) {
    const info = cheeseDataT[selectedSize][selectedCrust][cheeseLevelToppings];
    totalCalories += info.calories;
    totalProtein += info.protein;
    totalFats += info.fats;
    totalCarbs += info.carbs;
    console.log(totalCalories);
}


function calculateCheeseCO(level) {
    if (selectedSize == 'Personal' && selectedCrust == 'handTossed') {
        if (cheeseLevel == 'CLight') {
            totalCalories += 60;
            totalProtein += 6;
            totalFats += 4;
            totalCarbs += 2;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 100;
            totalProtein += 8;
            totalFats += 7;
            totalCarbs += 2;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 140;
            totalProtein += 12;
            totalFats += 10;
            totalCarbs += 2;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 200;
            totalProtein += 18;
            totalFats += 14;
            totalCarbs += 4;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 260;
            totalProtein += 22;
            totalFats += 18;
            totalCarbs += 4;
        } 
    }
    
    if (selectedSize == 'Small' && selectedCrust == 'glutenFreeCrust') {
        if (cheeseLevel == 'CLight') {
            totalCalories += 210;
            totalProtein += 18;
            totalFats += 13.5;
            totalCarbs += 3;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 420;
            totalProtein += 33;
            totalFats += 27;
            totalCarbs += 6;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 570;
            totalProtein += 48;
            totalFats += 39;
            totalCarbs += 9;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 570;
            totalProtein += 48;
            totalFats += 39;
            totalCarbs += 9;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 720;
            totalProtein += 60;
            totalFats += 48;
            totalCarbs += 12;
        }
    }
    
    
    if (selectedSize == 'Small' && selectedCrust == 'crunchyThinCrust') {
        if (cheeseLevel == 'CLight') {
            totalCalories += 200;
            totalProtein += 16;
            totalFats += 14;
            totalCarbs += 4;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 400;
            totalProtein += 36;
            totalFats += 28;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 560;
            totalProtein += 48;
            totalFats += 40;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 560;
            totalProtein += 48;
            totalFats += 40;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 720;
            totalProtein += 60;
            totalFats += 48;
            totalCarbs += 12;
        }
    }
    
    
    if (selectedSize == 'Small' && selectedCrust == 'originalHandTossed') {
        if (cheeseLevel == 'CLight') {
            totalCalories += 210;
            totalProtein += 18;
            totalFats += 15;
            totalCarbs += 6;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 420;
            totalProtein += 36;
            totalFats += 27;
            totalCarbs += 6;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 600;
            totalProtein += 48;
            totalFats += 36;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 600;
            totalProtein += 48;
            totalFats += 36;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 720;
            totalProtein += 60;
            totalFats += 48;
            totalCarbs += 12;
        }            
    }        
    
    if (selectedSize === 'Medium' && selectedCrust === 'originalHandTossed') {
        if (cheeseLevel == 'CLight') {
            totalCalories += 280;
            totalProtein += 24;
            totalFats += 20;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 640;
            totalProtein += 48;
            totalFats += 40;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 800;
            totalProtein += 72;
            totalFats += 56;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 800;
            totalProtein += 72;
            totalFats += 56;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1040;
            totalProtein += 88;
            totalFats += 72;
            totalCarbs += 16;
        }            
    }
    
    if ((selectedSize == 'Medium') && (selectedCrust == 'crunchyThinCrust')){
        if (cheeseLevel == 'CLight') {
            totalCalories += 280;
            totalProtein += 24;
            totalFats += 20;
            totalCarbs += 4;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 600;
            totalProtein += 52;
            totalFats += 40;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 840;
            totalProtein += 68;
            totalFats += 56;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 840;
            totalProtein += 68;
            totalFats += 56;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1040;
            totalProtein += 84;
            totalFats += 68;
            totalCarbs += 16;
        }            
    } 
    
    if ((selectedSize == 'Medium') && (selectedCrust == 'handmadePan')){
        if (cheeseLevel == 'CLight') {
            totalCalories += 560;
            totalProtein += 48;
            totalFats += 40;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 640;
            totalProtein += 48;
            totalFats += 40;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 720;
            totalProtein += 56;
            totalFats += 48;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 880;
            totalProtein += 72;
            totalFats += 56;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 960;
            totalProtein += 80;
            totalFats += 64;
            totalCarbs += 16;
        } 
    }
    
    if ((selectedSize == 'Large') && (selectedCrust == 'originalHandTossed')){
        if (cheeseLevel == 'CLight') {
            totalCalories += 400;
            totalProtein += 32;
            totalFats += 28;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 880;
            totalProtein += 72;
            totalFats += 56;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 1120;
            totalProtein += 96;
            totalFats += 80;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 1120;
            totalProtein += 96;
            totalFats += 80;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1440;
            totalProtein += 120;
            totalFats += 96;
            totalCarbs += 24;
        }                          
    }
    
    if ((selectedSize == 'Large') && (selectedCrust == 'brooklynCrust')){
        if (cheeseLevel == 'CLight') {
            totalCalories += 420;
            totalProtein += 36;
            totalFats += 27;
            totalCarbs += 6;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 840;
            totalProtein += 72;
            totalFats += 60;
            totalCarbs += 12;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 1140;
            totalProtein += 96;
            totalFats += 78;
            totalCarbs += 18;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 1140;
            totalProtein += 96;
            totalFats += 78;
            totalCarbs += 18;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1440;
            totalProtein += 120;
            totalFats += 96;
            totalCarbs += 24;
        }     
    }
    
    if ((selectedSize == 'Large') && (selectedCrust == 'crunchyThinCrust')){
        if (cheeseLevel == 'CLight') {
            totalCalories += 400;
            totalProtein += 32;
            totalFats += 28;
            totalCarbs += 8;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 880;
            totalProtein += 72;
            totalFats += 56;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 1120;
            totalProtein += 96;
            totalFats += 80;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 1120;
            totalProtein += 96;
            totalFats += 80;
            totalCarbs += 16;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1440;
            totalProtein += 120;
            totalFats += 96;
            totalCarbs += 24;
        }                           
    }
    
    if ((selectedSize == 'XLarge') && (selectedCrust == 'originalHandTossed')) {
        if (cheeseLevel == 'CLight') {
            totalCalories += 500;
            totalProtein += 40;
            totalFats += 35;
            totalCarbs += 10;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 1100;
            totalProtein += 90;
            totalFats += 70;
            totalCarbs += 20;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 1500;
            totalProtein += 120;
            totalFats += 100;
            totalCarbs += 20;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 1500;
            totalProtein += 120;
            totalFats += 100;
            totalCarbs += 20;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1800;
            totalProtein += 150;
            totalFats += 120;
            totalCarbs += 30;
        }                
    }
    
    if ((selectedSize == 'XLarge') && (selectedCrust == 'brooklynCrust')) {
        if (cheeseLevel == 'CLight') {
            totalCalories += 540;
            totalProtein += 42;
            totalFats += 36;
            totalCarbs += 6;
        } else if (cheeseLevel == 'CRegular') {
            totalCalories += 1080;
            totalProtein += 90;
            totalFats += 72;
            totalCarbs += 18;
        } else if (cheeseLevel == 'CExtra') {
            totalCalories += 1500;
            totalProtein += 126;
            totalFats += 102;
            totalCarbs += 24;
        } else if (cheeseLevel == 'CDouble') {
            totalCalories += 1500;
            totalProtein += 126;
            totalFats += 102;
            totalCarbs += 24;
        } else if (cheeseLevel == 'CTriple') {
            totalCalories += 1860;
            totalProtein += 156;
            totalFats += 126;
            totalCarbs += 30;
        }               
    }
}







