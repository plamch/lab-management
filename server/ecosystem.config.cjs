module.exports = {
  apps: [
    {
      name: "server",
      script: "npm",
      watch: ["src", "prisma", "bin", "routes", "app.ts"],
      ignore_watch: ["node_modules", "logs"],
      args: "run start",
      env: {
        TZ: "UTC",
        NODE_ENV: "development",
      },
      env_production: {
        TZ: "UTC",
        NODE_ENV: "production",
      },
    },
  ],
};
