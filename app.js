import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

console.log("Loaded data", data)

/**

 * Starter code
 * Data visualization
 */

/* globals Vue, p5*/

window.addEventListener("load", function () {
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  // VUE!!!
  // Create a new vue interface
  

  new Vue({
    template: `<div id="app">
	    <div ref="canvasHolder"></div>		
		  
      <div v-for="color in colors" :style="{backgroundColor:color.hex }">{{color}}</div>
	
  </div>`,

    mounted() {
     
      // Create P5 when we mount this element
      const s = (p0) => {
        p = p0;

        (p.preload = () => {
          // Any preloading
        }),
          (p.setup = () => {
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            p.colorMode(p.HSL, 360, 100, 100);
            p.ellipseMode(p.RADIUS);
          });

        p.draw = () => {
          // Draw something
        };

        p.mouseClicked = () => {
          // Mouse interaction
        };
      };
      
      
      
      let p = undefined;
      const CANVAS_WIDTH = 400;
      const CANVAS_HEIGHT = 200;
      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
    },
    
    // We will use your data object as the data for Vue
    data() {
      return data
    },
    el: "#app",
  });
});
