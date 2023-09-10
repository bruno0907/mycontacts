module.exports = (req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
  ];

  const origin = req.header('origin');

  const isAllowedOrigin = allowedOrigins.includes(origin);

  if (isAllowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Max-Age', '10');
  }
  next();
};
