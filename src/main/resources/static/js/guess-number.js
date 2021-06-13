const MAX_NUMBER = 101;

let numberGenerated = 0;

const generateNumber = () => Math.floor(Math.random() * MAX_NUMBER);

exports.guess = generateNumber;