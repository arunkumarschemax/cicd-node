const express = require('express');
var path = require('path');



const app = express();
console.log(__dirname);

app.use(express.static(path.join(__dirname, '/ui/build')));



app.get('/names', (req, res) => {
    res.send("Shiva")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
