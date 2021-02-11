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

// Create an SVG wrapper, append an SVG group that will hold the chart
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg
    .append("g")
    .attr("transform", `transate(${margin.left}, ${margin.top})`);

// Initial Params
// x for in poverty(%)
// y for lacks healthcare(%)

// function used for updating x-scale var upon click on axis label
function xScale(csvData, chosenXAxis) {
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(csvData, d => d[chosenXAxis]) * 0.8,
      d3.max(csvData, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;
}


/*

// Import Data
var dataFile = "assets/data/data.csv"

d3.csv(dataFile).then(function(){});


// Append svg
var svg = d3.select(".chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  */
