// Función para recuperar 100 posts de una API
const getPosts = async (path) => {
    try {
        const res = await fetch(path);
        const data = await res.json();

        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

getPosts('https://jsonplaceholder.typicode.com/posts');
