const restify = require('restify');
const { graphqlHTTP } = require('express-graphql');

var server = restify.createServer();
server.use(restify.plugins.bodyParser({}));

function respond(req, res, next) {
    console.log(req.body)
    const randomParam = req.body.test
    console.log(randomParam);
    res.send(randomParam);
    next();
}


server.post('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});