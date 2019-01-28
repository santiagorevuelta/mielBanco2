var h = (Math.sqrt(3)/2),
    radius = 100,
    xp = 250,
    yp = 150,
    hexagonData = [
        { "x": radius+xp,   "y": yp},
        { "x": radius/2+xp,  "y": radius*h+yp},
        { "x": -radius/2+xp,  "y": radius*h+yp},
        { "x": -radius+xp,  "y": yp},
        { "x": -radius/2+xp,  "y": -radius*h+yp},
        { "x": radius/2+xp, "y": -radius*h+yp}
    ];


drawHexagon =
    d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("cardinal-closed")
        .tension("0.25");


var svgContainer =
    d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);


var enterElements =
    svgContainer.append("path")
        .attr("d", drawHexagon(hexagonData))
        .attr("stroke", "red")
        .attr("stroke-dasharray","20,5")
        .attr("stroke-width", 3)
        .attr("fill", "rgba(255,0,0,0.4)");