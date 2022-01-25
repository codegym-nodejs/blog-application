const express = require('express');

const app = express();

app.use(express.static('./public'));

app.listen(3301, () => {
  console.log('App is running at 3301');
})
