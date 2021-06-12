const updateCanvasColor = () => {
    $('#canvas').drawRect({
        fillStyle: 'steelblue',
        x: 0, y: 0,
        fromCenter: false,
        width: config.width,
        height: config.height
    });
}