const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World";
    },
  },

  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "This page cannot be accessed with this method";
    },
  },

  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "This is About";
    },
  },

  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "This page cannot be accessed with this method in this page";
    },
  },

  //------------------------------------------------------------------------

  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "This page cannot be accessed with this method or maybe the path";
    },
  },

  //------------------------------------------------------------------------

  {
    method: "GET",
    path: "/users/{username?}",
    handler: (request, h) => {
      const { username = "stranger" } = request.params;
      return `User ${username}!`;
    },
  },

  {
    method: "GET",
    path: "/hello/{user?}",
    handler: (request, h) => {
      const { user = "stranger" } = request.params;
      return `Hi ${user}`;
    },
  },

  {
    method: "GET",
    path: "/query",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hi ${name} from ${location}`;
    },
  },

  {
    method: "GET",
    path: "/input/{user?}",
    handler: (request, h) => {
      const { user = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${user}`;
      }

      return `Hello, ${user}`;
    },
  },

  {
    method: "GET",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    },
  },
];

module.exports = routes;
