const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const preferredPort = Number(process.env.PORT || 3000);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const requested = path.normalize(path.join(root, cleanPath));
  if (!requested.startsWith(root)) return null;

  if (fs.existsSync(requested) && fs.statSync(requested).isFile()) return requested;

  const indexFile = path.join(requested, "index.html");
  if (fs.existsSync(indexFile)) return indexFile;

  return null;
}

function start(port) {
  const server = http.createServer((req, res) => {
    const file = resolveFile(req.url === "/" ? "/index.html" : req.url);

    if (!file) {
      res.writeHead(404, { "content-type": mime[".html"] });
      res.end("<h1>404</h1><p>Pagina no encontrada.</p>");
      return;
    }

    res.writeHead(200, {
      "content-type": mime[path.extname(file)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    fs.createReadStream(file).pipe(res);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      start(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, () => {
    console.log(`Dinero Facil disponible en http://localhost:${port}/`);
  });
}

start(preferredPort);
