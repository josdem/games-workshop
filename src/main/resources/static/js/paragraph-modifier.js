const updateComputerParagraph = function(){
    $('#computer').html("Computer Choice: " + computerChoice);
}

const updateResultParagraph = function(){
    $('#result').html("Result: " + result);
}

const updateScoreParagraph = function(){
    $('#score').html("User: " + userScore + " Computer: "  + computerScore);
}