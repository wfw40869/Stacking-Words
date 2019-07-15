let sentenceArray = [];
const sentence = document.querySelector("#sentence"),
    punctuation = document.querySelector("#punctuation"),
    numberOfPunctuations = document.querySelector("#numberOfPunctuations"),
    submitButton = document.querySelector("#submitButton"),
    printHere = document.querySelector(".printHere")

// Creates a paragraph element and append it to the elementToAppendTo argument
const createParagraphAndAppend = (elementToAppendTo, textContent) => {
    let paragraph = document.createElement("p")
    paragraph.innerHTML = textContent
    elementToAppendTo.appendChild(paragraph)
}

const addExcitementAndCreateElements = (wordsArray, punctuation, amountOfPunctuations) => {
    // let buildMeUp = ""
    let counter = 1
    buildMeUp = ""
    //loop through the wordsArray
    for (let index = 0; index < wordsArray.length; index++) {
        //check if counter is divisible by 3
        if (counter % 3 === 0) {
            //add the punctuation the specified amount of times after the wordsArray index
            buildMeUp += `${wordsArray[index]}${punctuation.repeat(amountOfPunctuations)} `
            // create a paragraph element with the buildMeUp string and append it to printHere
            createParagraphAndAppend(printHere, buildMeUp)
        } else {
            buildMeUp += `${wordsArray[index]} `
            createParagraphAndAppend(printHere, buildMeUp)
        }
        counter++
    }
}



//Listen for clicks on the submit button
submitButton.addEventListener("click", (event) => {
    // split the value of the user's sentence textarea into an array delimited by a space
    sentenceArray = sentence.value.split(" ")
    // Call the addExcitementAndCreateElementsFunction
    addExcitementAndCreateElements(sentenceArray, punctuation.value, parseInt(numberOfPunctuations.value))
    // Prevent default form submit behavior
    event.preventDefault();
})

