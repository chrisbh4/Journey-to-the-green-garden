const express = require('express');
const request = require('request')

const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });



app.get('/rll', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
  request(
    { url:'https://api.interview.rlliquidators.com' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

    //   return res.json(JSON.parse(body));
        res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
