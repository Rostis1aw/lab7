const id = Math.floor(Math.random() * 100) + 1;

const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const { UserId, id, title, body } = data;
    console.log(`UserId: ${id}`);
    console.log(`ID: ${id}`);
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
  })
  .catch((error) => console.error(error));
