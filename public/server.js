// node js to serve index.html with express
const express = require('express');
const path = require('path');
const app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);
app.listen(port, ip, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
);