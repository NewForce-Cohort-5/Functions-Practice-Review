console.log("Welcome to the main module")
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];
// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};


// for (let i = 0; i < foods.length; i++){
//     grill(foods[i])
// }
// console.log(cookedFood)


// for (let singleObject of cookedFood){
//     console.log(singleObject.cooked, singleObject.name)
// }



//           ------------------   overly excited  -------------------------
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let sentenceJr = ["The","moose","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp + " " + theWordArray[i]
        //buildMeUp += theWordArray[i] + " "
        //buildMeUp += `${theWordArray[i]} `
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
// addExcitement(sentenceJr)


//------------------MORE EXCITING!!!!!-----------


function addMoreExcitement (theWordArray, punctuationString) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        // If the current word's place (not index) in the array
        // is evenly divisible by 3, add an exclamation point
        // to the end of the word and then concatenate it to
        // `buildMeUp`.

       // Otherwise, just concatenate the word itself.
            if((i + 1) % 3 === 0 ){
                buildMeUp += `${theWordArray[i]}${punctuationString} `

            }
            else{
                buildMeUp += `${theWordArray[i]} `
            }
            console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
// addMoreExcitement(sentence, "#")



let bandNumber = 1

const takeNumber = function (bandName) {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
        let sentence = `${bandNumber}. ${bandName}`
        bandNumber++
        return sentence
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
const taco = takeNumber("The Tacos")
console.log(taco)
