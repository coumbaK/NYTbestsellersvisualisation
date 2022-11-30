import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

console.log("Loaded data", data);

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
		  
  </div>`,

    mounted() {
      // Create P5 when we mount this element
      const s = (p0) => {
        p = p0;

        (p.preload = () => {
          
          img = p.loadImage("https://cdn.glitch.global/a5265ad8-4e7c-4eb4-97a0-590b4d551bd3/pic.png?v=1669782875891");
          // Any preloading
       
        }),
          (p.setup = () => {
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            p.colorMode(p.HSL, 360, 100, 100);
            p.ellipseMode(p.RADIUS);
          });

        p.draw = (img) => {
          // Draw something
          
          p.image(img, 0, 0);
          // Maybe filter first!
          
         
          // Quickdraw drawing example
          // You would need to do something *more interesting* than just drawing the images
          // e.g https://qz.com/994486/the-way-you-draw-circles-says-a-lot-about-you
          // this.cats.forEach((drawing, index) => {
          //    p.stroke(index*20, 100, 50);
          //   p.noFill()
          //   // Quickdraw drawings are made out of *strokes*, 
          //   // each of which (after using quickdrawToVectors)
          //   // has a bunch of vertices in an array
          //   drawing.forEach((stroke) => {
          //     // Draw each *vertex* of the stroke
          //     p.beginShape();
          //     stroke.forEach((vertex) => {
          //       p.vertex(...vertex);
          //     });
          //     p.endShape();
          //   });
          // });
        };

        p.mouseClicked = () => {
          // Mouse interaction
        };
      };

      let p = undefined;
      const CANVAS_WIDTH = 400;
      const CANVAS_HEIGHT = 300;
      
      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
    },

    // We will use your data object as the data for Vue
    data() {
      data.colorName = "purple"
      return data;
    },
    el: "#app",
  });
});
