let sentenceArray = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


const addExcitement = (wordsArray, punctuation, amountOfPunctuations) => {
    let buildMeUp = ""
    for (let index = 0; index < wordsArray.length; index++) {
        if (index !== 0 && index % 3 === 0) {
            buildMeUp += `${wordsArray[index]}${punctuation.repeat(amountOfPunctuations)} `;
        } else {
            buildMeUp += `${wordsArray[index]} `;
            console.log(buildMeUp);
        }
    }
}

addExcitement(sentenceArray, "?", 10);

