// Exercises: for loops

// EXERCISE: The even/odd reporter



for (var count = 0; count <= 20; count += 1) {
	if (count % 2 === 0) {
		document.write(count + " is even" + "<br />");
	} else {
		document.write(count + " is odd" + "<br />");
	}
}

// EXERCISE: Multiplication Tables
for (var count = 0; count <= 10; count += 1) {
	var multiplied = count * 9;
	document.write(count + " X 9 = " + multiplied + "<br />");
}

// EXERCISE: The Grade Assigner

for (var count = 60; count <= 69; count += 1) {
	document.write("For " + count + " you get a C" + "<br />");
}
for (var count = 70; count <= 79; count += 1) {;
	document.write("For " + count + " you get a B" + "<br />")
}
for (var count = 80; count <= 100; count += 1) {
	document.write("For " + count + " you get an A" + "<br />");
}

	or

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}



