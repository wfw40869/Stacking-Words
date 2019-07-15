let sentenceArray = [];
const sentence = document.querySelector("#sentence"),
    punctuation = document.querySelector("#punctuation"),
    numberOfPunctuations = document.querySelector("#numberOfPunctuations"),
    submitButton = document.querySelector("#submitButton"),
    printHere = document.querySelector(".printHere")



const addExcitementAndCreateElements = (wordsArray, punctuation, amountOfPunctuations) => {
    // let buildMeUp = ""
    let counter = 1.
    buildMeUp = ""
    for (let index = 0; index < wordsArray.length; index++) {
        let paragraph = document.createElement("p")
        if (counter % 3 === 0) {
            buildMeUp += `${wordsArray[index]}${punctuation.repeat(amountOfPunctuations)} `
            paragraph.innerHTML = buildMeUp
            printHere.appendChild(paragraph)
        } else {
            buildMeUp += `${wordsArray[index]} `
            paragraph.innerHTML = buildMeUp
            printHere.appendChild(paragraph)
        }
        counter++
    }
}




submitButton.addEventListener("click", (event) => {
    sentenceArray = sentence.value.split(" ")
    addExcitementAndCreateElements(sentenceArray, punctuation.value, parseInt(numberOfPunctuations.value))
    // Prevent default form submit behavior
    event.preventDefault();
})

