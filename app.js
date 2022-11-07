import xkcdData from "./xkcd.json" assert { type: "json" };
console.log(xkcdData)/**

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



	new Vue({
		template: `<div id="app">
			
		  APP
      <div v-for="color in xkcdData.colors">{{color}}</div>
		</div>`,
   

		data() {
      return {
        xkcdData: xkcdData
			};
		},
		el: "#app",
	});
});
