const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api"],
    createProxyMiddleware({
      target: "http://localhost:8800",
    })
  );
};

// Don't need to import this anywhere, cra will look for it automatically
// What it does is if anyone tries to visit /auth/google, automatically redirect to locahost:5000
