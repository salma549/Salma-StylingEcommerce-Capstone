// middleware.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  };
  
  const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  module.exports = { errorHandler, requestLogger };
  