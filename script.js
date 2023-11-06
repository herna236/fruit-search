const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', search);

function search() {
	const inputValue = input.value.toLowerCase();
	let results = [];

	for (let i = 0; i < fruit.length; i++) {
	  const fruitName = fruit[i].toLowerCase();
	  if (fruitName.includes(inputValue)) {
		results.push(fruit[i]);
	  }
	}
	showSuggestions(results)
	
}


function showSuggestions(results) {
	suggestions.innerHTML = '';

	for (let i=0; i<results.length; i++){
		const listItem = document.createElement('li');
		listItem.textContent = results[i];
		suggestions.appendChild(listItem);
	}
	
}
suggestions.addEventListener('click', useSuggestion);

function useSuggestion(e) {
	input.value = e.target.textContent;
	suggestions.innerHTML = '';
	
}


