module.exports = {
    proxy: "localhost:5000", // Your Express server URL
    files: ["public/**/*.*", "views/**/*.*"], // Adjust paths to your static files
    port: 4000 // BrowserSync server port
  };
  