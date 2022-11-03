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

//   console.log("LOADING DATA....")
//   d3.csv("data/perfume_data.csv", function(data) {
//     console.log("loaded data???")
//     for (var i = 0; i < data.length; i++) {
//        console.log(data[i])
//     }
// });
  
  let url = 'data/hail_size.json'
  // console.log("REQUEST")
  // fetch('data/hail_size.json')
  //   .then((response) => {
  //   console.log(response)
  //   response.json()
  // })
  //   .then((json) => console.log(json));
  
  fetch(urlToUser, parameters)
  .then(response => {
    return response.text()
  })
  .then((data) => {
    resolve(data ? JSON.parse(data) : {})
  })
  .catch((error) => {
    reject(error)
  })
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
