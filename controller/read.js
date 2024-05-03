const fs = require('fs');
const http = require('http');

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    req.body.data = data
    console.log(data);
  }
});










// // async function read() {
// //   try {
// //     const data = await fs.readFile('../sample.txt', { encoding: 'utf8' });
// //     console.log(data);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }


// // module.exports = read;

// module.exports = http.createServer(function (req, res) { 
//     fs.readFile('../sample.txt', function(err, data) { 
//        res.writeHead(200, {'Content-type': 'text/html'}); 
//        res.write(data);           
//        return res.end(); 
//      }); 
//   }).listen(8080);

//  = http.createServer;