// Exercises: if/else statements

// EXERCISE: What number's bigger?
greaterNum = function(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

console.log(greaterNum(5, 10));
 

// EXERCISE: The World Translator
helloWorld = function(lang) {
	if (lang == "jp") {
		return "Ohayo sekaini wa";
	} else if (lang == "fr") {
		return "bonjour tout le monde";
	} else {
		return "hello world";
	}
}

helloWorld("en")
helloWorld("fr")
helloWorld("jp")

// EXERCISE: The Grade Assigner
assignGrade = function(score) {
	if (score > 80) {
		return "A";
	} else if (score > 70) {
		return "B";
	} else if (score > 70) {
		return "C";
	} else if (score > ) {
		return "D";					
	} else {
		return "F";
	}
}

assignGrade("85")
assignGrade("72")
assignGrade("66")
assignGrade("51")
assignGrade("59")

// EXERCISE: The Pluralizer
pluralize = function(noun, number) {
	if (number != 1 && noun != 'sheep') {
		return noun + "s"
    } else {
        return number + ' ' + noun;
    }
}

pluralize('cat', 0));
pluralize('cat', 1));
pluralize('cat', 2));
