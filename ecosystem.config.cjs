module.exports = {
  apps: [
    {
      name: "taha-portfolio",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      watch: false,
      max_memory_restart: "512M",
      error_file: "/var/log/taha-portfolio/err.log",
      out_file: "/var/log/taha-portfolio/out.log",
      time: true,
    },
  ],
};
