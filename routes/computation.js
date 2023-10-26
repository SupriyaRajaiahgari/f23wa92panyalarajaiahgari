var express = require('express');
var router = express.Router();
 
/* GET computation page. */
router.get('/', function(req, res) {
  // Check if there is a query parameter 'x' in the request
  const x = req.query.x;
 
  if (x !== undefined) {
    // If 'x' is provided in the query, parse it to a float and calculate the hyperbolic tangent
    const xFloat = parseFloat(x);
    const result = Math.tanh(xFloat);
    res.send(`Math.tanh() applied to ${xFloat} is ${result}`);
  } else {
    // If 'x' is not provided, generate a random value between -1 and 1 and calculate the hyperbolic tangent
    const randomX = Math.random() * 2 - 1; // Random value between -1 and 1
    const result = Math.tanh(randomX);
    res.send(`Math.tanh() applied to a random value ${randomX} is ${result}`);
  }
});
 
module.exports = router;