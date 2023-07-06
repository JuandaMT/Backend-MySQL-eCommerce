const express = require('express');
const app = express();
const PORT = 3000
const { typeError } = require('./middleware/errors.js');


app.use(express.json())

app.use('/users', require('./routes/users'));
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));

app.use(typeError)

app.listen(PORT, () => console.log('Servidor levantado en el puerto ' + PORT))