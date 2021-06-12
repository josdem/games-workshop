const updateCanvasColor = () => {
    const red = $('#red').val();
    const green = $('#green').val();
    const blue = $('#blue').val();

    if(!isValidInput(red, green, blue)){
      alert("Seems like we have an invalid value");
      return;
    }

    $('#canvas').drawRect({
        fillStyle: "rgb(" + red + "," + green + "," + blue + ")",
        x: 0, y: 0,
        fromCenter: false,
        width: config.width,
        height: config.height
    });
}

const isValidInput = (red, green, blue) => {
  if(red < 0 || red > 255){
    return false;
  }
  if(green < 0 || green > 255){
    return false;
  }
  if(blue < 0 || blue > 255){
    return false;
  }
  return true;
};

exports.canvas = isValidInput;