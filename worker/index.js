const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

const fib = index => {
    if (index < 2 ) return 1;
    return fib(index - 1) + fib(index - 2);
    console.log(index);
}

sub.on('message', (channel, message) => {
    console.log("on redis!!");
    redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');