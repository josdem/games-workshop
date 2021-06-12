const updateCanvasColor = () => {
    $('#canvas').drawRect({
        fillStyle: "rgb(" + $('#red').val() + "," + $('#green').val() + "," + $('#blue').val() + ")",
        x: 0, y: 0,
        fromCenter: false,
        width: config.width,
        height: config.height
    });
}