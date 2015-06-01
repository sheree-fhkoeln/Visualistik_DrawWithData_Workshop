var radius = 30;
var width = 800;
var height = 2 * radius + 20;

dataset = [];
for (var i = 0; i < 10; i++){
    var newNumber = 10 + Math.floor(Math.random() * radius);
    dataset.push(newNumber);
}

/* *********************************************************

 Aufgabe 2.1 Positionierung der Kreise in einer SVG

 ********************************************************* */

var svg_one = d3.select("#t2_p1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_one.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("r", radius);


/* *********************************************************

 Aufgabe 2.2 Die Größe der Kreise entspricht den Werten im Datenarray.

 ********************************************************* */

var svg_two = d3.select("#t2_p2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_two.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("r", radius);