const MAX_NUMBER = 101;

const generateNumber = () => {
    return Math.floor(Math.random() * MAX_NUMBER)
}

const define = (userInput) => {
    let numberGenerated = generateNumber()
    if(userInput < numberGenerated)
        return -1
    return 1
}

exports.define = define;