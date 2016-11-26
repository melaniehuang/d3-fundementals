window.onload = function(){
  var dataset = []; 

  for (var i = 0; i < 12; i++) {           
    var newNumber = Math.round(Math.random() * 30);
    dataset.push(newNumber);
  }             
  
  d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d){
    	return d*20 + "px";
      }
    );
}

