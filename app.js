const express = require('express')
const app = express();
const path = required('path')

app.use(express.static(path.join(_dirname, '/ui/build')))


app.get('/names', (req, res) => {
    res.send("Shiva Arun")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
