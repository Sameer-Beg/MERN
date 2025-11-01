const express = require('express');
const app = express();

// Middleware 1
// app.use((req, res, next) => {
//   console.log('Middleware run one time');
//   next(); // Pass control to the next middleware/route
// });

// Middleware 2
// app.use((req, res, next) => {
//   console.log('Middleware run second time');
//   next();
// });

// Route
app.get('/jack', (req, res , next) => {
//   res.send('Hello from Express server with middleware');
    return next(new Error('Something went wrong!'));
});
//error handling middleware
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
})
const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
console.log('Server is ready to handle requests');
