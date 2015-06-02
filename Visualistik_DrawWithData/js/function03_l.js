var height = 120;
var width = 400;
var barpadding = 1;

var dataset = [];

for (var i = 0; i < 20; i++) {
    var newNumber = 20 + Math.floor(Math.random() * (MAX_VALUE - 20));
    dataset.push(newNumber);
}
/* *********************************************************

 Aufgabe 3.1 Anpassung der Balkenbreite an die Grenzen der SVG

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
    .attr("width", function (d) { // +++++++++++++++++++++++++++++++++fixer Wert 20
        return (width / dataset.length) - barpadding;
    })
    .attr("height", function (d) {
        return d;
    });

/* *********************************************************

 Aufgabe 3.2 Anpassung der Baseline

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
    .attr("y", function (d) {
        return height - d;
    })
    .attr("width", function (d) {
        return (width / dataset.length) - barpadding;
    })
    .attr("height", function (d) {
        return d;
    });


/* *********************************************************

 Aufgabe 3.2 Vergabe eines Farbverlaufes, abhängig von den Werten des Datenarrays

 ********************************************************* */

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
    .attr("y", function (d) {
        return height - d;
    })
    .attr("width", function (d) {
        return (width / dataset.length) - barpadding;
    })
    .attr("height", function (d) {
        return d;
    }).style("fill", function (d) {
        return "rgb(0, 0, " + (d * 2) + ")";
    });

/* *********************************************************

 Aufgabe 3.2 Anbringung und Justierung der Labels

 ********************************************************* */

var barWidth;

var svg_four = d3.select("#t3_p4")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_four.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return (i * (width / dataset.length));
    })
    .attr("y", function (d) {
        return height - d;
    })
    .attr("width", function (d) {
        barWidth = (width / dataset.length) - barpadding;
        return barWidth;
    })
    .attr("height", function (d) {
        return d;
    }).style("fill", function (d) {
        return "rgb(0, 0, " + (d * 2) + ")";
    });

svg_four.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("x", function (d, i) {
        return (i * (width / dataset.length) + (barWidth / 2));
    })
    .attr("y", function (d) {
        return height - d + 14;
    })
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");
