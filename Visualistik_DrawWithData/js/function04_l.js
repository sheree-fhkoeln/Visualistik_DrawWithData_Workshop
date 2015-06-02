var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 80],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
];

var width = 600;
var height = 120;
var radius = 15;

/* *********************************************************

 Aufgabe 4.1 Positionierung der Kreise innerhalb der SVG abhängig von den Werten des
 Datenarrays

 ********************************************************* */

var svg = d3.select("#t4_p1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d){
        return d[0];
    })
    .attr("cy", function(d){
        return d[1];
    })
    .attr("r", radius);

svg.selectAll("text")  // <-- Note "text", not "circle" or "rect"
    .data(dataset)
    .enter()
    .append("text")     // <-- Same here!
    .text(function(d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function(d) {
        return d[0] + 20;
    })
    .attr("y", function(d) {
        return d[1];
    })
    .attr("font-family", "sans-serif") 
    .attr("font-size", "11px")
    .attr("fill", "red");