window.onload = pageload;

function pageload() {

    // Raw data for ingredients list in dropdowns on first page
    var foodList = [
        {
            food_id: "meat",
            category: "Meat",
            items: [
                {id: "meat_1", value: "Chicken"},
                {id: "meat_2", value: "Lamb"},
                {id: "meat_3", value: "Fish"},
                {id: "meat_4", value: "Pork"},
                {id: "meat_5", value: "Turkey"},
                {id: "meat_6", value: "Eggs"}
            ],
            selectedItems: []
        },
        {
            food_id: "veg",
            category: "Vegetables",
            items: [
                {id: "veg_1", value: "Onions"},
                {id: "veg_2", value: "Tomatoes"},
                {id: "veg_3", value: "Brocolli"},
                {id: "veg_4", value: "Lettuce"},
                {id: "veg_5", value: "Bell Pepper"},
                {id: "veg_6", value: "Carrots"},
                {id: "veg_7", value: "Spinach"},
                {id: "veg_8", value: "Cucumber"},
                {id: "veg_9", value: "Potato"},
                {id: "veg_10", value: "Pumpkin"},
                {id: "veg_11", value: "Cabbage"},
                {id: "veg_12", value: "Cauliflower"},
            ],
            selectedItems: []
        },
        {
            food_id: "fruit",
            category: "Fruits",
            items: [
                {id: "fruit_1", value: "Apple"},
                {id: "fruit_2", value: "Strawberry"},
                {id: "fruit_3", value: "Banana"},
                {id: "fruit_4", value: "Grapes"},
                {id: "fruit_5", value: "Avocado"},
                {id: "fruit_6", value: "Orange"},
                {id: "fruit_7", value: "Pineapple"},
                {id: "fruit_8", value: "Mango"},
                {id: "fruit_9", value: "Lemon"},
                {id: "fruit_10", value: "Berries"},
                {id: "fruit_11", value: "Kiwi"},
                {id: "fruit_12", value: "Pomegranate"},
            ],
            selectedItems: []
        }, 
        {
            food_id: "dairy",
            category: "Dairy",
            items: [
                {id: "dairy_1", value: "Milk"},
                {id: "dairy_2", value: "Butter"},
                {id: "dairy_3", value: "Yogurt"},
                {id: "dairy_4", value: "Cheese"},
                {id: "dairy_5", value: "Custard"},
                {id: "dairy_6", value: "Cream"}
            ],
            selectedItems: []
        },
        {
            food_id: "frozen",
            category: "Frozen",
            items: [
                {id: "frozen_1", value: "Peas"},
                {id: "frozen_2", value: "Mixed veggies"},
                {id: "frozen_3", value: "Patties"},
                {id: "frozen_4", value: "Sweet corns"},
                {id: "frozen_5", value: "Beans"}
            ],
            selectedItems: []
        },
        {
            food_id: "bread",
            category: "Breads",
            items: [
                {id: "bread_1", value: "Wrap"},
                {id: "bread_2", value: "Burger"},
                {id: "bread_3", value: "Bagel"},
                {id: "bread_4", value: "Bread"},
                {id: "bread_5", value: "Naan"}
            ],
            selectedItems: []
        }
    ];

    // Raw data for recipes list
    var recipes = {
        food: [
            {
                recipe_id: "recipie-f_1",
                recipe_name: "Burger",
                ingredients: ["meat_1","meat_2","meat_3","meat_4","meat_5","meat_6","veg_1","veg_2","veg_4","veg_5","veg_6","veg_7","veg_8","veg_9", "dairy_2", "dairy_4", "frozen_2","frozen_3", "frozen_4", "bread_2"],
                recipe_pointers: [
                    "Prepare the veggie/chicken mixture as you desire.",
                    "Cut the burger in half",
                    "Start placing all your ingredients. Adding patty is a choice.",
                    "If you have butter, toast burger on a pan.",
                    "Close the bun. Serve with some hot sauce."
                ] 
            },
            {
                recipe_id: "recipie-f_2",
                recipe_name: "Bagel",
                ingredients: ["meat_6","veg_1","veg_2","veg_4","veg_5","veg_6","veg_7","veg_8","veg_9", "dairy_2", "dairy_4", "frozen_2","frozen_3", "frozen_4", "bread_3"],
                recipe_pointers: [
                    "Heat the bagel/ Toast it with some butter on a pan.",
                    "Add overhard eggs/veggie mixture/patty in between the bagel covers.",
                    "Serve with some condiments and enjoy!!."
                ] 
            },
            {
                recipe_id: "recipie-f_3",
                recipe_name: "Sandwich",
                ingredients: ["meat_1","meat_2","meat_3","meat_4","meat_5","meat_6","veg_1","veg_2","veg_4","veg_5","veg_6","veg_7","veg_8","veg_9", "dairy_2", "dairy_4", "frozen_2","frozen_3", "frozen_4", "bread_2", "fruit_5"],
                recipe_pointers: [
                    "Prepare the veggie/chicken mixture as you desire.",
                    "Take two breads and toast them or not!! As you wish.",
                    "Start placing all your ingredients. Adding patty is a choice. Avovado and turkey is a good combination though.",
                    "Close the sandwich. Serve with some hot sauce."
                ] 
            },
            {
                recipe_id: "recipie-f_4",
                recipe_name: "Wrap",
                ingredients: ["meat_1","meat_2","meat_3","meat_4","meat_5","meat_6","veg_1","veg_2","veg_4","veg_5","veg_6","veg_7","veg_8","veg_9", "dairy_2", "dairy_4", "frozen_2","frozen_3", "frozen_4", "bread_2", "fruit_5"],
                recipe_pointers: [
                    "Prepare the veggie/chicken mixture as you desire.",
                    "Take a wrap and toast it on a pan with some butter.",
                    "Start placing all your ingredients. Adding patty is a choice.",
                    "Close the wrap and wrap up in a foil paper. Serve with some hot sauce."
                ] 
            },
            {
                recipe_id: "recipie-f_5",
                recipe_name: "Mixed Vegetables",
                ingredients: ["veg_1","veg_2","veg_4","veg_5","veg_6","veg_7","veg_8","veg_9", "veg_10", "veg_11", "veg_12"],
                recipe_pointers: [
                    "Saute some onions in garlic and ginger paste.",
                    "Add tomato purey to it.",
                    "Add some water and gradually start adding vegetables according to your needs.",
                    "Add some spices and stir well and let it set for sometime on medium flames.",
                    "Serve with chapati/roti."
                ] 
            },
            {
                recipe_id: "recipie-f_6",
                recipe_name: "Scrambled Eggs",
                ingredients: ["meat_6","veg_1","veg_2","veg_7","dairy_2", "dairy_4"],
                recipe_pointers: [
                    "Beat eggs in a container and add chopped onions and tomatoes to your liking.",
                    "Add some spices.",
                    "Heat up a pan and add butter.",
                    "Pour the eggs over the pan and keep beating the eggs using a ladle until it stops sticking to pan.",
                    "Serve hot!!."
                ] 
            }
        ],
        beverage: [
            {
                recipe_id: "recipie-bvg_1",
                recipe_name: "Fruit Smoothie",
                ingredients: ["fruit_1","fruit_2","fruit_3","fruit_4","fruit_5","fruit_6","fruit_7","fruit_8","fruit_9","fruit_10","fruit_11","fruit_12","dairy_1","dairy_3"],
                recipe_pointers: [
                    "Blend milk with your desired fruits until smooth.",
                    "Add some berries; blend until smooth.",
                    "Add yogurt, if desired.",
                    "Top with some more berries or chia seeds, if desired."
                ] 
            },
            {
                recipe_id: "recipie-bvg_2",
                recipe_name: "Thick Shake",
                ingredients: ["fruit_1","fruit_2","fruit_3","fruit_4","fruit_6","fruit_7","fruit_8","fruit_10","fruit_11","fruit_12","dairy_1","dairy_6"],
                recipe_pointers: [
                    "Pour milk in blender; Add fruits.",
                    "Add cream to increase thickness, if desired.",
                    "Blend until smooth",
                    "Top it up with some cherries or pomegranate seeds and serve."
                ] 
            },
            {
                recipe_id: "recipie-bvg_3",
                recipe_name: "Vegetable Soup",
                ingredients: ["veg_1","veg_2","veg_3","veg_4","veg_5","veg_6","veg_7","veg_8","veg_10","veg_11","veg_12","fruit_9","frozen_1","frozen_2","frozen_4"],
                recipe_pointers: [
                    "Saute your vegetables in olive oil and tomatoes.",
                    "Add garlic, pepper and salt to taste.",
                    "Add water and let it boil.",
                    "Simmer till the veggies are tender.",
                    "Add peas and cook for more 10 minutes and then serve."
                ] 
            },
            {
                recipe_id: "recipie-bvg_4",
                recipe_name: "Chicken Soup",
                ingredients: ["meat_1","veg_4","veg_7","fruit_9"],
                recipe_pointers: [
                    "Make garnishing paste in olive oil and saute your spices.",
                    "Add chicken and let it cook.",
                    "Add water and let it cook till chicken gets tender.",
                    "Save that water and shred chicken and add to same water with more spices as you desired.",
                    "Serve hot."
                ] 
            },
            {
                recipe_id: "recipie-bvg_5",
                recipe_name: "Fruit Juice",
                ingredients: ["fruit_1","fruit_2","fruit_3","fruit_4","fruit_5","fruit_6","fruit_7","fruit_8","fruit_9","fruit_10","fruit_11","fruit_12"],
                recipe_pointers: [
                    "Blend fruits into water until smooth.",
                    "Add pepper or salt to your taste.",
                    "Mix well. Top with pomegranate seeds and enjoy."
                ] 
            }
        ]
    }

    // Final selected items variables
    var selectedIngredients = [];
    var selectedRecipes = {all: [], food: [], beverage: []};
    var selectedFoodCategory = "";

    // Handling Form Starts ------------------------------------------------------
    var userNameForSite = "";
    var fridgeNameForSite = "";

    var formHandle = document.forms.userDetsForm;
	formHandle.onsubmit = processForm;

	function processForm() {
        var user_name = formHandle.userName; // user name
		var fridge_name = formHandle.fridgeName;  // your fridge name (just for fun)

        // VALIDATION OF FORM
        if(user_name.value === "") {
			user_name.style.background = "red";
			user_name.focus();
			return false;
		}
        else {
            if(fridge_name.value === "") {
                user_name.style.background = "transparent";
                fridge_name.style.background = "red";
                fridge_name.focus();
                return false;
            }
        }

        userNameForSite = user_name.value;
        fridgeNameForSite = fridge_name.value;
        document.getElementById("userNameFromForm").innerHTML = userNameForSite;
        document.getElementById("fridgeNameFromForm").innerHTML = fridgeNameForSite;
        document.getElementById("detailsForm").style.display = "none";
        document.getElementById("firstPageShow").style.display = "block";

        return false;
    }
    // Handling Form Ends ------------------------------------------------------

    createFoodList(foodList);  // creates the ingredients list in dropdowns
    createSelectedFoodList(foodList);  // creates the selected ingredients list in second page

    // function to toggle the dropdowns display property on click
    document.querySelectorAll(".categoryBox button").forEach((e) => {
        e.addEventListener('click', function(event) {
            
            let buttonId = event.target.id;
            var mainId = buttonId.replace("Dropdown", ""); // main food ID
            document.getElementById(mainId + "ItemsList").classList.toggle("displayList");

        });
    });

    // function to add ingrdients to the final list
    document.querySelectorAll(".categoryBox ul li").forEach((e) => {
        e.addEventListener('click', function(event) {

            var itemId = event.target.id;
            var foodId = itemId.split('_')[0];

            for(var i=0; i<foodList.length; i++) {
                if(foodList[i].food_id == foodId) {
                    if(foodList[i].selectedItems.includes(itemId)) {
                        foodList[i].selectedItems.splice(foodList[i].selectedItems.indexOf(itemId), 1);
                        document.getElementById(itemId).classList.remove("afterSelection");
                        document.getElementById(itemId + "_icon").classList.remove("displayTick");
                    }
                    else {
                        foodList[i].selectedItems.push(itemId);
                        document.getElementById(itemId).classList.add("afterSelection");
                        document.getElementById(itemId + "_icon").classList.add("displayTick");
                    }
                    createSelectedFoodList(foodList);
                }
            }

        });
    });

    // ----------------- click functions on buttons starts ------------------------
    document.getElementById("showFinalList").onclick = displayFinalList; 
    document.getElementById("editList").onclick = editList; 
    document.getElementById("showSuggestions").onclick = displayRecipies; 
    document.getElementById("pressBack").onclick = goBack; 

    function displayFinalList() {
        document.getElementById("firstPageShow").style.display = "none";
        document.getElementById("secondPageShow").style.display = "block";
        document.getElementById("thirdPageShow").style.display = "none";
    }

    function editList() {
        document.getElementById("firstPageShow").style.display = "block";
        document.getElementById("secondPageShow").style.display = "none";
        document.getElementById("thirdPageShow").style.display = "none";
    }

    function displayRecipies() {
        document.getElementById("firstPageShow").style.display = "none";
        document.getElementById("secondPageShow").style.display = "none";
        document.getElementById("thirdPageShow").style.display = "block";

        selectedIngredients = getTotalIngredientList(foodList);

        selectedRecipes = getTotalRecipeList(recipes, selectedIngredients);

        selectedFoodCategory = getSelFoodCategory();

        formRecipeListDiv();

    }

    function formRecipeListDiv() {
        if(selectedRecipes[selectedFoodCategory].length == 0) {
            document.getElementById("noRecipeContent").style.display = "block";
            document.getElementById("recipeContent").style.display = "none";
        }
        else {
            document.getElementById("noRecipeContent").style.display = "none";
            document.getElementById("recipeContent").style.display = "block";

            createRecipeList(selectedRecipes[selectedFoodCategory]);  // create recipe list on web page
        }
    }

    function goBack() {
        document.getElementById("firstPageShow").style.display = "none";
        document.getElementById("secondPageShow").style.display = "block";
        document.getElementById("thirdPageShow").style.display = "none";
    }

    // ----------------- click functions on buttons ends ------------------------

    // radio button function to CHOOSE BETWEEN FOOD AND BEVERAGE --------------------------------------
    document.querySelectorAll(".radioButt").forEach((e) => {
        e.addEventListener('change', function(event) {
            selectedFoodCategory = event.target.id;
            formRecipeListDiv();
        });
    });

}

function createFoodList(foodList) {
    var category = "";
    foodList.forEach((food) => {
        category += "<div class='categoryBox " + food.food_id + "Box'><h3>" + food.category +"</h3><button id='" + food.food_id + "Dropdown'>Select to Add <i class='fa-solid fa-angle-down'></i></button><ul id='" + food.food_id + "ItemsList'>" + makeList(food.items) + "</ul></div>";
    });
    
    document.getElementById("foodSelection").innerHTML = category;
}

function makeList(foodItemsArray) {
    var listItem = "";
    foodItemsArray.forEach((item) => {
        listItem += "<li id='" + item.id + "'>" + item.value + "<i id='" + item.id + "_icon' class='fa-solid fa-check'></i></li>";
    });
    return listItem;
}

function createSelectedFoodList(foodList) {
    var category = "";
    foodList.forEach((food) => {
        category += "<div class='listItem'><div class='listItemHead'><h3>" + food.category + ": </h3></div><div class='displaySelectedItems'>" + makeSelectedItemsList(food.selectedItems, food) + "</div></div>";
    });
    
    document.getElementById("displaySelection").innerHTML = "<h2>Your selected list<i class='fa-solid fa-pizza-slice'></i></h2>" +  category;
}

function makeSelectedItemsList(foodItemsArray, food) {
    var listItem = "";
    foodItemsArray.forEach((item) => {
        listItem += "<div class='item' id='" + item + "-sel'>" + findLabel(item, food.items) + "</div>";
    });
    return listItem;
}

function findLabel(item, list) {
    var label = "";
    list.forEach((e) => {
        if(e.id == item) {
            label = e.value;
        }
    });
    return label;
}

function getTotalIngredientList(foodList) {
    let arr = [];
    foodList.forEach((food) => {
        food.selectedItems.forEach((item) => {
            arr.push(item);
        });
    });
    return arr;
}

function getTotalRecipeList(recipes, selectedIngredients) {
    let allArr = [];
    let foodArr = [];
    let beverageArr = [];
    let finalObj = {all: [], food: [], beverage: []};

    Object.keys(recipes).forEach((key) => {
        recipes[key].forEach((recipe) => {
            var count = 0;
            recipe.ingredients.forEach((ing) => {
                if(selectedIngredients.includes(ing)) {
                    count++;
                }
            });
            if(count > 1) {
                allArr.push(recipe);
                if(key == "food") {
                    foodArr.push(recipe);
                }
                if(key == "beverage") {
                    beverageArr.push(recipe);
                }
            }
        });
    });
    finalObj.all = allArr;
    finalObj.food = foodArr;
    finalObj.beverage = beverageArr;

    return finalObj;
}

function getSelFoodCategory() {
    let id="";
    var ele = document.getElementsByName('food_type'); 
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        id = ele[i].id;
    }
    return id;
}

function createRecipeList(recipeArray) {
    var category = "";
    recipeArray.forEach((recipe) => {
        category += "<div class='indRecipe'><h3>" + recipe.recipe_name + "</h3><p>- " + recipe.recipe_pointers.join("<br>- ") + "</p></div>"
    });
    document.getElementById("recipeContent").innerHTML = category;
}