import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (res, req) => {
  res.send('How are you man');
})

app.listen(port, () => {
  console.log('====================================');
  console.log(`server is running on port: ${port}`);
  console.log('====================================');
})
