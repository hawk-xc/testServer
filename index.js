const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${process.env.PORT || 3000}`);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'welcome test apis'
    });
});