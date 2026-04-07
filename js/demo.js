// import data using d3.csv()

// convert CSV rows into the nodes/links structure the Arc Diagram needs
const data = convertToGraph(dataFile);

// create chart 
const chart = createChart(data.nodes, data.links);

// append chart to DOM
// TODO: replace with your own code to append the chart to the page

// add event listener to dropdown
// TODO: replace with your own code to listen for changes to the dropdown and update the chart accordingly

// transform CSV rows into { nodes, links }


function convertToGraph(rows) {
    // build a map of character -> group, reading both columns to catch
    // nodes that appear only as a target (and would be missed by source alone)
    // resulting map should be { "Myriel": 1, "Napoleon": 1, ... }
    // TODO: replace with your own code to build the group map


    // convert the map to Array 
    // resulting array should be [ { id: "Myriel", group: 1 }, { id: "Napoleon", group: 1 }, ... ]
    // TODO: replace with your own code to convert the map to an array of nodes

    // create links array by mapping over the CSV rows, make sure that value is a number, not a string
    // resulting array should be [ { source: "Myriel", target: "Napoleon", value: 1 }, ... ]
    // TODO: replace with your own code to create the links array

     return { nodes, links };
}

// adapt chart code from https://observablehq.com/@d3/arc-diagram to create the chart based on the nodes and links
function createChart(nodes, links) {

    // calculate degree of each node by summing the values of all links that include that node as a source or target


    // create orders map for dropdown, with keys "by name", "by group", and "by degree"


    // copy the chart code from the Observable notebook

}

