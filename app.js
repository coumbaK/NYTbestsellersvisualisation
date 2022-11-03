/**
 * Starter code
 * Chat application with a bot
 */

/* globals Vue, p5, BOT_MAPS, BotSimulator */

window.addEventListener("load", function () {
	//------------------------------------------------------
	//------------------------------------------------------
	//------------------------------------------------------
	//------------------------------------------------------
	// VUE!!!
	// Create a new vue interface

  console.log("LOADING DATA....")
  d3.csv("data/perfume_data.csv", function(data) {
    console.log("loaded data???")
    for (var i = 0; i < data.length; i++) {
       console.log(data[i])
    }
});
  
  
	new Vue({
		template: `<div id="app">
			
		  SOME DATA VIZ
		 
		</div>`,
   

		mounted() {

		},
		
	

		data() {
     
			return {
				
			};
		},
		el: "#app",
	});
});
