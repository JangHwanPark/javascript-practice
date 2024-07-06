// const url = "https://jsonplaceholder.typicode.com/posts/1"
const url = "products.json"
fetch(url)
  .then(data => data.json())
  .then((data) => console.log(data));