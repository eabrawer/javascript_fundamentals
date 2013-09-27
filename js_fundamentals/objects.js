// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!
var recipe = {
	'title': "beefwellington",
	'servings': 2,
	'ingredients': ["carrots", "beef", "potato"]
}
console.log(recipe.title);
console.log('Servings:' + recipe.servings);
console.log('ingredients:');
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


// EXERCISE: The Reading List
var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}


// EXERCISE: The Movie Database

var movie = {
	title: "avengers",
	duration: 140,
	stars: ["hemsworth", "RD jr", "skarlet"]
}

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(movie);






