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


// append the svg object to the body of the page
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", `transate(${margin.left}, ${margin.top})`);


// read the data
d3.csv("assets/data/data.csv", function(data){
    // add x axis
    var x = d3.scaleLinear()
      .domain([0, 4000])
      .range([0, width]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    
    // add y axis
    var y = d3.scaleLinear()
      .domain([0, 50000])
      .range([height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // add circles
    svg.append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function (d) { return x(d.age); })
        .attr("cy", function (d) { return y(d.income); })
        .attr("r", 1.5)
        .style("fill", "#69b3a2")
})
































/*
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


// Scales and Axes
// Labels

// Chart titles
// Commentary optional


// function used for updating x-scale var upon click on axis label
function xScale(csvData, chosenXAxis) {
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(csvData, d => d[chosenXAxis]) * 0.8,
      d3.max(csvData, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;
}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

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
