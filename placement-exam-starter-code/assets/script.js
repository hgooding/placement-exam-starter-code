// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Hannah Gooding" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

  

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let i = 0; i < gb.length; i++
let serializedGB = JSON.stringify(i)
localStorage.setItem(serializedGB, i++)


document.getElementById('minus-gb').addEventListener('click', function (){
    console.log('Gingerbread - button was clicked!')
    document.getElementById('qty-gb').innerHTML = serializedGB - i
})
     
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    document.getElementById('qty-gb').innerHTML = serializedGB 
})
document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
})
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('SugarSprinkle - button was clicked!')
})
document.getElementById('add-sugar').addEventListener('click', function add() {
    var txtNumber = document.getElementById("add-sugar");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
})
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons