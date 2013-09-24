// Exercises: Functions

// EXERCISE: The Fortune Teller
fortuneteller = function(num_children, partner, place, job) {
	return "You will be a " + job + " in " + place +", and married to " + partner +
 	" with " + num_children + " kids.";
}

fortuneteller(5, "Anne", "Toronto", "policeman")
fortuneteller(1, "Dana", "Paris", "doctor")
fortuneteller(2, "Karin", "Tokyo", "programmer")

// EXERCISE: The Age Calculator
calculateAge = function(birth_year, current_year) {
	return "you are either " + (current_year - birth_year) + " or " 
			+ (current_year - birth_year -1) + ".";
}

calculateAge(1990, 2013)
calculateAge(1988, 2013)
calculateAge(1985, 2013)

// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
new Date().getFullYear()


// EXERCISE: The Lifetime Supply Calculator
calculateSupply = function(c_age, m_age, per_day) {
	return "You will need " + 2 * ((m_age - c_age) *365) + " to last you until the ripe old age of "
	 + m_age + ".";
}

calculateSupply( 22, 80, 2)
calculateSupply( 22, 70, 3)
calculateSupply( 22, 65, 3)


// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// EXERCISE: The Geometrizer


// Create 2 functions that calculate properties of a circle, using the definitions here.
calcCircumference = function(radius) {
	var pi = 3.14;
	return "The circumference is "+ pi * (radius*2) +".";
}

calcCircumference(12)

calcArea = function(radius) {
 	var pi = 3.14;
 	return "The area is "+ (radius*radius) * pi  +".";
}

calcArea(12)

// EXERCISE: The Temperature Converter

celsiusToFahrenheit = function(celsiustemp) {
	var fahr_convert = (celsiustemp * 1.8) + 32;
	var display = celsiustemp + " degrees celsius is " + fahr_convert + 
	" degrees fahrenheit.";
	return display
}
celsiusToFahrenheit(20)
celsiusToFahrenheit(30)
celsiusToFahrenheit(10)


fahrenheitToCelsius = function(fahrtemp) {
	var celsius_convert = (fahrtemp - 32) / 1.8;
	var display = fahrtemp + " degrees fahrenheit is " + celsius_convert + 
	" degrees celsius.";
	return display
}
fahrenheitToCelsius (100)
fahrenheitToCelsius (90)
fahrenheitToCelsius (80)


