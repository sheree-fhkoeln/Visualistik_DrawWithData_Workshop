const MAX_VALUE = 120;

/* *********************************************************

 Aufgabe 1.1 Balken erzeugen (select(), append(), attr())

 ********************************************************* */

d3.select("#t1_p1");


/* *********************************************************

 Aufgabe 1.2 Mehrere Balken mit Hilfe eines Datenarrays erzeugen

 ********************************************************* */

var dataset = [20, 40, 60, 80, 100];

d3.select("#t1_p2");


/* *********************************************************

 Aufgabe 1.3 Anpassung der Balkenhöhe an die Werte des Datenarrays

 ********************************************************* */

d3.select("#t1_p3");


/* *********************************************************

 Zusatz: Erzeugung eines neuen Datenarrays mit zufälligen Werten
 Zur Einbindung kopieren Sie bitte den Code aus Aufgabe 1.3
 und setzen Sie ihn an das vorgefertigte "d3.select("#t1_p4")"

 ********************************************************* */

dataset = [];
for (var i = 0; i < 10; i++) {           // Aufgabe1.4
    var newNumber = 10 + Math.floor(Math.random() * MAX_VALUE);
    dataset.push(newNumber);
}

d3.select("#t1_p4");
