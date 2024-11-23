import express from 'express';

const app = express();
const port = 4000;


// Rutas de la API
app.get('/api/products', getProducts);

function getProducts(_: express.Request, res: express.Response) {
    // Simula una base de datos
    const products = [
        { id: 1, name: 'Producto 1', price: 10.99 },
        { id: 2, name: 'Producto 2', price: 5.49 },
        { id: 3, name: 'Producto 3', price: 7.99 }
    ];
    
    res.json(products);
}

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
