import express from 'express';
import morgan from 'morgan';
import routerMain from './routes/main.routes.js';
import routerUser from './routes/user.routes.js';

export const app = express();
export const port = process.env.PORT || 3000;

// Settings
app.set('port', port); // Set port

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.use('/api', routerMain);
app.use('/api' ,routerUser);

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Allow', 'GET', 'POST', 'PUT', 'DELETE');
    res.header()
    next();
});