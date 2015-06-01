var height = 120;
var width = 400;
var barpadding = 1;

var dataset = [];

for (var i = 0; i < 20; i++) {
    var newNumber = 20 + Math.floor(Math.random() * (MAX_VALUE - 20));
    dataset.push(newNumber);
}
/* *********************************************************

 Aufgabe 3.1 Anpassung der Baseline

 ********************************************************* */

var svg_one = d3.select("#t3_p1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_one.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return (i * (width / dataset.length));
    })
    .attr("y", 0)
    .attr("width", function (d) {
        return (width / dataset.length) - barpadding;
    })
    .attr("height", function (d) {
        return d;
    });


/* *********************************************************

 Aufgabe 3.2 Vergabe eines Farbverlaufes, abhängig von den Werten des Datenarrays

 ********************************************************* */

var svg_two = d3.select("#t3_p2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_two.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return (i * (width / dataset.length));
    })
    .attr("y", 0)// <-------------- HINWEIS: Übernahme aus Aufgabe 3.1 notwendig
    .attr("width", function (d) {
        return (width / dataset.length) - barpadding;
    })
    .attr("height", function (d) {
        return d;
    })
    // Styling mit Farbverlauf abhängig vom Datenwert
    ;

/* *********************************************************

 Aufgabe 3.3 Anbringung und Justierung der Labels

 ********************************************************* */

var barWidth;

var svg_three = d3.select("#t3_p3")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_three.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return (i * (width / dataset.length));
    })
    .attr("y", 0)
    .attr("width", function (d) {
        barWidth = (width / dataset.length) - barpadding;
        return barWidth;
    })
    .attr("height", function (d) {
        return d;
    });

svg_three.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    // Positionierung des Textes mit x- und y-Wert
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");
