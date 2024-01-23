import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import connecetDb from './src/config/db.js';
import swaggerSpec from './src/public/swagger.js';
import userRoutes from './src/routes/userRoutes.js';

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
}
const app = express();
const PORT = 5000
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connecetDb().catch(err => console.log(err))
app.use(cors(corsOptions))
app.use(express.json())
app.use(userRoutes);

app.listen(PORT, () =>{
    console.log(`Server is Running on ${PORT}`);
})