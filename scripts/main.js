let sentenceArray = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


const addExcitement = (wordsArray, punctuation, amountOfPunctuations) => {
    let buildMeUp = ""
    let counter = 1
    for (let index = 0; index < wordsArray.length; index++) {
        if (counter % 3 === 0) {
            buildMeUp += `${wordsArray[index]}${punctuation.repeat(amountOfPunctuations)} `;
        } else {
            buildMeUp += `${wordsArray[index]} `;
            console.log(buildMeUp);
        }
        counter++
    }
}

addExcitement(sentenceArray, "?", 10);

