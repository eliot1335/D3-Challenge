// @TODO: YOUR CODE HERE!

// Setup svg img parameters
var svgWidth = 800;
var svgHeight = 560;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


// Import Data
var dataFile = "assets/data/data.csv"

d3.csv(dataFile).then(function)


// Append svg
var svg = d3.select(".chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);
