const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/join",
    proxy({
      target: "https://sejong-uspace.herokuapp.com",
      changeOrigin: true,
    })
  );
};