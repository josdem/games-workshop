const updateComputerParagraph = () => {
    $('#computer').html("Computer Choice: " + computerChoice);
}

const updateResultParagraph = () => {
    $('#result').html("Result: " + result);
}

const updateScoreParagraph = () => {
    $('#score').html("User: " + userScore + " Computer: "  + computerScore);
}