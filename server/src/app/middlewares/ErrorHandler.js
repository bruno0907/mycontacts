/* eslint-disable no-console */
const errorHandler = (error, req, res, next) => {
  console.log('### Error Handler ###');
  console.error(error);
  res.sendStatus(500);
};

module.exports = errorHandler;
