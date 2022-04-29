console.log('MY_SECRET: ', process.env.MY_SECRET);
console.log('ALL ENVS: ', process.env);

// Network connection test for security
//
// const exec = require('child_process').exec;
// function puts(error, stdout, stderr) { console.log(stdout) }
//
// const net = require('net');
// const Promise = require('bluebird');
// const host = "10.80.162.253"
// const port = "443"
//
// function checkConnection(host, port, timeout) {
//     return new Promise(function(resolve, reject) {
//         let socket = net.createConnection(port, host, function() {
//             clearTimeout(timer);
//             resolve();
//             socket.end();
//         });
//         timeout = timeout || 10000;     // default of 10 seconds
//         let timer = setTimeout(function () {
//             reject("timeout");
//             socket.end();
//         }, timeout);
//         socket.on('error', function(err) {
//             clearTimeout(timer);
//             reject(err);
//         });
//     });
// }
//
// checkConnection(host, port).then(function() {
//     // successful
//     console.log('Successful connection to', host, port);
// }, function(err) {
//     console.log('Failed to connect to', host, port);
//     // error
// })
//
// End of network security test


// console.log('Ping Google IP');
// exec("ping -c 3 74.125.193.113", puts);
//
// console.log('Ping Kpack Webhook Service IP');
// exec("ping -c 3 10.80.162.253", puts);
//
// console.log('Wget Kpack Webhook Service IP on port 443');
// exec("wget 10.80.162.253:443", puts);
//
// console.log('Wget Kpack Webhook Service IP on port 443');
// exec("curl 10.80.162.253:443", puts);


// async function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// (async function() {
//   console.log('Waiting 500 seconds');
//   await sleep(50000);
//   console.log('Done waiting!')
// })();
