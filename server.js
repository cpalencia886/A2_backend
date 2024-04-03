const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// app.post('/api/register', (req, res) => {
//     //res.json({ message: 'Registration successful' });
// });
const regroutes = require('./MVC/routes/regroutes')
app.use(regroutes)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error');
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
