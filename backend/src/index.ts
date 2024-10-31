import express from 'express';
import productRoutes from './routes/productRoutes'; // Adjust the path as necessary

const app = express();
app.use(express.json()); // Middleware for JSON parsing

app.use('/api', productRoutes); // Use the product routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
