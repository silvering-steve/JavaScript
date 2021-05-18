const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });

//----------------------------------------------------------------

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;

//   const { method } = request;

//   if (method === "GET") {
//     response.end("<h1>Hello<h1>");
//   }

//   if (method === "POST") {
//     response.end("<h1>Hi<h1>");
//   }

//   if (method === "PUT") {
//     response.end("<h1>Hai<h1>");
//   }

//   if (method === "DELETE") {
//     response.end("<h1>Hai<h1>");
//   }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`This server run at http://${host}:${port}`);
// });

//------------------------------------------------------------

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;

//   const { method } = request;

//   if (method === "GET") {
//     response.end("<h1>Hello</h1>");
//   }

//   if (method === "POST") {
//     let body = [];

//     request.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     request.on("end", () => {
//       body = Buffer.concat(body).toString();
//       const { name } = JSON.parse(body);
//       response.end(`<h1>Hello ${name} !</h1>`);
//     });
//   }

//   if (method === "PUT") {
//     response.end("<h1>Hai</h1>");
//   }

//   if (method === "DELETE") {
//     response.end("<h1>Hai</h1>");
//   }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`This server run at http://${host}:${port}`);
// });

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader("X-Powered-By", "NodeJS");

  const { url, method } = request;

  if (url === "/") {
    // curl to http://localhost/
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "This is homepage",
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `This page cannot be access by ${method} request`,
        })
      );
    }
  } else if (url === "/test") {
    // curl to http://localhost/test
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "This it the test page",
        })
      );
    } else if (method === "POST") {
      response.statusCode = 200;
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`Hello ${name} !`);
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `This page cannot be access by ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "The page you requested isn't avaible",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`This server run at http://${host}:${port}`);
});
