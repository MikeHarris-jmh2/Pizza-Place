function getReceipt() {
	
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00"); 
};	

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			selectedCheese.push(cheeseArray[j].value);
			console.log("selected cheese item: ("+cheeseArray[j].value+")");
			text1 = text1+cheeseArray[c].value+"<br>";
		}
	}
	var cheeseCount = selectedCheese.length;
	if (cheeseCount > 1) {
		cheeseTotal = (cheeseCount - 1);
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("total selected cheese items: "+cheeseCount);
	console.log(cheeseCount+" cheese - 1 free cheese = "+"$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var d = 0; d < crustArray.length; d++) {
		if (crustArray[d].checked) {
			selectedCrust.push(crustArray[d].value);
			console.log("selected crust item: ("+crustArray[d].value+")");
			text1 = text1+crustArray[d].value+"<br>";
		}
	}
	var crustCount = selectedCrust.length;
	if (crustCount > 1) {
		crustTotal = (crustCount - 1);
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	console.log("total selected crust items: "+crustCount);
	console.log(crustCount+" crust - 1 free crust = "+"$"+cheeseTotal+".00");
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			selectedSauce.push(sauceArray[d].value);
			console.log("selected crust item: ("+sauceArray[s].value+")");
			text1 = text1+crustArray[s].value+"<br>";
		}
	}
	var sauceCount = selectedSauce.length;
	if (sauceCount > 1) {
		sauceTotal = (sauceCount - 1);
	} else {
		sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log("total selected sauce items: "+sauceCount);
	console.log(sauceCount+" sauce - 1 free cheese = "+"$"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function getVeggie(runningTotal, text1){
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var l = 0; l <veggieArray.length; l++) {
        if (veggieArray[l].checked) {
            selectedVeggie.push(veggieArray[l].value);
            console,log("selected veggie item: ("+ veggieArray[l].value+")");
            text1= text1+ veggieArray[l].value + "<br>";
        }
    }

    var veggieCount = selectedVeggie.length;

    if (veggieCount > 1){
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }

    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggie items:" + veggieCount);
    console.log(veggieCount + "veggie - 1 free veggie = " "$" +veggieTotal + ".00");
    console.log("veggie text1:" + text1);
    console.log("Purchase Total: " + "$"+runningTotal + ".00");
    document.getElementById("showText").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"

}