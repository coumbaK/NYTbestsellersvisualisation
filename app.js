import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

console.log("DATA", data)

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

  let p = undefined;
  const CANVAS_WIDTH = 400;
  const CANVAS_HEIGHT = 200;

  new Vue({
    template: `<div id="app">
	    <div ref="canvasHolder"></div>		
		  
      <div v-for="color in xkcdData.colors" :style="{backgroundColor:color.hex }">{{color}}</div>
	
  </div>`,

    mounted() {
      console.log("REQUEST DATA");
      let url = `https://gutendex.com/books/?topic=pirates`;

      fetch(url, {})
        .then((res) => res.json())
        .then((out) => console.log("Checkout this JSON! ", out))
        .catch((err) => {
          throw err;
        });

      // Create P5
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
          //            Draw all the colors
          // colors.forEach(c => {
          //   p.fill(c.hsl)
          //   p.circle(c.hsl[0], c.hsl[1], c.hsl[2]*.1 + 1)
          //    })

          cats.forEach((cat) => {
            cat.drawing.forEach((stroke) => {
              let x = stroke[0];
              let y = stroke[1];
              p.noFill();
              p.beginShape();
              for (var i = 0; i < x.length; i++) {
                p.vertex(x[i], y[i]);
              }
              p.endShape();
            });
          });
        };

        p.mouseClicked = () => {
          // Mouse interaction
        };
      };

      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
    },

    data() {
      return {
        xkcdData: xkcdData,
      };
    },
    el: "#app",
  });
});
