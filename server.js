import express from 'express';
import cors from 'cors';
import { connectedDB } from './config/db.js';
import liveStocksRoutes from './routes/liveStocksRoutes.js'; 
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
// Assuming foodRoutes is defined in a separate file


const app = express();
const port = 4000;

app.use(express.json()); // Parse incoming JSON data
app.use(cors()); 

connectedDB(); // Connect to the database (assuming it's implemented in db.js)

// Mount the food routes at the '/api/food' path
app.use('/api/livestocks', liveStocksRoutes);
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res) => {
  res.send("Ok API is working");
});

app.listen(port, () => {
  console.log(`Server is Started on http://localhost:${port}`);
});

//mongodb+srv://group5:group5#3print@cluster0.b9fqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://group5:group5#3print@cluster0.b9fqa.mongodb.net/?

//mongodb+srv://Group5-progroup5:0922221979@cluster0.zjkgp.mongodb.net/final-pro