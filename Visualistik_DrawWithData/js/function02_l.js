var radius = 30;
var width = 800;
var height = 2 * radius + 20;
dataset = [];
for (var i = 0; i < 10; i++){           // Aufgabe1.4
    var newNumber = 10 + Math.floor(Math.random() * radius);
    dataset.push(newNumber);
}

/* *********************************************************

 Aufgabe 1.1 Anfügen eines Kreises an eine SVG

 ********************************************************* */

var svg = d3.select("#t2_p1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("circle")
    .attr("r", radius);


/* *********************************************************

 Aufgabe 1.2 Platzieren eines Kreises in der SVG

 ********************************************************* */

var svg = d3.select("#t2_p2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("circle")
    .attr("cx", "50")
    .attr("cy", height/2)
    .attr("r", radius);

/* *********************************************************

 Aufgabe 1.3 Die Anzahl der Kreise entspricht den Werten im Datenarray. Positionieren sie entsprechend.

 ********************************************************* */

var svg = d3.select("#t2_p3")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d, i){
        return (i * 2 * (radius + 10)) + (radius + 10);
    })
    .attr("cy", height/2)
    .attr("r", radius);

/* *********************************************************

 Aufgabe 1.4 Die Größe der Kreise entspricht den Werten im Datenarray.

 ********************************************************* */

var svg = d3.select("#t2_p4")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d, i){
        return (i * 2 * (radius + 10)) + (radius + 10);
    })
    .attr("cy", height/2)
    .attr("r", function(d){
        return d + "px";
    });