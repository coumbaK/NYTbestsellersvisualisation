
console.log("....Loading data")

import cats from "./data/quickdraw-cats-small.json" assert { type: "json" };
import palettes from "./data/colorlovers-palettes.json" assert { type: "json" };
import xkcdColor from "./data/xkcd.json" assert { type: "json" };
import wikiColors from "./data/wikipedia.json" assert { type: "json" };


// Load and preprocess any data

// Preprocess data

// Often its useful to store your data 
// (planets, movies, colors, soccer matches,etc), 
// in a class for easier access
class Color {
  constructor({ hex, name }) {
    this.hex = hex;
    this.name = name;
    this.hsl = hexToHSL(hex);
  }
}

let colors = xkcdData.colors.map(
  (c) => new Color({ hex: c.hex, name: c.name })
);


let data = {
  colors: []
}


export { data }