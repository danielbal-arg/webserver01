const http = require('http');

http.createServer((req,res) => {

    res.write('Hola yo!')
    res.end();

})
.listen(8080);