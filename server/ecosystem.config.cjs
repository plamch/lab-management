module.exports = {
  apps: [
    {
      name: "server",
      script: "bin/www.js",
      watch: ["src", "prisma", "bin", "routes", "app.js"],
      ignore_watch: ["node_modules", "logs"],
      node_args: "--experimental-specifier-resolution=node",
      env: {
        TZ: "UTC",
      },
    },
  ],
};
