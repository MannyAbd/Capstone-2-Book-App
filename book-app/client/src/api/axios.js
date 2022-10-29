import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://localhost:3500'
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts = async () => {
    const res = await api.get('/posts')
    return res.data
}

export const Books = axios.create({
    baseURL: 'https://openlibrary.org'
})

export const getBooks = async () => {
    const res = await Books.get('/search.json?q=wool+hugh')
    return res.data
}