const updateCanvasColor = () => {
    const red = $('#red').val();
    const green = $('#green').val();
    const blue = $('#blue').val();

    validateInputs(red, green, blue);

    $('#canvas').drawRect({
        fillStyle: "rgb(" + red + "," + green + "," + blue + ")",
        x: 0, y: 0,
        fromCenter: false,
        width: config.width,
        height: config.height
    });
}

const validateInputs = (red, green, blue) => {
  if(red < 0 || red > 255)
    alert("Seems like it does not have a valid value: " + red);
  if(green < 0 || green > 255)
    alert("Seems like it does not have a valid value: " + green);
  if(blue < 0 || blue > 255)
    alert("Seems it does not have a valid value: " + blue);
};