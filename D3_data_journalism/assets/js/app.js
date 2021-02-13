// @TODO: YOUR CODE HERE!

// Setup the parameters
var svgWidth = 800;
var svgHeight = 600;

var margin = {
    top: 40,
    right: 40,
    bottom: 80,
    left: 90
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create the svg wrapper
// append an svg group that will hold our chart
// shift the latter by left and top margins
var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var chartGroup = svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function (healthData) {

    // Parse the data/Cast as numbers
    healthData.forEach(function (data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    // Create scale functions
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d.poverty) / 1.1,
                 d3.max(healthData, d => d.poverty) * 1.1])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d.healthcare) / 1.1,
                 d3.max(healthData, d => d.healthcare) * 1.1])
        .range([height, 0]);
    
    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append Axes to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);
    
    // Create circles
    chartGroup.selectAll("circle")
        .data(healthData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .style("r", 10)
        .style("fill", "teal")
        .style("opacity", "0.6");
    
    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 -margin.left + 50)
        .attr("x", 0 - (height / 2) -60)
        .attr("class", "axisText")
        .text("Healthcare (%)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
        .attr("class", "axisText")
        .text("In Poverty (%)");

});

