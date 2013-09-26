// Exercises: Arrays

// EXERCISE: Your top choices
	var colors = ["red", "blue", "yellow"];
	for (var counter = 0; counter < colors.length; counter++) {
	    console.log('My #' + (counter + 1) + ' choice is ' + colors[counter]);
	}

	for (var i = 0; i < choices.length; i++) {
	    var choiceNum = i + 1;
	    var choiceNumSuffix;
	    if (choiceNum == 1) {
	        choiceNumSuffix = 'st';
	    } else if (choiceNum == 2) {
	        choiceNumSuffix = 'nd';
	    } else if (choiceNum == 3) {
	        choiceNumSuffix = 'rd';
	    } else {
	        choiceNumSuffix = 'th';
	    }
	    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
	}




