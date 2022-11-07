// async function fetchPosts() {
//   const response = await fetch('xkcd.json',  {
//     method: 'get',
//     mode: 'no-cors',
//     headers: {
//        'Access-Control-Allow-Origin' : '*'
//     }})
//   console.log(response)
//   const posts = await response.json()
//   return posts
// }

// fetchPosts()

let url = 'xkcd.json'
let params = {
    method: 'get',
    mode: 'no-cors',
    headers: {
       'Access-Control-Allow-Origin' : '*'
    }}

fetch(url, params)
.then(response => {
  console.log("got ", response)
  return response.text()
})
.then((data) => {
  console.log(data)
  // resolve(data ? JSON.parse(data) : {})
})
.catch((error) => {
  console.log("error")
  // reject(error)
})