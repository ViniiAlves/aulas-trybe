const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3001;

const books = [
    { id: 1, title: 'Livro 1', author: 'Vinícius Alves'},
    { id: 2, title: 'Livro 2', author: 'Victoria Berrondo'},
    { id: 3, title: 'Livro 3', author: 'Vanderleide Paes'},
    { id: 4, title: 'Livro 4', author: 'Carlos Alberto'},
    { id: 5, title: 'Livro 5', author: 'Sam Alves'},
    { id: 6, title: 'Livro 6', author: 'Urêa Trombadinha'},
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/books', (req, res) => {
    const { limit } = req.query;
    const result = books.slice(0, limit || books.length);
    res.status(200).json(result);
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id === +id);
    
    if (!book) return res.status(404).json({ message: 'Livro não encontrado!'});

    res.status(200).json(book);
});

app.post('/books', (req, res) => {
    const {title, author} = req.body;
    const book = { id: Date.now(), title, author };
    books.push(book);
    res.status(200).json(book);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));