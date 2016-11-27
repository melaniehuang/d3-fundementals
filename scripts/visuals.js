window.onload = function(){
  var fruits = [
    {
        kind: "blueberry",
        color: "blueviolet",
        fodmap: "low"
    },
    {
        kind: "kiwifruit",
        color: "chartreuse",
        fodmap: "low"
    },
    {
        kind: "banana",
        color: "yellow",
        fodmap: "low"
    },
    {
        kind: "raspberry",
        color: "crimson",
        fodmap: "low"
    },
    {
        kind: "mushroom",
        color: "blanchedalmond",
        fodmap: "high"
    },
    {
        kind: "avocado",
        color: "lightgreen",
        fodmap: "high"
    },
    {
        kind: "cauliflower",
        color: "ivory",
        fodmap: "high"
    },
    {
        kind: "apricot",
        color: "coral",
        fodmap: "high"
    }
  ];

  var w = 2000;
  var h = 500;
  
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
                .text(function(d, i){
                  return fruits[i].kind;
                })
  
  text.attr("x", function(d, i){
        return (i * 80) + 10;
      })
      .attr("y", function(d, i){
        if (fruits[i].fodmap == "high"){
          return 100;
        } else if (fruits[i].fodmap == "low"){
          return 270;
        }
      })
      .attr("fill", function(d, i){
        return fruits[i].color;  
      });
      
  rects.attr("x",
         function(d, i) {
	       return (i * 80) + 10;
	     })
	   .attr("y", function(d, i){
	     if (fruits[i].fodmap == "high"){
	       return 110;
	     } else if (fruits[i].fodmap == "low"){
	   	   return 280;
	     }
	   })
	   .attr("width", 10)
	   .attr("height", 80)
	   .attr("fill", function(d, i) {
	 	  return fruits[i].color;
	   }
  );
	 
  d3.select("body").append("p")
				   .text("LOW FODS")
				   .style("color", "white");

}

