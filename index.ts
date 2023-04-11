import express, {Request, Response, NextFunction} from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use((req, res, next) => {
  console.log('====================================');
  console.log('Time ' + Date.now());
  console.log('====================================');
  next()
});

app.get('/hello', (req, res) => {
  // res.send('How are you man');
  throw new Error('Err');
  res.end();
})

app.use('/users', userRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.set('Content-Type', 'application/json');
  console.log(err.message);
  res.status(401).send({err: err.message});
});

app.listen(port, () => {
  console.log('====================================');
  console.log(`server is running on port: ${port}`);
  console.log('====================================');
})
