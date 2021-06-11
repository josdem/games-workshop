const updateButtonLabel = () => {
    $('#button').html("LOL");
    setTimeout(() => {  $('#button').html("No, thank you!"); }, config.sleep);
}
