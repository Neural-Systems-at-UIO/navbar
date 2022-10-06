// node js to serve index.html with express
const express = require('express');
const path = require('path');
const app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    // console.log the bearer token
    console.log('bearer')
    console.log(req.headers.authorization);
    console.log('req', req)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);
app.listen(port, ip, () => {
    console.log(`test Example app listening at http://localhost:${port}`)
}
);