const multiply= (a, b) => a*b ;
console.log(multiply(5, 4))

async function getPostTitle(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data.title;
}
getPostTitle(2).then(title => console.log(title));


