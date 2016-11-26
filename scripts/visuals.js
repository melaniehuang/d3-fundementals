
window.onload = function(){
  var fruits = [
    {
        kind: "blueberry",
        color: "blueviolet",
        fodmap: "low"
    },
    {
        kind: "apricot",
        color: "coral",
        fodmap: "high"
    },
    {
        kind: "banana",
        color: "yellow",
        fodmap: "low"
    }
  ];

  var w = 500;
  var h = 500;

   var svg = d3.select("body").append("svg");

   svg.attr("width", w)
      .attr("height", h);

   var circles = svg.selectAll("circle")
				    .data(fruits)
				    .enter()
				    .append("circle");

   circles.attr("cx", 
     function(d, i) {
       return (i * 100) + 70;
     })
     .attr("cy", function(d, i){
       if (fruits[i].fodmap == "high"){
         return h/2 - 50;
       } else if (fruits[i].fodmap == "low"){
       	 return h/2 + 50;
       }
     }) 	
     .attr("r", 20)
     .attr("fill", function(d, i) {
     	return fruits[i].color;
     })
     ;

}

