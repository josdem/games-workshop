const MAX_NUMBER = 101;

const generateNumber = () => {
    let numberGenerated = Math.floor(Math.random() * MAX_NUMBER)
    return numberGenerated
}

const define = (userInput) => {
    generateNumber()
    return -1;
}

exports.define = define;