const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
        title: 'iphone 14',
        src: 'images/iphone.webp',
        width: '100px'
    },
    {
        title: 'oppo',
        src: 'images/oppo.png',
        width: '100px'
    },
    {
        title: 'samsung',
        src: 'images/samsung.jpeg',
        width: '100px'
    },
    {
        title: 'xiaomi',
        src: 'images/xiaomi.png',
        width: '100px'
    }
]


app.get('/', (req, res) => {
res.render('home', {data: products})
})

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
})

