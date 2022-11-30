import words from "./data.json" assert { type: "json" };
import clusters from "./clusters.json" assert { type: "json" };
import uniquewords from "./uniquewords.json" assert { type: "json" };

//process json data
let datawords = words.map((word) => {
  return {
    text: word.word,
    value: word.count,
  };
});
let dataclusters = clusters.map((cluster) => {
  return {
    list: cluster.words,
    index: cluster.cluster,
  };
});

let unique = uniquewords.map((word) => {
  return {
    text: word.word,
  };
});
//choose randomly 100 words from uniquewords
let randomwords = [];
for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * uniquewords.length);
  randomwords.push(uniquewords[random].word);
  uniquewords.splice(random, 1);
}

console.log(randomwords);

let data = {
  words: datawords,
  clusters: dataclusters,
  unique: randomwords,
};

export { data };
