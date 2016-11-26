
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

  var w = 1000;
  var h = 300;
  
  d3.select("body").append("p")
  				   .text("HIGH FODS")
  				   .style("color", "white");

  var svg = d3.select("body")
   			  .append("svg")
              .attr("width", w)
              .attr("height", h);

  var rects = svg.selectAll("rect")
				 .data(fruits)
				 .enter()
				 .append("rect");

  var text = svg.selectAll("text")
                .data(fruits)
                .enter()
                .append("text")
                .text(function(d){
                  return d;
                })
                .attr("x",
		          function(d, i) {
			       return (i * 30) + 10;
			      })
   				.attr("y", function(d) {
        		   return h - (d * 4);
   				});

  rects.attr("x",
         function(d, i) {
	       return (i * 30) + 10;
	     })
	   .attr("y", function(d, i){
	     if (fruits[i].fodmap == "high"){
	       return 30;
	     } else if (fruits[i].fodmap == "low"){
	   	   return 150;
	     }
	   })
	   .attr("width", 10)
	   .attr("height", 100)
	   .attr("fill", function(d, i) {
	 	  return fruits[i].color;
	   }
	   .attr(function(d, i) {
         return fruits[i].kind;
       })
  );
	 
  d3.select("body").append("p")
				   .text("LOW FODS")
				   .style("color", "white");

}

