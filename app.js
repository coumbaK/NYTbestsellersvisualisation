import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

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

        <div id="bestsellerpage">
           <div id="bestsellerpageheader">
                <span> November 2022</span>
               <h1>New York Times Best Sellers</h1>
            </div>
          <div id="bestsellerpagebody">
          <h2 class ="columnheader">Top Words In NYT Best Sellers</h2>
            <div class="main">
           
    
              <div class="word" v-for="word in words" >
               
                <span :style="{fontWeight:800}">{{word.value}}</span>
                 {{word.text}}
              </div>
            </div>
            <div id="lowerpart">
            <div class="column">
             <h2 class ="columnheader"> Top Clusters Of Words</h2>
             <div class = "columnbody">
               <div class="cluster,index" v-for="cluster in clusters">
                 <span :style="{fontWeight:800}">Cluster {{cluster.index}}:</span>  
                 <span v-for ="word in cluster.list"> {{word}}</span>
               </div>
               </div>
           </div>
             
            <div class="column">
            <h2 class ="columnheader"> Unique Words</h2>
            <div class = "columnbody">
               <span v-for ="word in unique" class="tagword"> {{word}}</span>
             </div>
            </div>
           </div>
            </div>
       

        </div>
        </div>`,

    mounted() {
      // Create P5 when we mount this element
      const s = (p0) => {
        p = p0;
        let img;

        (p.preload = () => {
          // Any preloading

          img = p.loadImage("https://cdn.glitch.global/a5265ad8-4e7c-4eb4-97a0-590b4d551bd3/picnyt.png?v=1669795499777");
        }),
          (p.setup = () => {
            p.noLoop();
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            p.colorMode(p.HSL, 360, 100, 100);
            p.ellipseMode(p.RADIUS);
          });

        p.draw = () => {
          p.image(img, 250, 0, 161, 1110);
          
        };

        p.mouseClicked = () => {
          // Mouse interaction
        };
      };

      let p = undefined;
      const CANVAS_WIDTH = 400;
      const CANVAS_HEIGHT = 1200;
      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
      $; //*/
    },

    // We will use your data object as the data for Vue
    data() {
      return data;
    },
    el: "#app",
  });
});
